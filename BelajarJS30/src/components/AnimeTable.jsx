import { useSelector } from "react-redux";

const AnimeTable = () => {
  const { animeList, loading, error } = useSelector(
    (state) => state.animeSearch
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Type</th>
            <th>Episodes</th>
            <th>Score</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {animeList.map((anime) => (
            <tr key={anime.mal_id}>
              <td>
                <img
                  src={anime.image_url}
                  alt={anime.title}
                  style={{ width: "50px", height: "auto" }}
                />
              </td>
              <td>{anime.title}</td>
              <td>{anime.type}</td>
              <td>{anime.episodes}</td>
              <td>{anime.score}</td>
              <td>{anime.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeTable;
