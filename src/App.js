import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import TaxCalculator from './components/TaxCalculator';
import BillManager from "./components/BillManager";
import ThemeSelector from "./components/ThemeSelector";
import { useThemeContext } from "./hooks/useThemeContext";

// style
import "./App.css"
import Footer from "./components/Footer";


function App() {
  const { mode } = useThemeContext()
  return (
    <div className={`App ${mode}`}>
       <Header />
       <ThemeSelector />
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
