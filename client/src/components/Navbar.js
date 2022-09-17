import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";

// import SearchBar from "../components/SearchBar";
import Auth from "../utils/auth";
import { useSelector } from "react-redux";
import LoginModal from "./LoginModal";

const DropdownStyles = styled.div`
  button {
    font-size: 1.3rem;
    background-color: #343a40 !important;
    border-color: #343a40 !important;
  }
`;

export default function AppNavbar({ onChangeLang }) {
  const { t } = useSelector((state) => {
    return state.translate;
  });

  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <DropdownStyles name='i18n-menu' id='Main'>
            <Dropdown>
              <Dropdown.Toggle
                className='hover-card'
                variant='success'
                id='dropdown-basic'
              >
                <FontAwesomeIcon icon={faGlobe} />
              </Dropdown.Toggle>
              <Dropdown.Menu onClick={onChangeLang}>
                <Dropdown.Item data-value='en'>English</Dropdown.Item>
                <Dropdown.Item data-value='es'>Español</Dropdown.Item>
                <Dropdown.Item data-value='fr'>Français</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </DropdownStyles>
          <Navbar.Brand as={Link} to='/' style={{ fontSize: 30 }}>
            <img
              src='/assets/images/merncavehqlogo.png'
              height='95'
              width='180'
              className='d-inline-block align-top'
              alt='MernCave HQ Logo'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/products'>
                {t("Nav:search_product")}
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                {t("Nav:about")}
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                {t("Nav:contact")}
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/orderHistory'>
                    {t("Nav:order_history")}
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>{t("Nav:logout")}</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  {t("Nav:login_signup")}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          {/* <SearchBar /> */}
        </Container>
      </Navbar>
      <LoginModal setShowModal={setShowModal} showModal={showModal} />
    </>
  );
}
