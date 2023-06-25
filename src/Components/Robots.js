import robot from "../robot.png";
const Robots = ({hidden}) => {
    return (
      <div className={`page-container robot ${hidden ? 'noOverflow' : ''}`}>
        <h1>Timmy (2022-2023 Robot)</h1>
        <img src={robot} alt=""></img>
        <li>18-22 cycles on the high junction in Tele-Op</li>
        <li>1+4 Medium Junction Auto</li>
        <li>Can score stacks in Tele-Op if needed</li>
      </div>
    );
  };
export default Robots