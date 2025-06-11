import React from "react";
import Header from "../components/templates/Header/Header";
import Process from "../components/templates/Process/Process";
import News from "../components/templates/News/News";
import About from "../components/organisms/About/About";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Process />
      <News />
    </>
  );
}

export default Home;
