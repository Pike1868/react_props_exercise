const Person = ({ age, name, hobbies }) => {
  const displayName = name.length > 8 ? name.substring(0, 6) : name;
  return (
    <div className="person">
      <p>Learn some information about this person</p>
      <p><b>Age:</b>{age}</p>
      <p><b>Name:</b>{displayName}</p>
      <h3>{age >= 18 ? "Please go vote!" : "You must be 18 to vote."}</h3>
      <p>Hobbies</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
