export class Model {
    
    /**
     * Stores animal data accross browser sessions. Window.localStorage is used 
     * to store the model as a JSON string under the key 'animal'.
     * 
     * @returns {undefined}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
     */
    store() {
        localStorage.setItem('product', JSON.stringify(this));
    }     
}