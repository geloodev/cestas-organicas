import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import ProductsProvider from './context/ProductsProvider'
import RegisterProvider from './context/RegisterProvider'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                    </Routes>
                    <ProductsProvider>
                        <Routes>
                            <Route path="/produtos" element={ <Products/> } />
                        </Routes>
                    </ProductsProvider>
                    <RegisterProvider>
                        <Routes>
                            <Route path="/cadastro" element={ <Register/> } />
                        </Routes>
                    </RegisterProvider>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;
