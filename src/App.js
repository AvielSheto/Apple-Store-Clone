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
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    to={"/products"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <AppleIcon /> Products
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/customers"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <PeopleRoundedIcon />
                    Costumers
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/purchased"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ShoppingCartIcon />
                    Purchases
                  </Link>
                </Nav.Link>
                <NavDropdown
                  style={{ color: "white" }}
                  title="Account"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link style={{ textDecorationLine: "none" }} to={"/signUp"}>
                      {" "}
                      Log in
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Registor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
               
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
