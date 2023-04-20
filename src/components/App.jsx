import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar avatarImage="https://media.istockphoto.com/id/1411766919/photo/the-concept-of-using-technology-to-search-for-information-a-mans-hand-is-using-a-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=XcJNceAFLl8kx_d_LaC5sRCv_gjwqx4ZslX-El8SnS0=" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}
export default App;
