import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([])

  const search = charArr => {
    updateData(charArr)
  };

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
      <h2>Character List</h2>
      <Link className="main-buttons" to={"/"}>Home</Link>
      <Link className="main-buttons" to={'/locations'}>Locations</Link>
      <Link className="main-buttons" to={'/episodes'}>Episodes</Link>
      <SearchForm search={search} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />
      })}

    </section>
  );
}