import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Chats from "./Components/Chats/Chats";
import Calls from "./Components/Calls/Calls";
import Status from "./Components/Status/Status";
import Starred from "./Components/Starred/Starred";
import Archived from "./Components/Archived/Archived";

function App() {
  return (
    <div className="bg-slate-900 dark:bg-slate-100">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Chats />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/status" element={<Status />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/archived" element={<Archived />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
