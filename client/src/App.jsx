import React, { Fragment } from 'react'
import Home from './pages/Home.jsx'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDW40w2BJ_IgUI3Z5TuBWD5hhNA1N1hlr8",
    authDomain: "the-evergreen-project.firebaseapp.com",
    projectId: "the-evergreen-project",
    storageBucket: "the-evergreen-project.appspot.com",
    messagingSenderId: "95102526674",
    appId: "1:95102526674:web:8709a3004001bc0949f90b",
    measurementId: "G-SZHKV1TF4T"
};

initializeApp(firebaseConfig);
// getAnalytics(firebaseConfig);


const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;