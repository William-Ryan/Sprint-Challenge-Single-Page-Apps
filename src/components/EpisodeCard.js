import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
width: 50%;
background:chocolate;
border-radius: 15px;
`;

export default function EpisodeCard(props) {
  return (
    <CardStyle className="character-card">
      <h2>Name: {props.episode.name}</h2>
      <p>Created: {props.episode.created}</p>
      <h3>Dimension: {props.episode.air_date}</h3>
      <p>Type: {props.episode.episode}</p>
    </CardStyle>
  )
}
