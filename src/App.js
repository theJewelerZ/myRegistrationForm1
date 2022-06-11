import React, { useState, useEffect} from "react";
import './App.css';
import ContactCard from "./ContactCard";

const App = () => {
//  const contacts = [
//    {
//      avatarUrl: "https://via.placeholder.com/150",
//      name: "Matt Zarka",
//      email: "matt.zarka@notreal.com",
//      age: 49
//    },
//    {
//      avatarUrl: "https://via.placeholder.com/150",
//      name: "Jerry Norris",
//      email: "jerry.norris@notreal.com",
//      age: 50
//    },
//    {
//      avatarUrl: "https://via.placeholder.com/150",
//      name: "Mark Voldeck",
//      email: "mark.voldeck@notreal.com",
//      age: 51
//    },
//    {
//      avatarUrl: "https://via.placeholder.com/150",
//      name: "Pepo the cat",
//      email: "pepo.thecat@notreal.com",
//      age: 5
//    }
//  ];

const [results, setResults] = useState([]);

useEffect(()=>{
  fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
    });
}, []) 

  return (
    <div>
      {results.map((result, index)=> {
        return(
          <ContactCard key={index}
            avatarUrl = {result.picture.large} 
            name = {result.name.first} 
            email = {result.email} 
            age = {result.dob.age}/>
        )
      })}
    </div>
  )
}

export default App;
