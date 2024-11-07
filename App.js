import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', {id: 'heading'}, 'Heading content');
// console.log(heading);

const jsxHeading = (<h1 id="jsx" className='test'>
    
    This is the jsx element</h1>);  // JSX Element

// React Component: everything thing in react is component button, header , footer, card, search bar
// There are two types of component class based component -old  way of creating component, it uses js classes to create component
// and functional based component - new way of writing component, it uses js function to create component

// functional component is nothing but a normal js function and whenever you create functional component start with capital letter 
// It is of making understand react otherwise it will throw an error
// A functional compoent is normal js function which return some jsxs

const f = "This is the content of a string variable"

const Fest = ()=> (
    <h3> This is the content from the fest</h3>
)

const Test = ()=>(
   
<div>
<Fest/>
<Fest> </Fest>
{Fest()}
{jsxHeading}("This statement is being printed using console.log")
{console.log}
 <h2 className='th'> This is the h2</h2>

<h3 id='jk'> This is the h3</h3>
{f}
</div>
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Test/>);