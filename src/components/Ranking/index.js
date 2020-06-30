import React from 'react';
import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      place: 1,
      user: 'fuad.herac@gmail.com',
      hours: 16
    },
    {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },

      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },

      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },    {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
      {
        key: '1',
        place: 1,
        user: 'fuad.herac@gmail.com',
        hours: 16
      },
  ];
  
  const columns = [
    {
      title: 'Place',
      dataIndex: 'place',
      key: 'place',
      responsive: ['md'],
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Hours',
      dataIndex: 'hours',
      key: 'hours',
    },
  ];

export const Ranking = () => {
    return (
      <>
        <h3>Ranking</h3>
        <Table size="medium" dataSource={dataSource} columns={columns} />
      </>
    )
}

export default Ranking;