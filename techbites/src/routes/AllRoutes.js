import { Routes, Route } from "react-router-dom";
import { Home, Blog } from "../pages";


import React from 'react'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path=":blog" element={<Blog/>} />
        </Routes>
    </div>
  )
}
