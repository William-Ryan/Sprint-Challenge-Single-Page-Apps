import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import LocationCard from "./LocationCard"

export default function LocationsList() {

    const [locations, setLocations] = useState([]);
  
    useEffect(() => {
      Axios.get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data.results);
        setLocations(res.data.results);
      })
      .catch(err => {
        console.log("Not your data", err);
      })
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <section className="character-list">
        <h2>Locations List</h2>
        <Link className="main-buttons" to={"/"}>Home</Link>
        <Link className="main-buttons" to={'/characters'}>Characters</Link>
        <Link className="main-buttons" to={'/episodes'}>Episodes</Link>
        {locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })}
  
      </section>
    );
}
