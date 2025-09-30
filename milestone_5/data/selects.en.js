/**
 * A JS object that holds the data for the selects. 
 * The select data can be structured in different ways. Here, a JS object is used.
 * 
 * In JavaScript, an object is a standalone entity, with properties. A property 
 * of an object can be explained as a variable that is attached to the object.
 * A property may be an identifier, OR a Number OR a String.
 */

function generateDioptres() {
    const options = [];
    for (let d = -11; d <= 6; d += 0.25) {
        let value = d.toFixed(2);            // keep 2 decimals
        options.push(value);
    }
    return options;
}

export const selects = {//JS Object which properties are strings
    "type": ["classic", "modern", "sport"],
    "color": ["black", "brown", "white"],
    "dioptreLeft": generateDioptres(),   // dynamically
    "dioptreRight": generateDioptres()   // dynamically
};