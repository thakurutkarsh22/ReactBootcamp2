// 1. dist folder is a Uglified and Compressed version of my application 
// 2. this is used for production. 
// 3. why we are doing this ? so that user downloads our frontend code in their browser in min time and bandwidth.

// public folder - stores static assets.  (images, videos, audios, fonts, config)

// src folder - this folder hold your application code.

// .gitIgnore - files that we do not want to upload on github or files and oflders we do not want git to track.


// --------------- COMPONENT -----------------
/*
A React component is a reusable piece of code that creates the user interface (UI) of a React application
// App function is a COMPONENT

what ever function component return it is UI.


*/


// ------------- JSX (JavaScript XML) ------------------------
/*
    it is JS only, acting as kind of HTML for the UI
*/

// ------------------ root ------------------
/**
 * Every UI code (component) is going to be inside the <div id="root"></div> (which is in index.html inside sit folder)
 */

// ---------------- rendering components <HelloCOmponent /> -------------
/**
 * RENDERING: means creation of Object (JSX) in the memory
 * 
 * in development mode ANY COMPONENT Will RENDER 2 times
 * in production ANY component will render 1 time only.
 */

// ------------------------- state and props -------------------------------
/**
 * state: a component will show what on the screen (what value) is state.
 * props: a component will get the value from outside, to recieve we need props (see ListItem component)
 */


// --------------------- FRAGMENTS -----------------