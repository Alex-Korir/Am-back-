import React from "react";
import "./App.css";

function App() {
  return <PersonList />;
}

function PersonList() {
  const people = [
    {
      img: 22,
      names: "Alex",
      job: "developer",
    },
    {
      img: 45,
      names: "Smith",
      job: "Engineer",
    },
    {
      img: 87,
      names: "Dennis",
      job: "programmer",
    },
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
}

function Person(props) {
  const { img, names, job } = props.person;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <>
      <div className="person">
        <img src={url} alt="img"></img>
        <div>
          <h4>{names}</h4>
          <h4>{job}</h4>
        </div>
      </div>
    </>
  );
}
export default App;
