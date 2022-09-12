import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { initReactI18next, Trans, useTranslation } from "react-i18next";
import i18next from "i18next";

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

// Internationalization code (i18n)
const translationEn = { contactForm: "Contact Form" };
const translationEs = { contactForm: "Formulario de contacto" };
const translationFr = { contactForm: "Formulaire de contact" };

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    es: { translation: translationEs },
    fr: { translation: translationFr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

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

  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log("onChange lang called", e.target.value);
    console.log("App.js t = ", t);
  };

  return (
    <Suspense fallback='Loading...'>
      <ApolloProvider client={client}>
        <Router>
          <Trans>
            <select name='language' onChange={onChangeLang}>
              <option value='en'></option>
              <option value='es'></option>
              <option value='fr'></option>
            </select>
            <StoreProvider>
              <Nav />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact t={t} />} />
                <Route path='/success' element={<Success />} />
                <Route path='/orderHistory' element={<OrderHistory />} />
                <Route path='/products/:id' element={<Detail />} />
                <Route path='*' element={<NoMatch />} />
              </Routes>
            </StoreProvider>
          </Trans>
        </Router>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
