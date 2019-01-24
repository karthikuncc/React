
//npm package create-react-app
//create-react-app myApp
//npm start

//React Dom exposes an object which has a render method
//render methods  allows to render a javascript function as a component to the real dom

//render() { return (
      // <div className='App'> <h1> I am  a react app </h1> </div>
// )} 

//JSX above gets compiled to the below code
//Inside render we return html or return React.createElement('div',null,'h1','Hi, I am React app')

ReactDom.render(<Person/>,document.querySelector('#p1'));

//Functional Components
//Component is basically a function that returns JSX 
//import React from 'react'; Allows to use JSX syntax
//components make it reuse maintainable in multiple files

//Components can have props which are dynamic content or properties passed from JSX file into Component class fil
//Content between components can be accessed by using props.children


//State is managed from only inside of a component
//State is available in only Class based components that inherit component class
//State is not available in function based components

//state can be accessed in render method by using this.state
//To render dynamic content use {} for ex in name={this.state.name}

//Always use Arrow functions to avoid this problem in methods
//In the onclick just give the property name and don't execute the function

//To mutate state on events like button click --use setState , using this.state won't work

//setState method is available from extending Component

//state and props are used to update the changes

