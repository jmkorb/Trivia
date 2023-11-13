import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
        <NavbarBrand tag={Link} to="/">Qwizardry</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default NavMenu;