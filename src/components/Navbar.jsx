import { Link } from 'react-router-dom';
import { SiAzurepipelines, SiCodefactor   } from "react-icons/si";
import { SlHome, SlMagnifier, SlQuestion, SlNote   } from "react-icons/sl";
import '../index.css'


const Navbar = () => {
    return (
      <div className="fixed right-0 h-screen w-20 flex flex-col justify-end">
        <SideBarIcon to="Home" icon={<SiCodefactor  size="18" text="Home" />} />
        <SideBarIcon to="Search" icon={<SlMagnifier size="18" text="Search" />} />
        <SideBarIcon className="Help" to="Help" icon={<SlNote stion size="18" text="Help" />} />
        <SideBarIcon className="Settigns" to="Settings" icon={<SiAzurepipelines   size="18" text="Settings" />} />
      </div>
    );
  }
  
  // eslint-disable-next-line react/prop-types
  const SideBarIcon = ({ to, icon }) => (
    <Link to={to} className="sidebar-icon group mb-11">
      {icon}
    </Link>
  );
  
  export default Navbar;