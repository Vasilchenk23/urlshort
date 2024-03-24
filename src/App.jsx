import '../src/style.css'
import Header from './Сomponent/Header';
import MainBlock from './Сomponent/MainBlock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QA from './Сomponent/QA'
import CabinetComponent from './Сomponent/CabinetComponent'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cabinet" element={<CabinetComponent />} />
        <Route path="/g" element={<MainBlock />} />
        <Route path="/b" element={<QA />} />
      </Routes>
    </Router>
    <MainBlock />
      <QA />
      </>
  );
}

export default App;
