import React from "react";
import { useQuery } from "react-query";
import { useState } from "react";

import ListItem from "ListItem";
import { getCountries, getPeople } from "./DataApi/index";

const App: React.FunctionComponent = () => {
  const [search, setSearch] = useState("");

  const { data: countries } = useQuery("countries", () => getCountries({}));

  const {
    data: people,
    error,
    isLoading,
  } = useQuery(["people", search], () => getPeople({ search }), {
    enabled: search.length > 0,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="pageWrapper">
      <p>Search Component</p>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <p>List Component</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>{"An error has occurred: " + error}</p>}
      <div className="listWrapper">
        {countries &&
          people?.searchResults.map((person) => (
            <ListItem
              key={person.id}
              person={person}
              countriesData={countries.searchResults}
            />
          ))}
      </div>
      <p>Found results: {people?.searchResultCount}</p>
      <p>Total results: {people?.totalResultCounter}</p>
    </div>
  );
};

export default App;
