import PropTypes from "prop-types";

import style from "./robotUsersList.module.scss";

function RobotUsersList({ users }) {
  return (
    <ul className={style.list}>
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
            <li key={id} className={style.item}>
              <ul>
                <li>
                  <img src={image} alt={firstName} />
                </li>
                <li className={style.itemName}>
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                  <p>{maidenName}</p>
                </li>
                <li className={style.itemNameAgePhone}>
                  Age: <span>{age}</span>
                </li>
                <li className={style.itemNameAgePhone}>
                  Phone: <span>{phone}</span>
                </li>
                <li className={style.itemNameAgePhone}>
                  Gender: <span>{gender}</span>
                </li>
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      maidenName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ),
};
