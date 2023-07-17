import PropTypes from "prop-types";
import { styled } from "styled-components";

import RobotUsersList from "../RobotUsersList";
import RobotHeader from "../RobotHeader";

function RobotUsers({ usersData }) {
  const { users } = usersData;
  return (
    <Wrapper>
      <RobotHeader users={users} />
      <RobotUsersList users={users} />
    </Wrapper>
  );
}

export default RobotUsers;

RobotUsers.propTypes = {
  usersData: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  margin-bottom: 50px;
  padding-top: 30px;
`;
