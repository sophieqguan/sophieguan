import './App.css';
import React from 'react';
import ProfilePic from './ProfilePic';
import ProfileCard from './ProfileCard';
import Note from './StickyNote';

function App() {


  return (
    <div className="body" id="main">
        <Note/>
        <ProfilePic/>
        <ProfileCard/>
    </div>

  );
}

export default App;
