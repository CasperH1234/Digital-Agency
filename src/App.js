/*App Component
*
*Main App fectching a list of places in json and rendering them
*
*
*Author Jeffrey Serio
*/
import React from "https://cdn.skypack.dev/react";

import Places from './components/Places'
import Logo from './img/logo.png'
import navLogo from './img/navLogo.png'
import { FaInfoCircle } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaCity } from "react-icons/fa";



function Navigation() {
    return (
        <nav>
  <a href="#"><FaUtensils size= '2rem'/><br></br>resturants</a>
  <img className="navlogo" src={navLogo}/>
  <a href="#"><FaCity size= '2rem'/><br></br>Adventures</a>
 
        </nav>
    );
}



function Header() {
    return (
        <header>

        </header>
    );
}

function MainContent() {
    return (
        <>
       <img className="logo" src={Logo}/>
            <section className="left">  
             <button className="buttonLeft">
             <FaInfoCircle size= '2rem'/>Info
            </button>
            <button className="buttonRight">
            <FaRegMap size= '2rem'/>Map
            </button>
            </section>
              
            <section className="middle">Column
            <button className="buttonLeft">
            <FaInfoCircle size= '2rem'/>Info
            </button>
            <button className="buttonRight">
            <FaRegMap size= '2rem'/>Map
            </button>
            </section>
            
            <section className="right">Column
            <button className="buttonLeft">
            <FaInfoCircle size= '2rem'/>Info
            </button>
            <button className="buttonRight">
            <FaRegMap size= '2rem'/>Map
            </button>
            </section>

           
            
        </>
    );
}




function App() {
    return (
        <main className="page-layout">
            <Navigation />
            <Header />
            <MainContent />
            <Places/>
           
            
        </main>
    );
}





export default App

