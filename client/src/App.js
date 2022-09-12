import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Dropdown } from "react-bootstrap";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const { t, i18n } = useTranslation();

  console.log("App.js i18n = ", i18n);

  const onChangeLang_old = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log("onChange lang called lang = ", e.target.value);
    console.log("App.js t(contactForm) = ", t("contactForm"));
  };

  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log("onChange lang called lang = ", e.target.value);
    console.log("App.js t(contactForm) = ", t("contactForm"));
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <select name='language' onChange={onChangeLang_old}>
          <option value='en'></option>
          <option value='es'></option>
          <option value='fr'></option>
        </select>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            <FontAwesomeIcon icon={faGlobe} />
          </Dropdown.Toggle>

          <Dropdown.Menu onChange={onChangeLang}>
            <Dropdown.Item data-value='en'>English</Dropdown.Item>
            <Dropdown.Item data-value='es'>Español</Dropdown.Item>
            <Dropdown.Item data-value='fr'>Français</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <StoreProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact t={t} i18n={i18n} />} />
            <Route path='/success' element={<Success />} />
            <Route path='/orderHistory' element={<OrderHistory />} />
            <Route path='/products/:id' element={<Detail />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
