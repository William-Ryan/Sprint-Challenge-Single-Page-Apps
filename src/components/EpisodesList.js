import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard"

export default function EpisodesList() {

    const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
      Axios.get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.log("Not your data", err);
      })
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <section className="character-list">
        <h2>Episodes List</h2>
        <Link className="main-buttons" to={"/"}>Home</Link>
        <Link className="main-buttons" to={'/characters'}>Characters</Link>
        <Link className="main-buttons" to={'/locations'}>Locations</Link>
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />
        })}
  
      </section>
    );
}
