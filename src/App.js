import "./App.css";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RepoPage } from "./pages/RepoPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/repositories" component={RepoPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
