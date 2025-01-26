# React & Redux Guide 
[Introduction](#introduction)  
  - [What is React?](#what-is-react)  
  - [Working of DOM](#working-of-dom-document-object-model)  
  - [Problems with JavaScript](#problems-with-javascript)  
  - [Working of React](#working-of-react)  
  - [JavaScript vs React](#javascript-vs-react)  
  - [Introduction to Components](#introduction-to-components)  

[Create React App](#create-react-app)  
  - [Setup IDE](#setup-ide)  
  - [Create a React App](#create-a-react-app)  
  - [Project Structure](#project-structure)

## Introduction
### What is React 
  - JavaScript Library to build Dynamic and interactive user interfaces.
  - Build by Facebook at 2011.
  - Currently, most widely used JS library for front-end development.
  - Used to create **SPA** single page web application.
  - At the end the React code is going to get converted into the JS only.
  - Library is the pre-defined code which you can use to develop the project fast.
### Working of DOM (Document-object-model)
  - Browser takes HTML and create DOM.
  - JavaScript helps us modify DOM based on user actions or events.
  - In big applications, Working with DOM becomes complicated.
  - When the browser tries to load the web application it asks the files from the server.
  - After receiving the HTML file it creates the DOM structure which is a tree structure of HTML elements.
  - Then it will explore the CSS to add the styling to these HTML elements. 
### Problems with JavaScript 
  - React has a simpler mental model.
  - JavaScript is cumbersome.
  - JavaScript is Error-Prone.
  - JavaScript is hard to maintain.
  - Maintaining the project is more complex rather than developing the application.

### Working of React
  - No need to worry about querying and updating the DOM.
  - React creates a web page with small and reusable component.
  - React will take care of creating and updating DOM element.
  - It saves a lot of time.

### JavaScript vs React
  - JavaScript is Imperative : You define steps to reach your desired state.
  - React is Declarative : You define the target UI state and then react figures out how to reach that state.

### Introductions to Components.
  - Components helps us write reusable, modular and better.
  - Just like making a header navigation bar which is common in each and every component.
  - Based on the values component can be changed.
  - We can also nest components. i.e. We can have components inside other components.
  - React application is a tree of components with App Component as the root bringing everything together.
  <img alt="Components-Visualization" src="Components.png" width="600px"  />
    
## Create React App
### Setup IDE.
  - IDE stands for integrated development environment.
  - Software suite that consolidates basic tools required for software development.
  - Central hub for coding, finding problems, and testing.
  - Designed to improve developer efficiency.
  #### **Need For IDE**
  - Streamlines Development
  - Increases Productivity
  - Simplifies complex tasks
  - Offers a unified workspace
  - #### **IDE Features**
    1. Code Autocomplete
    2. Syntax Highlighting
    3. Version Control
    4. Error Checking
  - Download Node.j(s, JavaScript Server runtime.
  - Always Choose LTS version. i.e. Long Term Support
  - Search for VS Code and 
### Create a React App
  - Official tool is CRA (Create React App).
  - Vite is modern tool to create React Project.
  - Vite produces quick and small bundle size.
  - Vite : Use <code>npm run dev</code> to launch dev server.
  - Use npm start for CRA.
  - npm stands for node package manager.
  ```bash
    #To create the vite project
    $ npm create vite@latest
    # Choose React
    # Choose JavaScript
    $ cd Name-Of-Project
    $ npm install
    $ npm run dev
  ``` 
  - node_modules folder is created after you install all the dependencies.
### Project Structure
  1. **node_modules/** has all the installed node packages.
  2. **public/** Directory : Contains static that don't change.
  3. **src/** Directory : Main folders for the React code.
    1. **components/** : Reusable parts of the UI, like buttons or headers.
    2. **assets/** : Images, fonts and other static files.
    3. **styles** : CSS or stylesheets.
  4. **package.json** contains information about this project like name, version, dependencies on other react packages.
  5. **vite.config.js** contains vite config.
## Creating React components
### File Extensions
  1. **.js**
    - Stands for JavaScript
    - Contains regular JavaScript Code.
    - Used for general logic and components.
  2. **.jsx**
    - Stands for JavaScript XML
    - Combines JavaScript with HTML-like tags.
    - Make it easier to design UI components.
### Class vs Functional Components
  #### 1. Class Components
  - **Stateful** : Can manage state.
  - **Lifecycle** :  Access to Lifecycle methods.
  - **Verbose** : More boiler plate code.
  - Not preferred anymore.
  #### 2. Functional Components
  - Initially stateless. i.e. by default we cannot put values in these component. We cannot save anything in this functional component.
  - Can use Hooks for state and effects.
  - Simpler and more concise.
  - More popular.
### What is JSX
  - **Definition** : JSX determines how the UI will look wherever the component is used.
  - **Not HTML** : Though it resembles HTML, you're actually writing JSX, which stands for JavaScript XML.
  - **Conversion** : JSX gets converted to regular JavaScript.
  - **Babeljs.io/repl** is a tool that allows you to see how JSX is transformed into JavaScript.
    [HTML-to-JSX-Conversion](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=AQ0HgCwRgPgQQA4OAYQPYFsFoHYFMcAXMAemhgCgg&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.26.7&externalPlugins=&assumptions=%7B%7D "HTML-to-JSX-Conversion") 
### Exporting Component
  - At first the index.html file is opened.
    - There are two statements defined inside the index.html file
      ```html
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.jsx"></script>
          </body>
        </html>
      ```
    - Initially we get only two dependencies 
      ```json
        {
          "dependencies":
          {
          "react": "^18.3.1",
          "react-dom": "^18.3.1"
          }
        }
      ```
    - Using which inside the main.jsx file we import React from 'react' and ReactDOM from 'react-dom/client'.
      ```jsx
          import { StrictMode } from 'react'
          import { createRoot } from 'react-dom/client'
          import './index.css'
          import App from './App.jsx'

            createRoot(document.getElementById('root')).render(
              <StrictMode>
                <App />
              </StrictMode>,
              );
      ```
    - We are able to create a custom component.
    - Enables the use of component in other parts.
    - **Default Export** : Allows exporting a single component as the default from a module.
    - **Named Export** : Allows exporting multiple items from a module.
    - **Importing** : To use an exported component, you need to import it in the destination file using the import syntax.
    ```jsx
        const MKButton = () => {
          return (
            <div>MKButton</div>
          )
        }
        export default MKButton;
    ```
    ```jsx
      const Demo01=()=>{
        return <div>demo01</div>;
      }
      const Demo02=()=>{
        return <div>demo02</div>;
      }
      export {Demo01,Demo02};
    ```
    ```jsx
      import MKButton from "./MKButton"
      import {Demo01,Demo02} from './demo';
      const App = () => {
        return (
          <div>
            <h1>App Component</h1>
            <MKButton/>
            <Demo01/>
            <Demo02/>
          </div>
        )
      }

      export default App
     ```
### Other Important Points  
  1. **Naming** : Must be capitalized, lowercase for default HTML. We do this so that we can differentiate between the component and the HTML elements.
  2. **HTML** : Unlike vanilla JS where you can't directly write HTML, in React, you can embed HTML-like syntax using JSX.
  3. **CSS** : In React, CSS can be directly imported into the components files, allowing for modular and component specific styling.

### Dynamic Components  
  1. **Dynamic Content** : JSX allows the creation of dynamic and interactive UI components.
  2. **JavaScript Expression** : Using {}, we can embed any JS Expression directly within JSX. This includes variables, functions calls, and more.
  ```jsx
      function Hello(){
        const name="Mayank":
        let fullName=()=>{
          return "Mayank Choudhary";
        }
        return <div>
          <h1>{name}</h1>
          <h2>{fullName()}</h2>
        </div>;
      }
  ```
### Reusable Components
  1. **Modularity** : Components are modular, allowing for easy reuse across different parts of the applications.
  2. **Consistency** : Reusing components ensures UI consistency and reduces the chances of discrepancies.
  3. **Efficiency** : Reduces development time and effort by avoiding duplication of code.
  4, **Maintainability** : Changes made to a reused component reflect everywhere it is used, simplifying updates and bug fixes.

## Including Bootstrap
1. Responsive : Mobile first design for all device sizes.
2. Components : Pre-styled elements like buttons and navbars.
3. Customizable : Modify default styles as needed.
4. Cross-Browser : Consistent look across browsers.
5. Open-Source : Free with community support.
  ```bash
    $ npm i bootstrap@5.3.3
  ```
  ```jsx
    import "bootstrap/dist/css/bootstrap.min.css";
  ```

