import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import cn from "classnames";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import NotFoundPage from "./routes/NotFound";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";

import s from "./style.module.css";
import "react-notifications/lib/notifications.css";
import { FirebaseContext } from "./context/firebaseContext";
import Firebase from "./services/firebase";
import { NotificationContainer } from "react-notifications";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const location = useLocation("/");
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </FirebaseContext.Provider>
  );
};

export default App;
