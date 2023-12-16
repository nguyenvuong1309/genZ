import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TopProductPage from './pages/TopProductPage'
import NoPage from './pages/NoPage'
import ProductDetail from './pages/ProductDetail'
import StandForNorthSide from './pages/StandForNorthSide'
import NewPageArrival from './pages/NewArrivalPage'
import CollectionPage from './pages/CollectionPage'
import BubbleGumPage from './pages/BubbleGumPage'
import BottomProductPage from './pages/BottomProductPage'
import AccessaryProductPage from './pages/AccessaryProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/stand-for-northside" element={<StandForNorthSide />} />
          <Route path="/top" element={<TopProductPage />} />
          <Route path="/bottom" element={<BottomProductPage />} />
          <Route path="/accessary" element={<AccessaryProductPage />} />
          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="/new-arrival" element={<NewPageArrival />} />
          <Route path="/collections/all" element={<CollectionPage />} />
          <Route path="/bubble-gum" element={<BubbleGumPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path='/a' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
