import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import TaxCalculator from './components/TaxCalculator';
import BillManager from "./components/BillManager";

// style
import "./App.css"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Header />
      <div className="app-wrapper">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route  exact path ="/">
              <TaxCalculator />
            </Route>

            <Route path="/billManager">
              <BillManager />
            </Route>
        </Switch>
      
        </BrowserRouter>
        </div>
        <Footer />
    </div>
  );
}

export default App;
