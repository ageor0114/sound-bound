import React from 'react';
import './App.css';

//Images
import logo from './sb-blue.jpg';
import wave from './white sound wave.jpg';
import slant from './slant.png';
import ombre from './ombre.png';
import beforeAfter from './before-after.png';
import musicGirl from './music-girl.png';
import greenMusic from './green-music.png';
import musicUI from './music-ui.png';

//Fonts
import './fonts/Rubik/Rubik-Bold.ttf';
import './fonts/Rubik/Rubik-Regular.ttf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={musicUI} alt="logo" className="logo" />
        <h1 className="title">Sound Bound</h1>
        <p className="subtitle">Restore decency to the audio experience on the internet</p>

      </header>
      <img src={slant} className="transition"/>
      <section className="App-section">
        <h1>welcome to sound reimagined.</h1>
        <p>We get it. You're tired of the egregiously loud jumpscares and Spotify Ads. Yet, at the same time, you can barely hear the dialogue when you need it most while watching a movie on Netflix. Sound Bound is here to change that.</p>
        <img src={beforeAfter} className="beforeAfter"/>
      </section>
    </div>
  );
}

export default App;
