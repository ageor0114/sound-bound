import React from 'react';
import logo from './sb-blue.jpg';
import wave from './white sound wave.jpg';
import slant from './slant.png';
import ombre from './ombre.png';
import './App.css';

//Fonts
import './fonts/Rubik/Rubik-Bold.ttf';
import './fonts/Rubik/Rubik-Regular.ttf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1 className="title">Sound Bound</h1>
        <p>Restore decency to the audio experience on the internet</p>

      </header>
      <img src={wave} className="transition"/>
      <section className="App-section">
        <h1>Welcome to sound reimagined.</h1>
        <p>We get it. You're tired of the egregiously loud jumpscares and Spotify Ads. Yet, at the same time, you can barely hear the dialogue when you need it most while watching a movie on Netflix. Sound Bound is here to change that.</p>
      </section>
    </div>
  );
}

export default App;
