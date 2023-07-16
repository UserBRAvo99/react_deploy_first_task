import PropTypes from "prop-types";

function RobotUsersList({ users }) {
  console.log(users);
  return (
    <ul>
      <li>First Users</li>
    </ul>
  );
}

export default RobotUsersList;

RobotUsersList.propTypes = {
  users: PropTypes.array.isRequired,
};
