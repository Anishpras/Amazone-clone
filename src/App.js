import Home from "./Home";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import CreateAccount from "./CreateAccount";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import SecondHeader from "./SecondHeader";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51Hih5NAUejVeeeGN1yxpEUnleDpAopKrQheq38fpoNelLQ4XouDWicNuJoO5ShfEWWLEKGUm2poVbj0poJQGt2HO005z7qRh0M"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User Is >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app" id="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <SecondHeader />
            <Orders />
            <GoToTop />
            <Footer />
          </Route>
          <Route path="/register">
            <CreateAccount />
          </Route>
          <Route path="/checkout">
            <Header />
            <SecondHeader />
            <Checkout />
            <GoToTop />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <SecondHeader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

            <GoToTop />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <SecondHeader />
            <Home />
            <GoToTop />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
