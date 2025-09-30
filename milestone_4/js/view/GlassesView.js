/**
 * Class that represents the application view. The view displays information 
 * contained in the model: type & color. The view does not obtain the information 
 * directly from the model, it uses the controller as a mediator. 
 * 
 * The view holds references to all UI elements that the user interacts with 
 * AND for which the event-handling mechanisms need to be implemented.
 */

export class GlassesView {
    /**
     * Creates a GlassesView object, initializes references, and optionally
     * renders labels.
     * 
     * @param {Object} labels - Optional labels config with properties productTagline and productLegend.
     */
    constructor(labels) {
        this.glassesImage = document.querySelector("#glasses-image");
        this.selects = [];
        this.selectsContainer = document.querySelector("#div-selects");
        this.renderLabels(labels);
    }

    /**
     * Dynamically creates an HTML select element with options and appends it to #div-selects.
     * 
     * @param {String} name - The name of the select (used for naming and labeling).
     * @param {Array<String>} options - Array of option strings.
     */
    createSelect(name, options) {
        const selectsDiv = document.querySelector("#div-selects");

        // Insert select element with initial option
        selectsDiv.insertAdjacentHTML("beforeend", `
            <select name="${name}">
                <option value="undefined" disabled selected>-- Select a ${name} --</option>
            </select>
        `);

        // Reference to the newly created select
        const select = selectsDiv.querySelector(`select[name=${name}]`);

        // Add options dynamically
        options.forEach(option => {
            select.insertAdjacentHTML("beforeend", `
                <option value="${option}">${option}</option>
            `);
        });

        this.selects.push(select);
    }

    /**
     * Updates the preview glasses image based on type and color.
     * 
     * @param {String} type - Selected glasses type.
     * @param {String} color - Selected glasses color.
     */
    renderGlasses(type, color) {
        const imgSrc = `media/${type}-${color}.png`;
        this.glassesImage.src = imgSrc;
    }

    /**
     * Updates header and legend labels in the view based on label config.
     * 
     * @param {Object} labels - Object with keys `productTagline` and `productLegend`.
     */
    renderLabels(labels) {
        if (!labels) return;
        if (labels.productTagline) document.querySelector("h1").textContent = labels.productTagline;
        if (labels.productLegend) document.querySelector("legend").textContent = labels.productLegend;
    }

    createAllSelects(selectsData) {
    const selectsDiv = document.querySelector("#div-selects");
    selectsDiv.innerHTML = '';  // Clear previous selects
    this.selects = [];
    
    for (const [name, options] of Object.entries(selectsData)) {
        selectsDiv.insertAdjacentHTML("beforeend", `<label for="${name}">Select ${name.charAt(0).toUpperCase() + name.slice(1)}</label>`);
        this.createSelect(name, options);
    }
    }
}
