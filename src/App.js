// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Routines from './Routines';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [ routinesData, setRoutinesData ] = useState([]) 
  // this is the collection of all routines from the db

  const url = 'http://localhost:8000/routines'
  

  // const getRoutines = async () => {
  //   try {
  //     const res = await axios.get(url)
  //     const json = await res.json()
  //     setRoutines(res.data)
  //     // console.log(res.data)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // useEffect( () => {
  //   getRoutines(routines)
  //   console.log(routines)
  // }, [])

  useEffect(() => {
    const getRoutines = async () => {
      try {
        const res = await axios.get(url)
        setRoutinesData(res)
        console.log(res.data)
      } catch(err) {
        console.log(err)
      }
    }

    getRoutines();
  }, [])

  const [ newRoutine, setNewRoutine ] = useState('')
  const [ routines, setRoutines ] = useState([])

  const handleChange = (event) => {
    setNewRoutine(event.target.value)
    // console.log(newRoutine)
  }
  // const uniqueURL = 'http://localhost:8000/routines/6203f154332a46a9e5fb6c52'
  // const handleSubmit = (event) => {
  //   console.log(newRoutine)
  //   event.preventDefault()
  //   const newItem = {
  //     name: newRoutine,
  //     description: "Hello big big legs",
  //     exercises: ['BING BONG']
  //   }
  //   axios.put(uniqueURL, { routine: newItem })
  //   .then(res => console.log(res.data))
  // }
  // console.log(routines)

  //AXIOS CALLS

  //POST NEW
  const handleSubmit = (routine) => {
    routine.preventDefault()
    console.log(newRoutine)
    const newItem = {
      name: newRoutine,
      description: 'hello',
      exercises: ['hello', 'hello']
    }
  axios.post(url, newItem)
  }

  // DELETE BY ID
  // const handleClick = (routine) => {
  //   const uniqueURL = `https://localhost:8000/routines/${routine._id}`
  //   axios.delete(uniqueURL, routine._id)
  // }

  // UPDATE BY ID

  return (
    <div className="App">
      <Nav />
      <div className="scrolling-box">
        <section id="home">
          <Header />
        </section>
        <section id="routines">
        <form onSubmit={ handleSubmit }>
            <input type='text' value = { newRoutine } onChange = { handleChange }/>
            <input type='submit' />
          </form>
          <Routines />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
