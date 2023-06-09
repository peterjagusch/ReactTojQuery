/**
 * React to jQuery
 * Author: Peter Jagusch
 * Date: 9 June2023
 * https://github.com/peterjagusch
 */
 
 
/**
 
	How to send data from React to jQuery 
	From react :
 */

//Send values to use as object or array of just single values
window.parent.postMessage({ message: "getAppData", value: item }, "*");
//Send completed message to say done
window.parent.postMessage({ message: "getAppData", value: "completed" }, "*");


//Setup event listeners and get functions in jQuery

//Set up event listener
window.addEventListener('message', function (event) {
    eventer(event);
}, false);

// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
function eventer(e) {
	//e.data is data coming in from react
    if (e.data.value == "completed") {
		//Completed.
    }
}