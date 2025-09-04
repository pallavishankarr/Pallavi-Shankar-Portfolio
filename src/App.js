import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
          <main className="main">
        <Home />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
