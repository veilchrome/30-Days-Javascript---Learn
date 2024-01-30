import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { searchAnimeByTitle } from "./animeSlicer";
import AnimeTable from "./components/AnimeTable";

const StyledContainer = styled.div`
  background-color: #1a1a1a;
  display: flex;
  color: #fff;
  padding: 20px;
  margin: 0 auto;
  height: auto;

  justify-content: center;
`;

const App = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { animeList, loading, error } = useSelector((state) => state.anime);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        dispatch(searchAnimeByTitle(query));
      }
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [query, dispatch]);

  return (
    <StyledContainer>
      {" "}
      <div className="input">
        <input
          type="text"
          placeholder="Search anime"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="table">
        {loading && <p>Loading...</p>}
        {animeList.length > 0 && <AnimeTable animeList={animeList} />}
        {error && <p>Error: {error}</p>}
      </div>
    </StyledContainer>
  );
};

export default App;
