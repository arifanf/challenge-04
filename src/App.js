import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import CarSearch from './Pages/CarSearch'
import Result from './Pages/Result'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CarSearch />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Layout>
  );
}

export default App;
