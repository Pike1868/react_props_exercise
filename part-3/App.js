const App = () => {
  return (
    <div>
      <Person
        age={16}
        name="John"
        hobbies={["Running", "Reading", "Writing"]}
      />

      <Person
        age={40}
        name="Jane"
        hobbies={["Knitting", "Baking", "Gardening"]}
      />

      <Person
        age={29}
        name="William"
        hobbies={["Biking", "Hiking", "Swimming"]}
      />
    </div>
  );
};
