import {Model} from './Model.js';
/**
 * Class representing the form model. The model is made of the 'name' property 
 * initilized with an empty string, and additional properties loaded from 
 * localStorage. 
 * 
 * @type type
 */
export class CheckoutModel extends Model {
    constructor() {
        super();

        /* 1.  initialise the fields we expect */
        this.name = '';
        this.phone = '';
        this.email = '';

        /* 2.  pull any product that was saved in <localStorage> */
        this.loadSavedProduct();
    }

    /**
     * Loads product from local storage and copies its properties into this model.
     * 
     * @returns {undefined}
     */
    loadSavedProduct() {
        const product = JSON.parse(localStorage.getItem('product')) || {};
        Object.assign(this, product);            // copy properties onto *this*

// OR
//        let product = JSON.parse(localStorage.getItem('product'));
//        for (let property in animal) {
//            this[property] = animal[property];
//        }
    }

    /**
     * Converts this object to a data object for the view. We could have also 
     * returned Object.entries(this), but then, we would be dealing with an array 
     * of arrays.
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
     */
    getInputData() {
        return JSON.parse(JSON.stringify(this));
    }
}