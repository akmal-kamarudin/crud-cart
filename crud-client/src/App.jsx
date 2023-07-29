/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import ContextProvider from "./context/ContextProvider";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Auth0ProviderWithRedirectCallback
          domain="akmal-busy.us.auth0.com"
          clientId="w9LqbZwX6ZBmwO6s13cFG7iCDUu8XRew"
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: "https://akmal-busy.us.auth0.com/api/v2/",
            scope:
              "openid profile email read:current_user update:current_user_metadata",
          }}
        >
          <Header />
          <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80 bg-slate-100">
            <Routes>
              <Route path="/" exact element={<Homepage />}></Route>
              <Route
                path="/profile"
                exact
                element={<ProtectedRoute component={Profile} />}
              ></Route>
            </Routes>
          </main>
          <Footer />
        </Auth0ProviderWithRedirectCallback>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
