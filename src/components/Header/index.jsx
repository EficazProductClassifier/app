import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Eficaz Product Classifier</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <div className="d-flex">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/products">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/categories">Categories</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
