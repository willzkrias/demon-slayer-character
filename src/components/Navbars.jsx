import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png';

const Navbars = () => {
  return (
    <Navbar rounded className="shadow-md">
      <Navbar.Brand as={Link} to="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Demon Slayer" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Demon Slayer</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        
        <Navbar.Link as={Link} to="#">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">
          Rating
        </Navbar.Link>
        <Navbar.Link as={Link} to="#">
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
