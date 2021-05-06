import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingMain from './components/LandingMain/LandingMain';
import Features from './components/Features/Features';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingMain />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
