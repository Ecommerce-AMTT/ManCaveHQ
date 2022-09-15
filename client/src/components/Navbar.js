import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import SearchBar from "../components/SearchBar";
import Auth from "../utils/auth";
import { useSelector } from "react-redux";

const Styles = styled.div`
  button {
    background-color: #343a40 !important;
    border-color: #343a40 !important;
  }
`;

export default function AppNavbar({ onChangeLang }) {
  const { t } = useSelector((state) => {
    // console.log("Contact.state ", state);
    return state.translate;
  });

  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Styles name='i18n-menu' id='Main'>
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                <FontAwesomeIcon icon={faGlobe} />
              </Dropdown.Toggle>
              <Dropdown.Menu onClick={onChangeLang}>
                <Dropdown.Item data-value='en'>English</Dropdown.Item>
                <Dropdown.Item data-value='es'>Español</Dropdown.Item>
                <Dropdown.Item data-value='fr'>Français</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Styles>
          <Navbar.Brand as={Link} to='/' style={{ fontSize: 30 }}>
            MernCave HQ
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
                  <Nav.Link className='mr-5' onClick={Auth.logout}>
                    {t("Nav:logout")}
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className='mr-5' onClick={() => setShowModal(true)}>
                  {t("Nav:login_signup")}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          {/* <SearchBar /> */}
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        style={{ background: "linear-gradient(to right, #232526, #414345)" }}
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item >
                  <Nav.Link eventKey='login'>{t("Nav:login")}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>{t("Nav:signup")}</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}
