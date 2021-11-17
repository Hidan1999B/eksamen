import React from "react";
import './Tindercards.css';
import {useState} from 'react'
import TinderCard from "react-tinder-card";
function Tindercards() {
    const [people, setPeople] = useState([
        {
            name: 'Tyrone Evans',
            url: 'https://m.media-amazon.com/images/M/MV5BOGE5MzA2OTYtMDk3My00ZmJhLTgxMTYtMmZmNDRkMjU2NThlXkEyXkFqcGdeQXVyNjMwOTA1MDM@._V1_UY1200_CR141,0,630,1200_AL_.jpg',
        },
        {name: 'Cristiano Ronaldo',
         url: 'https://indkast.dk/i/640/24607.jpg',
        },
    ])
const swiped = (direction, nameToDelete) => {
    console.log('removing' + nameToDelete);
}
const outOfFrame = (name) => {
    console.log(name + "left the screen")
}


    return(
<div className="Name">
    <div className="tinderCards_container">
    {people.map((people) => (
      <TinderCard   
          className = "swipe"
          key = {people.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, people.name)}
          onCardLeftScreen={() => outOfFrame(people.name)}>
              <div style={{backgroundImage: 'url(' + people.url + ')'}}
              className="card"
              >
                 <h3>{people.name}</h3> 
              </div>
          
      </TinderCard>

 ))}

    </div>

</div>
    )
}

export default Tindercards