import React from 'react'
import { Routes, Route } from 'react-router-dom'

function SysRoutes() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/produtos" />
            <Route path="/cadastro" />
        </Routes>
    )
}

export default SysRoutes;
