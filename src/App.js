import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Customers from "./Components/Customers";
import EditCustomer from "./Components/EditCustomer";
import EditProduct from "./Components/EditProduct";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Purchased from "./Components/Purchased";
// mui
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppleIcon from "@mui/icons-material/Apple";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SignUp from "./Components/SignUp";
// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SignIn from "./Components/SignIn";
// firebase login
import { auth } from './firebase'
import {onAuthStateChanged} from 'firebase/auth'

export default function App() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  return (
    <div>
      <BrowserRouter>
        <Navbar bg="black" expand="lg" variant="dark">
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
                  <NavDropdown.Item href="/signIn">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav style={{color:"white"}}>{user?.email}</Nav>
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
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
