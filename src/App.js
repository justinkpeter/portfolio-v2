import React, { useState, useEffect, useRef } from 'react'
import { Home } from "./views/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './views/Layout';

import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Projects } from "./views/Projects";
import {AnimatePresence} from "framer-motion";
import {Blendify} from "./views/Blendify";
import {Spenser} from "./views/Spenser";
import {Justincrediblemoments} from "./views/Justincrediblemoments";
import {PaintOnPurpose} from "./views/PaintOnPurpose";
import {DestinyDiary} from "./views/DestinyDiary";

function App(props){

    const location = useLocation();

    // useEffect(() =>{
    //     console.log('%c Designed and developed by Justin Peter!\n Thanks for stopping by 👋', 'background: #222; color: #ffffff');
    // }, [])

    return (
        <div className={"app"} >
            <AnimatePresence inital={false} mode={'wait'}>
                <Routes key={location.pathname}>
                    <Route path={'/'} element={<Home />} />
                    {/*<Route path="projects" element={<Projects />} />*/}
                    <Route path="projects/blendify" element={<Blendify />} />
                    <Route path="projects/spenser" element={<Spenser />} />
                    <Route path="projects/justincrediblemoments" element={<Justincrediblemoments />} />
                    <Route path="projects/paintonpurpose" element={<PaintOnPurpose />} />
                    <Route path="projects/destinydiary" element={<DestinyDiary />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App