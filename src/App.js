import './App.css';
import Header from './components/Header'
import Hero from "./components/Hero";
import Category from './components/Category'
import FeatureFirst from "./components/FeatureFirst";
import FeatureSecond from "./components/FeatureSecond";
import FeatureThird from "./components/FeatureThird";
import Help from './components/Help'
import Market from './components/Market'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <FeatureFirst />
      <FeatureSecond />
      <FeatureThird />
      <Help />
      <Market />
      <Footer/>
    </div>
  );
}

export default App;
