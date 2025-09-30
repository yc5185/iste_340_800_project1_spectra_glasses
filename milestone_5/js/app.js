/**
 * This is application's entry point based on the MVC architectural pattern.
 * The controller that represents the brains of the application is being 
 * initialized and connects the model and the view. 
 * 
 * The controller is used to intermediate between the view and the model. 
 * The controller monitors user interaction with the view and communicates 
 * any changes to the model.
 * 
 * THE APP IS TREATED AS A MODULE.JavaScript modules are reusable pieces of code 
 * that can be exported from one script and imported for use in another script.
 * The functions or variables defined in a module are not visible outside, to other 
 * scripts, unless you explicitly export them. You can decide what to export - 
 * limit your export to those values which should be accessed by other parts of 
 * your app. There is exactly one module per file and one file per module.
 * Modules are useful for a number of reasons. By separating code with similar 
 * logic into files called modules, we can:
 *      - find, fix, and debug the code more easily;
 *      - reuse and recycle defined logic in different parts of our application;
 *      - keep information private and protected from other modules;
 *      - prevent pollution of the global namespace and potential naming collisions, 
 *        by cautiously selecting variables and behavior we load into a program.
 * 
 * Note: Modules only work with the HTTP(s) protocol. A web-page opened via 
 * the file:// protocol cannot use import / export.       
 */

import {GlassesView}         from './view/GlassesView.js';
import {GlassesController}   from './controller/GlassesController.js';
import {GlassesModel}        from './model/GlassesModel.js';
import {selects}             from "../data/selects.en.js";

const app = new GlassesController(new GlassesModel(selects), new GlassesView());

