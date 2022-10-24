import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link to="usestate">UseStates</Link>
        </li>
        <li>
          <Link to="usecallback">UseCallback</Link>
        </li>
        <li>
          {" "}
          <Link to="usecontext">UseContext</Link>
        </li>
        <li>
          <Link to="useeffect">UseEffect</Link>
        </li>
        <li>
          {" "}
          <Link to="uselayouteffect">UseLayoutEffect</Link>
        </li>
        <li>
          {" "}
          <Link to="usememo">UseMemo</Link>
        </li>
        <li>
          <Link to="usereducer">UseReducer</Link>
        </li>
        <li>
          <Link to="useref">UseRef</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
