import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Customers from "./Components/Customers";
import EditCustomer from "./Components/EditCustomer";
import EditProduct from "./Components/EditProduct";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Purchased from "./Components/Purchased";
// mui
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import AppleIcon from "@mui/icons-material/Apple";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SignUp from "./Components/SignUp";
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <BottomNavigation style={{width:"100%", top:"0",backgroundColor:'black' }}>
            <Link to={""} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels  style={{color:"gray" }} >
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="menu" icon={<MenuIcon />} />
              </BottomNavigation>
            </Link>

            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels  style={{color:"gray" }} > 
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="Products" icon={<AppleIcon/>} />
              </BottomNavigation>
            </Link>

            <Link to={"/customers"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels>
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="Customer" icon={<PeopleRoundedIcon/>}/>
              </BottomNavigation>
            </Link>

            <Link to={"/purchased"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels>
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="Purchases" icon={<ShoppingCartIcon />} />
              </BottomNavigation>
            </Link>     

            <Link to={"/signUp"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels>
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="Log in" icon={<LoginIcon/>} />
              </BottomNavigation>
            </Link>     
          </BottomNavigation> */}

        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand> <Link to={''} style={{color:"white"}}><MenuIcon/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to={''} style={{color:"white", textDecoration:"none"}}>Products<AppleIcon/></Link></Nav.Link>
                <Nav.Link><Link to={''} style={{color:"white", textDecoration:"none"}}>Costumers <PeopleRoundedIcon/></Link></Nav.Link>
                <Nav.Link><Link to={''} style={{color:"white", textDecoration:"none"}}>Purchases <ShoppingCartIcon/></Link></Nav.Link>
                <NavDropdown style={{color:"white"}} title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item >Log in</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Registor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                     log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="" element={<Menu />} />
          <Route path="products" element={<Products />} />
          <Route path="editProduct/:id" element={<EditProduct />} />
          <Route path="customers" element={<Customers />} />
          <Route path="editCustomer/:id" element={<EditCustomer />} />
          <Route path="purchased" element={<Purchased />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
