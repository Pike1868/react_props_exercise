const App = () => (
  <div>
    <Tweet
      username="student_user_12"
      name="John"
      message="This is John's first tweet"
      date="10/10/2023"
    />
     <Tweet
      username="football_fan44"
      name="Mike"
      message="It's football time"
      date="11/2/2023"
    />
    <Tweet
      username="colt_codes"
      name="Colt"
      message="React in a tweet"
      date="11/4/2023"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
