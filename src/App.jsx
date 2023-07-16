import RobotUsers from "./components/RobotUsers";
import apiRobots from "./components/RobotUsers/fake_robot_api.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RobotUsers usersData={apiRobots} />
    </div>
  );
}

export default App;
