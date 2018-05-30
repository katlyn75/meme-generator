Meme Generator using Webpack and React
 ===
 
 ## Description
 
Structure your project and build system using `webpack` and `package.json` and associated dependencies. Follow the in-class example closely to ensure that you have all elements of the (development) build system in place. Remember all your Config files, ignore files, etc. etc.

* For this lab, create (hand type) your webpack.config.js **from scratch**, check at each step that it is working and
leaving a **commit history** as each part is added.

## Features

Create a WYSIWYG editor that allows user to create a meme image with text.

User should be able to set properties and those changes are reflected in the display.

Main things:
1. Allow user to both:
   - type in a url, or
   - upload an image
2. Set the meme text for one or both:
   - header text of meme, and/or
   - footer text of meme
3. Set font, color, etc for the set text
4. Export the meme image using `dom-to-image` and `file-saver`
 
For this assignment:
 
* You start with a single `App` component
* Your state will live in the `App` component. Initialize state in constructor: `state = {};`
* Write JSX in the `render` method of the `App` component
    * Use `const { key1, key2 } = this.state` to access state values
    * Remember to bind your methods using `this.someMethod = this.someMethod.bind(this)` in the Component class
    constructor
    * Use `{this.someMethod}` (or whatever you need from the event object) to call
    a method you create on the component that:
        * calls `this.setState({ prop: newValue })` to update the value,
        * and/or does other needed work. 
* Use destructuring and other advanced javascript techniques to keep the code clean and easier to read.
  
## Rubric
  
* Bespoke webpack config with commit history **2pts**
* Functionality works for the end user **2pts**
* Curiosity/Going Beyond What we did in class **2pts**
* Idiomatic React/JSX/JavaScript **2pts**
* Clean code - using destructuring and other techniques to reduce duplication and redundancy **2pts**
