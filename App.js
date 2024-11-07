import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', {id: 'heading'}, 'Heading content');
// console.log(heading);

 // JSX Element

// React Component: everything thing in react is component button, header , footer, card, search bar
// There are two types of component class based component -old  way of creating component, it uses js classes to create component
// and functional based component - new way of writing component, it uses js function to create component

// functional component is nothing but a normal js function and whenever you create functional component start with capital letter 
// It is of making understand react otherwise it will throw an error
// A functional compoent is normal js function which return some jsxs

const Header = ()=> {
    return(
        <div id='header'>
         <div id='logo'>
        <img src='https://img.freepik.com/premium-vector/beautiful-unique-food-restaurant-company-logo-design_981150-2156.jpg'></img>
         </div>
         <div id='navigation'>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
           </ul>
         </div>

        </div>
    )
}

const Card = ()=> {
   return (
     <div className='card'>
     <div className='cardImg'>
     <img src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'></img>
     </div>
     <div className='cardContent'>
     <h2> Restaurant Name</h2>
     <p> Description</p>
     <h3> Price</h3>
     <h4> 20 Minutes</h4>
     </div>
     </div>
   )

}


const Body = ()=> {
   return(
     <div id='body'>
        <div id='search'>

        </div>
        <div id='restro'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
     </div>
   )
}

const Footer = ()=> {
    return(
      <div id='footer'  style={{textAlign: "center"}}>
        <h2> Copyright 2024</h2>
      </div>
    )
}


const AppLayout = ()=> {
    return (
         <div id="app">
        <Header/>
         <Body/>
         <Footer/>
         </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppLayout/>);