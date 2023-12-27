import "./App.css";
import Header from "./nav";
import Hero from "./Hero";
import Specialisation from "./Specialisation";
import Testimony from "./Testimony";

function App() {
  return (
    <>
      <Header classname="header" />
      <Hero />
      <Specialisation />
      <Testimony />
    </>
  );
}

export default App;
