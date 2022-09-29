import React from 'react';

import {
    Blog,
    Header,
    Features,
    Footer,
    Possibility,
    WhatGPT3,
} from './containers';
import { Navbar, Brand, CTA } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
