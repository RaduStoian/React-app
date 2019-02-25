import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import PeopleData from "./PeopleData"



const App = () => {



  const MappedPeopleData = PeopleData.map( (person) => {

    return (
            <Contact key ={person.id} contact = {person} />
           )
  })


  
  return (
    <div>
    <Header />

    {MappedPeopleData}

    <Footer />
    </div>
  )
}

export default App;
