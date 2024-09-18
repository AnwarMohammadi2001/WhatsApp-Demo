import React from "react";

const User = ({ users }) => {
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-scroll bg-white scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-700 scrollbar-track-transparent scrollbar-thumb-rounded-full">
      {" "}
      {/* Adding margin for the fixed header */}
      {users.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <img
              src={user.image}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.lastMessage}</p>
            </div>
          </div>

          {/* Time of Message */}
          <div className="text-sm text-gray-400">{user.time}</div>
        </div>
      ))}
    </div>
  );
};

export default User;
