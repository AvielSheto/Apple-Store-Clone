import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Components
import Customers from "././Components/customers/Customers";
import EditCustomer from "././Components/customers/EditCustomer";
import EditProduct from "./Components/Products/EditProduct";
import Menu from "./Components/menu/Menu";
import Products from "./Components/Products/Products";
import Purchased from "./Components/Purchases/Purchases";
import SignIn from "./Components/sign/SignIn";
import SignUp from "./Components/sign/SignUp";
import Loading from "./Components/sign/Loading";
import '././Components/menu/menu_style.scss';
// mui
import AppleIcon from "@mui/icons-material/Apple";
import Avatar from '@mui/material/Avatar';
// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// firebase
import { auth } from "././firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <BrowserRouter >
        <Navbar style={{ display: "flex", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.850)", }} expand="lg" variant="dark">
          <Container >
            <Navbar.Toggle style={{ border: "none" }} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link className="p-2 pt-1">
                  <Link to={'/'} className='link p-1'><AppleIcon /></Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/products'} className='link' >Products</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/customers'} className='link'>Costumers</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/purchased'} className='link'>Purchases</Link>
                </Nav.Link>
                <NavDropdown style={{ color: "white" }} title="Account" id="basic-nav-dropdown">
                  <Nav.Link>
                    <Link to={'/signIn'} className='ps-2 text-decoration-none'>Sign in</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={'/signUp'} className='ps-2 text-decoration-none'>Sign Up</Link>
                  </Nav.Link>
                  {/* <NavDropdown.Item href="/signIn">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>log out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              {user &&
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: 'info.main' }}></Avatar>
                  <Nav style={{ color: "white" }}>{user?.email}</Nav>
                </div>
              }
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
          <Route path="loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
