import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom"
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import LocationsList from './components/LocationsList'
import EpisodesList from './components/EpisodesList'

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodesList} />
    </main>
  );
}
