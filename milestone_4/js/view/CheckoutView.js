/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class CheckoutView {
    constructor() {
        this.inputs = [];
        this.form = document.querySelector("#form-checkout");
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} data - JS object containing input-related data for this form
     * @returns {undefined}
     */
    createInputs(data) {
        for (let property in data) {
            this.form.querySelector('#div-inputs').insertAdjacentHTML("beforeend", `
                <label>${property}: </label>
                <input type="text" name="${property}" value="${data[property]}" size="30"/>
                <br>
            `);
        }

        this.inputs = this.form.querySelectorAll('input[type=text]');
    }

    // Validation
    isValid(name, value) {
        let regex;
        switch(name) {
            case "name": regex = /^[A-Za-z\s]+$/; break;         // letters only
            case "email": regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; break; // basic email
            case "phone": regex = /^\d{7,15}$/; break;           // 7-15 digits
            default: return true;
        }

        const input = this.form.querySelector(`input[name="${name}"]`);
        let span = input.nextElementSibling;
        if (!span || span.tagName !== "SPAN") {
            span = document.createElement("span");
            span.style.color = "red";
            input.insertAdjacentElement("afterend", span);
        }

        if (!regex.test(value)) {
            span.textContent = `Invalid ${name}`;
            return false;
        } else {
            span.textContent = "";
            return true;
        }
    }

}