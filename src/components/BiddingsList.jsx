import React, { useState, useEffect } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
// import Cable from './Cable';
// import NewConversationForm from './NewConversationForm';
// import MessagesArea from './MessagesArea';

const BiddingsList = () => {
  const [biddings, setBiddings] = useState([]);
  const [activeBidding, setActiveBidding] = useState('');

  useEffect(() => {
    return () => {
      fetch(`${API_ROOT}/biddings`)
        .then((res) => res.json())
        .then((biddings) => {
          console.log('bidiiidngs', biddings);
          setBiddings(biddings);
        });
    };
  }, []);

  return <div>BiddingsList {biddings}</div>;
};

export default BiddingsList;
