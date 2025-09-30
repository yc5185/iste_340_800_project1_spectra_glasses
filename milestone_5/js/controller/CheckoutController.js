import {Controller} from './Controller.js';

/**
 * Responds to user inputs. Here, we use the FormData, a JS built-in class that 
 * provides a way to easily construct a set of key/value pairs representing form 
 * fields and their values.
 * 
 * More at {@link https://developer.mozilla.org/en-US/docs/Web/API/FormData FormData}.
 */
export class CheckoutController extends Controller {
    constructor(model, view) {
        super(model, view);

        this.view.createInputs(this.model.getInputData());

        // register one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener("change", this.handleInputChange);
        });

        // register form submit handler
        this.view.form.addEventListener("submit", this.handleFormSubmit);
    }

    /**
     * Handles input changes. Retrieves the input element that triggered the 
     * event and updates the model with the new value from the input element.
     * The model property corresponding to the input's name is updated with its 
     * value.
     * 
     * @param {Event} event - an object describing the event that has occurred
     * @returns {undefined}
     */
    handleInputChange = (event) => {
        let input = event.target;
        if(!this.view.isValid(input.name, input.value)) return;
        this.model[input.name] = input.value;
        this.model.store();
    }

    /**
     * Handles form submission. Validates all form inputs and processes the order
     * if all validations pass.
     * 
     * @param {Event} event - the form submit event
     * @returns {undefined}
     */
    handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Validate all inputs
        let allValid = true;
        this.view.inputs.forEach((input) => {
            if (!this.view.isValid(input.name, input.value)) {
                allValid = false;
            }
        });
        
        if (allValid) {
            // All inputs are valid, process the order
            alert(`Order submitted successfully!\n\nDetails:\nName: ${this.model.name}\nPhone: ${this.model.phone}\nEmail: ${this.model.email}`);            
            // Optionally clear the form or redirect
            // this.view.form.reset();
        } else {
            alert('Please fix the validation errors before submitting.');
        }
    }

}