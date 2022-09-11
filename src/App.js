import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Customers from "./Components/Customers";
import EditCustomer from "./Components/EditCustomer";
import EditProduct from "./Components/EditProduct";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Purchased from "./Components/Purchased";
import SignIn from "./Components/sign/SignIn";
import SignUp from "./Components/sign/SignUp.jsx";
import Loading from "./Components/sign/Loading";
// mui
import AppleIcon from "@mui/icons-material/Apple";
import Avatar from '@mui/material/Avatar';
import './style/menu_style.scss'

// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// firebase login
import { auth } from "./firebase";
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
        <Navbar style={{ padding: "0.1rem", display: "flex", alignItems: "center", backgroundColor:"rgba(0, 0, 0, 0.850)", }} expand="lg" variant="dark">
          <Container >
            <Navbar.Toggle style={{border:"none"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to={'/'} className='link'><AppleIcon /></Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/products'} className='link' >Products</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/customers'} className='link'>{/* <PeopleRoundedIcon /> */}Costumers</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={'/purchased'} className='link'>{/* <ShoppingCartIcon /> */}Purchases</Link>
                </Nav.Link>
                <NavDropdown style={{ color: "white" }} title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/signIn">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item>
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
