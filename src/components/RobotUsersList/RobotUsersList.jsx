import PropTypes from "prop-types";

function RobotUsersList({ users }) {
  return (
    <ul>
      {users.map(
        ({
          id,
          firstName,
          lastName,
          maidenName,
          age,
          image,
          phone,
          gender,
        }) => {
          return (
            <li key={id}>
              <ul>
                <li>
                  <img src={image} alt={firstName} />
                </li>
                <li>
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                  <p>{maidenName}</p>
                </li>
                <li>{age}</li>
                <li>{phone}</li>
              </ul>
            </li>
          );
        }
      )}
    </ul>
  );
}

export default RobotUsersList;

RobotUsersList.propTypes = {
  users: PropTypes.array.isRequired,
};
