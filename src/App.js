
import './App.css';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import RoutinesBanner from './RoutinesBanner';
import Footer from './Footer';
import Spacer from './Spacer';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    fetch('https://gitness-ga-earth-api.herokuapp.com/')
      .then((res) => res.json())

      .then((json) => {
        setWorkouts(json);
      })

      .catch(console.error);
  }, []);
  console.log(workouts);

  

  return (
    <div>
      {/* <Modal /> */}
      {openModal && (
        <Modal setOpenModal={setOpenModal} />
      )}
      <div className="scrolling-box">
        <section id="home">
          <Nav />
          <Header />
        </section>
        <Spacer />
        <section id="routines">
          <RoutinesBanner workouts={workouts} setOpenModal={setOpenModal} />
        </section>
        {/* <Spacer /> */}
        <section id="team">
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
