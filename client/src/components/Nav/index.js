import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { t } from "i18next";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to='/orderHistory'>Order History</Link>
          </li>
          <li className='mx-1'>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href='/' onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to='/signup'>{t("Nav:signup")}</Link>
          </li>
          <li className='mx-1'>
            <Link to='/login'>{t("Nav:login")}</Link>
          </li>
          <li className='mx-1'>
            <Link to='/about'>{t("Nav:about")}</Link>
          </li>
          <li className='mx-1'>
            <Link to='/contact'>{t("Nav:contact")}</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className='flex-row px-1'>
      <h1>
        <Link to='/'>ManCave-HQ</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
