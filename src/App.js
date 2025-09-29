import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header'
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
