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
import { useDispatch } from "react-redux";

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
import Homepage from "./pages/Homepage";

import { changeT } from "./redux/translate";
import ProductReviews from "./pages/ProductReviews";

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
        <StoreProvider>
          <Navbar onChangeLang={onChangeLang} />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/products' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/success' element={<Success />} />
            <Route path='/orderHistory' element={<OrderHistory />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/products/:id' element={<Detail />} />
            <Route path='/products/:id/:reviews' element={<ProductReviews />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
