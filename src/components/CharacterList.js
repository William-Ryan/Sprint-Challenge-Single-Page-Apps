import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([])


  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res.data.results);
      setCharacters(res.data.results);
      updateData(res.data.results);
    })
    .catch(err => {
      console.log("Not your data", err);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
