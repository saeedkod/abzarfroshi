import React from 'react';
import { create } from "jss";
import rtl from "jss-rtl";
import {StylesProvider, jssPreset} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/core/styles"
import CustomTheme from './assets/CustomTheme';

import Header from "./Components/Header&Footer/Header";
import "./Components/Header&Footer/style.css";
import Home from "./Components/budy.js/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Frosh from "./Components/budy.js/Frosh";
import Hamkari from "./Components/budy.js/Hamkari";
import Amozesh from "./Components/budy.js/Amozesh";
import Darbareh from "./Components/budy.js/Darbareh";
import Tamas from "./Components/budy.js/Tamas";
import Khodro from "./Components/budy.js/khodro";
import Barghi from "./Components/budy.js/Barghi";
import Boresh from "./Components/budy.js/Boresh";
import Badi from "./Components/budy.js/Badi";
import Account from "./Components/budy.js/account";
import Vrod from "./Components/budy.js/Vrod";
import Bazgasht from "./Components/budy.js/Bazgasht";
import Pardakht from "./Components/budy.js/Pardakht";
import Ersal from "./Components/budy.js/Ersal";
import Ghavanin from "./Components/budy.js/ghavanin";

const jss = create({ piugins: [...jssPreset().plugins, rtl()]});

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path='/Components/budy.js/Frosh'>
              <Frosh/>
            </Route>

            <Route path='/Components/budy.js/Hamkari'>
              < Hamkari/>
            </Route>

            <Route path='/Components/budy.js/Amozesh'>
              < Amozesh/>
            </Route>

            <Route path='/Components/budy.js/Darbareh'>
              <Darbareh/>
            </Route>

            <Route path='/Components/budy.js/Tamas'>
              <Tamas/>
            </Route>

            <Route path='/Components/budy.js/Home'>
              <Home/>
            </Route>

            <Route path='/Components/budy.js/khodro'>
              <Khodro/>
            </Route>

            <Route path='/Components/budy.js/Boresh'>
              <Boresh/>
            </Route>

            <Route path='/Components/budy.js/Badi'>
              <Badi/>
            </Route>

            <Route path='/Components/budy.js/Barghi'>
              <Barghi/>
              </Route>

              <Route path='/Components/budy.js/account'>
                <Account/>
              </Route>

              <Route path='/Components/budy.js/Vrod'>
                <Vrod/>
              </Route>


              


              <Route path='/Components/budy.js/Ersal'>
                <Ersal/>
              </Route>




              <Route path='/Components/budy.js/Bazgasht'>
                <Bazgasht/>
              </Route>



              <Route path='/Components/budy.js/Pardakht'>
                <Pardakht/>
              </Route>


              <Route path='/Components/budy.js/Ghavanin'>
                <Ghavanin/>
              </Route>


          </Switch>
        <Header/>
       </Router>
     </StylesProvider>
  </ThemeProvider>
   
  );
}

export default App;
