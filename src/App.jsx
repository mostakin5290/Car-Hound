import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DarkModeProvider } from "./context/DarkModeContext";
import HomePage from "./Components/Pages/HomePage";
import WishlistPage from "./Components/Pages/WishlistPage";
import CarDetail from "./Components/CarDetail";
import Layout from "./Components/Layout";
import ShopPage from "./Components/Pages/ShopPage";
import UserPage from "./Components/Pages/userPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage />
            </Layout>
          } 
        />
        <Route
          path="/wishlist"
          element={
            <Layout>
              <WishlistPage />
            </Layout>
          }
        />
        <Route
          path="/car/:id"
          element={
            <Layout>
              <CarDetail />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <ShopPage/>
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <UserPage/>
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </DarkModeProvider>
  );
}

export default App;