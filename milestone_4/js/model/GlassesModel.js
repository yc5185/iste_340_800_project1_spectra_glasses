import {Model} from './Model.js';

/**
 * Represents the application model. The model contains data and information 
 * about animals, such as their type and color. It can retrieve data from either 
 * a database or files, which may be located locally or externally. The model 
 * does not communicate directly with the view, instead, it is accessed by a 
 * controller as needed.
 */

export class GlassesModel extends Model {
    #selects = null; // private field holding external select options

    /**
     * Creates an object representing the Glasses model.
     * 
     * @param {Object} selects - Reference to the external resource with options for selects.
     * @returns {GlassesModel} The object representing the glasses model.
     */
    constructor(selects) {
        super();
        // Assign the selects to the private field #selects
        this.#selects = selects;

        /*
         * Instead of hardcoding, define object properties dynamically based on 
         * the keys of #selects. By doing so, iterate over the properties and 
         * assign "undefined" as the initial value. This approach is equivalent to: 
         * 
         * this.type = "undefined";
         * this.color = "undefined";
         */
        let properties = Object.keys(this.#selects);
        properties.forEach((property) => {
            this[property] = "undefined";
        });
    }

    /**
     * Returns an array of this object's property names.
     * Used by the View to dynamically render select elements.
     * 
     * @returns {Array<String>} Array of property names.
     */
    getProperties() {
        return Object.keys(this);
    }

    /**
     * Returns an array of this object's property values.
     * Used by the View to dynamically render the image.
     * 
     * @returns {Array<String>} Array of property values.
     */
    getValues() {
        return Object.values(this);
    }

    /**
     * Returns an array of options for a given select by name.
     * 
     * @param {String} name - The name of the select element.
     * @returns {Array<String>} Array of option strings for the select.
     */
    getOptions(name) {
        return this.#selects[name];
    }
    
    /**
     * Local Storage
     * Stores animal data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'glasses'.
     * 
     * @returns {undefined}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
     */
    store() {
        localStorage.setItem('product', JSON.stringify(this)); 
    }   
}
