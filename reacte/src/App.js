import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Adresse";

function App(){
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Address />
      <div id='flower'>
      <h1>My Image</h1>
      <img src={'https://cdn.pixabay.com/photo/2023/03/23/12/53/duck-7871855_640.jpg'} alt="My Image" />
    </div>
    </div>
  );
}

export default App;
