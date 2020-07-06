import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-pomodoro';
import { Spin } from 'antd';

export const Ranking = () => {

  const [data, setData] = useState(null);
  const [sorted, setSorted] = useState(null);
  const [content, setContent] = useState(null);

  let users = {};

  useEffect(() => {
      axios.get('https://pomodoro-98f43.firebaseio.com/pomodoros.json')
    .then(response => {
        const temp = JSON.stringify(response.data).split('"');
        console.log(temp);
        for(let i = 0; i < temp.length; i+=12) {
          let email = JSON.stringify(response.data).split('"')[(i-1)];
          let sec = (JSON.stringify(response.data).split('"')[i-8]);
          console.log(users[email]);
          if(!users[email]) {
            if(sec) {
              console.log("Ne postoji");
              let obj = {[email]: parseInt(sec.replace(':', '').replace(',', ''))};
              Object.assign(users, obj);
            }
          } else {
            let nesto = parseInt(users[email]);
            if(sec) {
              users[email] = nesto + parseInt(sec.replace(':', '').replace(',', ''));
              console.log("Nesto: " + nesto);
            }
          }
      }
      console.log(users);
      setData(users);
      let keysSorted = null;
      keysSorted = Object.keys(users).sort(function(a,b){return users[b]-users[a]})
      console.log(keysSorted);
      let cont = <div>
        {keysSorted.map((user, index) => {
          return <p>{index+1} {user} {users[user]}</p>
        })}
      </div>
      /* Pretvoriti sekunde u minute i pocistiti kod */
      /* Napraviti ListItem komponentu i number componentu */

      setContent(cont);
      
      /* registrovati usera fuad2 i napraviti dva unosa po 60 sekundi (done)*/
      /* Sortirati usere i napraviti rucno listu za prikaz svoju komponentu div i prikazivati */
      /* Napraviti broj ako je 1 da bude zlatna */
      /* Ako je drugo mjesto onda srebrena */
      /* Ako je trece mjesto onda bronzana... */
    })
    .catch(error => {
        console.log(error);
        alert("Ranking can't be loaded!");
    });

  })

  return (
    <>
      <h3>Ranking</h3>
      {content ? content: <Spin size="large" />}
    </>
  )
}

export default Ranking;