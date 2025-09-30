/**
 * This is the application's entry point based on the MVC architectural pattern.
 * The App class serves multiple responsibilities in a structured, modular JavaScript application:
 * 
 * 1. MVC Initialization:
 *    - Depending on the current HTML page (e.g., `index.html`, `checkout.html`), the appropriate 
 *      controller, model, and view are dynamically loaded and initialized.
 *    - The controller acts as the brains of the application, connecting the model (data/business logic)
 *      and the view (UI). It handles user input and updates the model/view accordingly.
 * 
 * 2. Routing:
 *    - The App class functions as a basic router by inspecting the current URL and determining 
 *      which page-specific MVC logic to load.
 *    - It extracts the page name from the URL and delegates the loading of appropriate modules.
 *    - This routing mechanism ensures each page is dynamically initialized only when needed,
 *      enabling lazy loading and reducing initial load time.
 * 
 * 3. Modular Application Structure:
 *    - The application treats each component (controller, model, view) as an ES Module.
 *    - JavaScript modules are reusable, encapsulated code units that expose only what is explicitly exported.
 *    - Benefits of this modularity include:
 *        - Easier debugging and maintenance
 *        - Logical separation of responsibilities
 *        - Reduced global namespace pollution
 *        - Code reuse across different parts of the application
 * 
 * By combining the MVC pattern with dynamic routing and ES module loading, this App class 
 * supports a scalable, efficient, and well-organized front-end architecture.
 *
 * @class App
 * @module App
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
 */
class GlassesApp {
    constructor() {
        const page = window.location.pathname.split('/').pop();
        this.importMVC(page);
    }

    /**
     * Loads MVC module asynchronously and dynamically. The JS built-in import() 
     * method is used to import different modules based on the web page.
     *  
     * @link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import
     * 
     * @param {type} page - The web page for which the modules are loaded
     * @returns {undefined}
     */
    async importMVC(page) {
        switch (page) {
            case 'index.html':
                const {GlassesController} = await import('./controller/GlassesController.js');
                const {GlassesModel} = await import('./model/GlassesModel.js');
                const {GlassesView} = await import('./view/GlassesView.js');
                const {selects} = await import('../data/selects.en.js');
                new GlassesController(new GlassesModel(selects), new GlassesView());
                break;
            case 'checkout.html':
                const {CheckoutController} = await import('./controller/CheckoutController.js');
                const {CheckoutModel} = await import('./model/CheckoutModel.js');
                const {CheckoutView} = await import('./view/CheckoutView.js');
                new CheckoutController(new CheckoutModel(), new CheckoutView());
                break;
        }
    }
}

const app = new GlassesApp();