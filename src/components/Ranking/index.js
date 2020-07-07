import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-pomodoro';
import { Spin } from 'antd';
import ListItem from '../ListItem/index';
import { StyledInput, Wrapper } from './style';
import { UserOutlined } from '@ant-design/icons';

export const Ranking = () => {

  const [content, setContent] = useState(null)
  const [data, setData] = useState(null);

  let users = {};
  let email = "";

  const search = (value) => {
    email = value;
    let keysSorted = null;
    keysSorted = Object.keys(data).sort(function(a,b){return users[b]-users[a]});
    let cont = <div>
      {keysSorted.map((user, index) => {
          if(user.substring(0, email.length) === email) {
            return (<ListItem user={user} seconds={data[user]} number={index+1} key={index+1}/>);
          } else {
            return null;
          }
      })}
    </div>
    setContent(cont);
  }

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
      setData(users);
    })
    .catch(error => {
        console.log(error);
        alert("Ranking can't be loaded!");
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Ranking</h3>
      <Wrapper>
        <StyledInput size="large" placeholder="Search by email" prefix={<UserOutlined />} onChange={(event) => {search(event.target.value)}} />
      </Wrapper>
      
      {content ? content: <Wrapper><Spin size="large" /></Wrapper>}
    </>
  )
}

export default Ranking;