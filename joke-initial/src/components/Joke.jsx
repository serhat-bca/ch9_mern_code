const Joke = ({ joke }) => {
  const handleDownVote = () => {
    console.log("downvote", joke.id);
  };

  const handleUpVote = () => {
    console.log("upvote", joke.id);
  };

  const handleToggleFavorite = () => {
    console.log("toggle", joke.id);
  };

  return (
    <div>
      <p>{joke.joke}</p>
      <div>
        <button onClick={handleUpVote}>Upvote</button>
        <span>{joke.votes}</span>
        <button onClick={handleDownVote}>Downvote</button>
      </div>
      <div>
        <span>
          <em>{joke.favorite ? "Favorite Joke " : ""}</em>
        </span>
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleToggleFavorite}
        >
          {joke.favorite ? "Remove from favorites" : "Add to Favorites"}
        </span>
      </div>
    </div>
  );
};

export default Joke;
