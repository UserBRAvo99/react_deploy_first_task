import PropTypes from "prop-types";
import RobotUsersList from "../RobotUsersList";
import RobotHeader from "../RobotHeader";

function RobotUsers({ usersData }) {
  const { users } = usersData;
  return (
    <div>
      <RobotHeader users={users} />
      <RobotUsersList users={users} />
    </div>
  );
}

export default RobotUsers;

RobotUsers.propTypes = {
  usersData: PropTypes.object.isRequired,
};
