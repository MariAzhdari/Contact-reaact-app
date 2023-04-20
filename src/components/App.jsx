import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function creatcard(contact){
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar avatarImage="https://media.istockphoto.com/id/1411766919/photo/the-concept-of-using-technology-to-search-for-information-a-mans-hand-is-using-a-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=XcJNceAFLl8kx_d_LaC5sRCv_gjwqx4ZslX-El8SnS0=" />

      {contacts.map(creatcard)}
    
    </div>
  );
}
export default App;
