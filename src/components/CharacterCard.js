import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="character-card">
      <img src={props.character.image} alt="Rick and Morty Character"/>
      <h2>Name: {props.character.name}</h2>
      <p>Gender: {props.character.gender}</p>
      <h3>Species: {props.character.species}</h3>
      <p>Origin: {props.character.origin.name}</p>
      <p>Status: {props.character.status}</p>
    </div>
  )
}
