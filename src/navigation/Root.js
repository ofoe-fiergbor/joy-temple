import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './../components/navbar/Navbar';
import Gallary from './../pages/Gallary';
import Home from './../pages/Home';
import Messages from './../pages/Messages';
import Footer from './../components/footer/Footer';

function Root() {
    return (
        <Router>
        <Navbar/>
        <Switch>

        <Route path='/' component={Home}/>
        <Route path='/gallery' component={Gallary}/>
        <Route path='/messages' component={Messages}/>
        
        </Switch>
            <Footer />
        </Router>
    )
}

export default Root
