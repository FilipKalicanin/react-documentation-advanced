import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

function App() {

    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

function Home() {
    return (
        <h1>Home</h1>
    )
}

function About() {
    return (
        <h1>About</h1>
    )
}

function Contact() {
    return (
        <h1>Contact</h1>
    )
}

export default App;
/*
When <Switch> is rendered it searches trough children <Route> elements to find
an exact match. If no match is found, it will render nothing (null);

Route with path="/" will always match the url because all urls have /.
So it is important to put exact atribute before path="/",
or to place it in last place.. if path is only /

<BrowserRouter> will keep UI in sync with API

<Link> provides declerative, accessible navigation around application.
Link is acctualy <a href="" /> that will onClick lead a page to desired url

<Redirect> will navigate to a new location. The new location will override the current location in the history stack
(?)
<Retirect to="desired/location" />


*/