import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import Search from './Pages/Search'
import Info from './Pages/Info'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Layout>
  );
}

export default App;
