import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import BookDetail from "./pages/BookDetail"
import Cart from "./pages/Cart"

function App() {


  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/book/:id" element={<BookDetail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
