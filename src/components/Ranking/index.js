import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-pomodoro';
import { Spin } from 'antd';
import ListItem from '../ListItem/index';
import { StyledInput, StyledInputWrapper } from './style';
import { UserOutlined } from '@ant-design/icons';

export const Ranking = () => {

  const [content, setContent] = useState(null);

  let users = {};

  useEffect(() => {
      axios.get('https://pomodoro-98f43.firebaseio.com/pomodoros.json')
    .then(response => {
        const temp = JSON.stringify(response.data).split('"');
        for(let i = 0; i < temp.length; i+=12) {
          let email = JSON.stringify(response.data).split('"')[(i-1)];
          let sec = (JSON.stringify(response.data).split('"')[i-8]);
          if(!users[email]) {
            if(sec) {
              let obj = {[email]: parseInt(sec.replace(':', '').replace(',', ''))};
              Object.assign(users, obj);
            }
          } else {
            let temp = parseInt(users[email]);
            if(sec) {
              users[email] = temp + parseInt(sec.replace(':', '').replace(',', ''));
            }
          }
      }

      let keysSorted = null;
      keysSorted = Object.keys(users).sort(function(a,b){return users[b]-users[a]})
      let cont = <div>
        {keysSorted.map((user, index) => {
          return <ListItem user={user} seconds={users[user]} number={index+1} key={index+1}/>
        })}
      </div>
      setContent(cont);

    })
    .catch(error => {
        console.log(error);
        alert("Ranking can't be loaded!");
    });

  }, []);

  return (
    <>
      <h3>Ranking</h3>
      <StyledInputWrapper>
        <StyledInput size="large" placeholder="Search by email" prefix={<UserOutlined />} />
      </StyledInputWrapper>
      

      {content ? content: <Spin size="large" />}
    </>
  )
}

export default Ranking;