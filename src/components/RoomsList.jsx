import React, { useState, useEffect } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import Login from './Login';
import SignIn from './SignIn';

const RoomsList = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [allRooms, setAllRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState({
    room: [],
    users: [],
    bids: [],
  });

  useEffect(() => {
    let token = localStorage.getItem('jwt_token');
    if (token) {
      fetch('http://localhost:3000/profile', {
        headers: { Authentication: `Bearer ${token}` },
      }).then((response) => {
        console.log(response);
      });
    }

    // return () => {
    //   fetch(`${API_ROOT}/rooms`)
    //     .then((res) => res.json())
    //     .then((biddings) => {
    //       console.log('bidiiidngs', biddings);
    //       setBiddings(biddings);
    //     });
    // };
  }, []);

  return (
    <ActionCableConsumer
      // channel="WidgetChannel"
      onReceived={() => console.log(received)}
    >
      <h1>roooms</h1>
      <SignIn></SignIn>
      {/* <Login></Login> */}
    </ActionCableConsumer>
  );
};

export default RoomsList;
