import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import CarSearch from './Pages/CarSearch'
import Info from './Pages/Info'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CarSearch />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Layout>
  );
}

export default App;
