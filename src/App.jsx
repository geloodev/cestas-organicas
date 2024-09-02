import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'
import ProductsProvider from './context/ProductsProvider'
import UserProvider from './context/UserProvider'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserProvider>
                    <Header/>
                </UserProvider>
                <main>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                    </Routes>
                    <ProductsProvider>
                        <Routes>
                            <Route path="/produtos" element={ <Products/> } />
                            <Route path="/produtos/:id" element={ <ProductDetails/> } />
                            <Route path="/carrinho" element={ <Cart/> } />
                        </Routes>
                    </ProductsProvider>
                    <UserProvider>
                        <Routes>
                            <Route path="/entrar" element={ <SignIn/> } />
                            <Route path="/cadastro" element={ <Register/> } />
                        </Routes>
                    </UserProvider>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;
