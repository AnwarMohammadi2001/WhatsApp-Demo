import { FiEdit, FiFilter } from "react-icons/fi"; // Using react-icons for icons
import { BsSearch } from "react-icons/bs";

const ChatHeader = () => {
  return (
    <div className=" bg-white shadow-md  w-80 ">
      {/* Top Section with Chat Name, Edit, and Filter Icons */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Chat Name</h2>
        <div className="flex items-center space-x-4">
          <FiEdit className="text-gray-600 w-5 h-5 cursor-pointer" />
          <FiFilter className="text-gray-600 w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Section with Search Bar */}
      <div className="p-4 border-t border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <BsSearch className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
