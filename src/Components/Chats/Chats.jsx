import React from "react";

import User from "./User";
import ChatHeader from "./ChatHeader ";
const users = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '12:45 PM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '12:45 PM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '12:45 PM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '12:45 PM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    lastMessage: 'Let’s catch up tomorrow!',
    time: '11:30 AM',
  },
  // More user data here...
];

const Chats = () => {
  return (
    <div className=" bg-gray-100">
      {/* Fixed ChatHeader */}

      <ChatHeader />
      {/* Scrollable User List */}
      <div className=" bg-white">
        <User users={users} />
      </div>
    </div>
  );
};

export default Chats;
