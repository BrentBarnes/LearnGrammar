import React from "react";
import { Routes, Route } from "react-router-dom";

// Simple Routes 
import HomePage from '../HomePage'
import Account from "../pages/Account";

// Chapter & Level Routes
import Ch1Lvl1 from "../chapters/chapter1/Ch1Lvl1";
import Ch1Lvl2 from "../chapters/chapter1/Ch1Lvl2";

import Ch2Lvl1 from "../chapters/chapter2/Ch2Lvl1";
import Ch2Lvl2 from "../chapters/chapter2/Ch2Lvl2";

import Ch3Lvl1 from "../chapters/chapter3/Ch3Lvl1";
import Ch3Lvl2 from "../chapters/chapter3/Ch3Lvl2";

const RouteSwitch = () => {
    return (
        <Routes style={{ margin: '0px', height: "100" }}>
            {/* Simple Routes */}
            <Route path="/" element={<HomePage />} /> 
            <Route path="/account" element={<Account />} /> 

            {/* Chapter & Level Routes */}
            <Route path="chapter/1/level/1" element={<Ch1Lvl1 />} />
            <Route path="chapter/1/level/2" element={<Ch1Lvl2 />} />

            <Route path="chapter/2/level/1" element={<Ch2Lvl1 />} />
            <Route path="chapter/2/level/2" element={<Ch2Lvl2 />} />

            <Route path="chapter/3/level/1" element={<Ch3Lvl1 />} />
            <Route path="chapter/3/level/2" element={<Ch3Lvl2 />} />
        </Routes>
    )
}

export default RouteSwitch