import RobotUsers from "./components/RobotUsers";
import apiRobots from "./components/RobotUsers/fake_robot_api.json";
import FriendsCreate from "./components/Friends";
import friendsData from "./friendsData/friends.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RobotUsers usersData={apiRobots} />
      <FriendsCreate friends={friendsData} />
    </div>
  );
}

export default App;
