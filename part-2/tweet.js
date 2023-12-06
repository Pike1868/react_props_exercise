const Tweet = (props) => {
  return (
    <div className="tweet">
      <p>
        <b>@{props.username}</b> <span className="tweetName">{props.name}</span>
      </p>
      <p className="tweetMsg">{props.message}</p>
      <p>{props.date}</p>
    </div>
  );
};
