import PropTypes from "prop-types";
import { styled } from "styled-components";

import style from "./robotUsersList.module.scss";

function RobotUsersList({ users }) {
  return (
    <StyledList>
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
            <StyledListItem
              key={id}
              className={`${gender === "male" ? style.blue : style.pink}`}
            >
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
            </StyledListItem>
          );
        }
      )}
    </StyledList>
  );
}

const StyledList = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StyledListItem = styled.li`
  max-width: 300px;
  padding: 10px;
  border-radius: 20px;
  border: solid 1px black;
  &:hover {
    box-shadow: 0px 0px 51px 0px rgba(47, 212, 146, 1);
  }
`;

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
