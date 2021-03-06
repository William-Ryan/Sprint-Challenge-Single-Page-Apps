import React, { useState } from "react";

export default function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const charSearch = props.characters.filter(char => {
      return char.name.toLowerCase().includes(results.toLowerCase());
    });
    props.search(charSearch);
    console.log(charSearch);
  };


  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="search"
        >
        </input>
      </form>
    </section>
  );
}
