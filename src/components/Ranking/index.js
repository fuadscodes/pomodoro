import React, { useState } from 'react';
import axios from '../../config/axios-pomodoro';

export const Ranking = () => {

  /* Prepraviti tabelu na listu (lijevo broj gore mail dole sati) */

  const [dataSource, setDataSource] = useState(null);

  axios.get('https://pomodoro-98f43.firebaseio.com/pomodoros.json')
  .then(response => {
      let firebase = require("firebase");

      let dbRef = firebase.database().ref("pomodoros");

      dbRef.orderByChild("time").on("child_added", snap => {
          //setDataSource(snap.val());
          console.log(dataSource);
      })
  })
  .catch(error => {
      console.log(error);
      alert("Ranking can't be loaded!");
  });

  return (
    <>
      <h3>Ranking</h3>
    </>
  )
}

export default Ranking;