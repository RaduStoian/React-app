import React from 'react';
import '../App.css';



const Contact = (props) => {
  
return (
          <main className="individual-contact">

                <p className="main-text">Name: {props.contact.name}</p>    
                <p className="main-text">Email: {props.contact.mail}</p>
          

          </main>
        ) 
}

export default Contact;
