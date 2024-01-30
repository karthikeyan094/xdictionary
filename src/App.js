import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [dictionary,setDictionary] = useState(
    [{ word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
    ])
    const [search,setSearch] = useState('');
    const[meaning,setMeaning] = useState('');
const searchWord = (e)=>{
  e.preventDefault();
  for(let i=0;i<dictionary.length;i++){
    if(dictionary[i].word.toLowerCase()===search.toLowerCase()){
      setMeaning(dictionary[i].meaning);
      return;
    }
  }
  setMeaning('Word not found in the dictionary.');
}
  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={(e)=>searchWord(e)}>
      <input type='text' placeholder='Search for a word...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button type='submit'>Search</button>
      </form>
      <h3>Definition:</h3>
      {meaning && <p>{meaning} </p>}
    </div>
  );
}

export default App;
