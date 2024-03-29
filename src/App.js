import React from "react";
import "../src/App.scss";
import Header from "@component/Header/Header";
import Banner from "@component/Banner/Banner";
import About from "@component/About/About";
import Projects from "@component/Projects/Projects";
import Contact from "@component/Contact/Contact";
import Footer from "@component/Footer/Footer";
import Notification from "@component/Notification/Notification";
function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

      {/* <Notification></Notification> */}
    </>
  );
}

export default App;
