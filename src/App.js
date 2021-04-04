import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import LearnMore from './components/learnmore';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [currentPersonId, setCurrentPersonId] = useState('2');

  const openLearnMore = (name) => {
    setCurrentPersonId(name);
  };

  const closeLearnMore = () => {
    setCurrentPersonId('');
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => setPeople(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {people.map((person) => {
        return (
          <Character key={person.name} info={person} action={openLearnMore} />
        );
      })}
      {currentPersonId && (
        <LearnMore personId={currentPersonId} close={closeLearnMore} />
      )}
    </div>
  );
};

export default App;
