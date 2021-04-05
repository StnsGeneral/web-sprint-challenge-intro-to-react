// Importing requirements
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import LearnMore from './components/LearnMore';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [currentPersonId, setCurrentPersonId] = useState(
    'http://swapi.dev/api/people/1/'
  );

  // Setting parameters for pressing Learn More button
  const openLearnMore = (url) => {
    setCurrentPersonId(url);
  };

  // Setting parameters for pressing close button
  const closeLearnMore = () => {
    setCurrentPersonId('');
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Fetch request
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => setPeople(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Returning HTML structure
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
