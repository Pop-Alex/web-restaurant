import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./pages/Header";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SingleItem from "./Components/SingleItem";
import Aboutus from "./Components/Aboutus";
import History from "./Components/History";
import Footer from "./Components/Footer";
import Cart from "./pages/Cart";
import { AnimatePresence } from "framer-motion";
import SubMenu from "./Components/SubMenu";
import PacmanLoader from "react-spinners/PacmanLoader";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <PacmanLoader
            color={"#F37A24"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {" "}
          <Navbar></Navbar>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Header></Header>}></Route>
              <Route path="about" element={<About></About>}>
                <Route path="aboutus" element={<Aboutus></Aboutus>} />
                <Route path="history" element={<History></History>} />
              </Route>

              <Route path="menu" element={<Menu></Menu>} />

              <Route path="submenu" element={<SubMenu></SubMenu>} />
              <Route path="submenu/:id" element={<SingleItem></SingleItem>} />

              <Route path="contact" element={<Contact></Contact>}></Route>
              <Route path="cart" element={<Cart></Cart>}></Route>

              <Route path="*" element={<Error />} />
            </Routes>
          </AnimatePresence>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default App;
