import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoIcons5 from "react-icons/io5";
import { BsClipboard2XFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <>
      <li key="0" className="nav-text">
        <Link to="/">
          <AiIcons.AiFillHome />
          <span>Dashboard</span>
        </Link>
      </li>
      <li key="1" className="nav-text">
        <Link to="/lines">
          <FaIcons.FaClipboardList />
          <span>Your Lines</span>
        </Link>
      </li>
      <li key="2" className="nav-text">
        <Link to="/new">
          <IoIcons.IoMdAdd />
          <span>Add line</span>
        </Link>
      </li>
      <li key="3" className="nav-text">
        <Link to="/">
          <IoIcons5.IoLogOutOutline />
          <span>Sign out</span>
        </Link>
      </li>
    </>
  );
};

export default Sidebar;
