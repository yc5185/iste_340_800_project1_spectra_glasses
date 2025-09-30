/**
 * Class that represents the application controller. The controller is responsible 
 * for accessing data from the model and displaying it on the view. The controller 
 * is used to intermediate between the view and the model. It monitors user interactions 
 * with the view and communicates any changes to the model. On the other hand, 
 * changes (if any) to the model are observed by the controller and subsequently 
 * reflected in the view.  
 * 
 * The controller contains the code that handles different types of events. The
 * controller's methods are event handlers.
 * 
 * BEWARE of the 'this' keyword. The 'this' keyword behaves a little differently
 * in JavaScript compared to other languages. In most cases, the value of 'this'
 * is determined by how a function is called (runtime binding). Inside a handler,
 * 'this' points to the UI element that triggered the event. Inside an arrow 
 * function, 'this' points to the object that owns/defines the arrow function.
 * Here, that's the AnimalController object.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

export class GlassesController {
    /**
     * Creates an object representing the animal controller.
     * 
     * @param {type} model - The model the controller interacts with.
     * @param {type} view - The view the controller interatcs with.
     * @returns {GlassesController} The object representing the animal controller.
     */

    constructor(model, view) {
        this.model = model;
        this.view = view;

        // 1. Create selects dynamically based on model properties and options
        let properties = this.model.getProperties();
        properties.forEach(property => {
            this.view.createSelect(property, this.model.getOptions(property));
        });

        // 2. Attach change event handlers to all selects for user interaction
        this.view.selects.forEach(select => {
            select.addEventListener('change', this.handleSelectChange);
        });

        // Attach click event to checkout button for redirect
        this.view.checkoutButton.addEventListener('click', () => {
            if (!this.view.checkoutButton.disabled) {
                window.location.href = 'checkout.html'; // your actual checkout page
            }
        });
    }

    /** 
     * Handles "change" events fired by input fields. 
     * On change, the model is updated to reflect the new values and the view 
     * is tasked with enabling/disabling the submit button. * 
     * 
     * @param {Event} event - the event to be processed 
     */ 
    handleSelectChange = (event) => {
        let select = event.target;

        // Update the model property with the selected value
        this.model[select.name] = select.value;
        this.model.store(); // local Storage on change


        // Update the view image based on current model values
        let values = this.model.getValues();
        this.view.renderGlasses(...values);

        // Update the checkout button enabled/disabled state
        this.view.toggleCheckoutButton();
    }
}
