import PropTypes from "prop-types";
import { WrapperDiv, GenderBlock } from "./styleComponent";

function RobotHeader({ users }) {
  let boys = 0;
  let girls = 0;
  users.map((user) => (user.gender === "male" ? (boys += 1) : (girls += 1)));
  return (
    <WrapperDiv>
      <h2>RoboUser</h2>
      <GenderBlock>
        <p>
          Boys<span>{boys}</span>
        </p>
        <p>
          Girls<span>{girls}</span>
        </p>
      </GenderBlock>
    </WrapperDiv>
  );
}

export default RobotHeader;

RobotHeader.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.string.isRequired,
    })
  ),
};
