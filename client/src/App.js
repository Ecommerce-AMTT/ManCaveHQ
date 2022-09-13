import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loading from "./components/Loading";

import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeT } from "./redux/translate";

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
  // used to control i18n language setting
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("UseEffect.dispatch called");
    dispatch(changeT(t), []);
  });

  const onChangeLang = (e) => {
    setLang(e.target.getAttribute("data-value"));
    i18n.changeLanguage(e.target.getAttribute("data-value"));
    dispatch(changeT(t));
  };

  return (
    <ApolloProvider client={client}>
      <Router>
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
        <StoreProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/success' element={<Success />} />
            <Route path='/orderHistory' element={<OrderHistory />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/products/:id' element={<Detail />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
