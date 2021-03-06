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

export default function LocationCard(props) {
  return (
    <CardStyle className="character-card">
      <h2>Name: {props.location.name}</h2>
      <p>Created: {props.location.created}</p>
      <h3>Dimension: {props.location.dimension}</h3>
      <p>Type: {props.location.type}</p>
    </CardStyle>
  )
}
