import PropTypes from "prop-types";
import RobotUsersList from "../RobotUsersList";

function RobotUsers({ usersData }) {
  const { users } = usersData;
  // console.log(id, fistName, lastName, maidenName, age, image, phone);
  return (
    <div>
      <RobotUsersList users={users} />
    </div>
  );
}

export default RobotUsers;

RobotUsers.propTypes = {
  usersData: PropTypes.object.isRequired,
};
