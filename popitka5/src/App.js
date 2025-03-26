import './App.css';
import HeaderComp from './component/footerHeader/headerComp';
import FooterComp from './component/footerHeader/footerComp';
import SavedComp from './component/footerHeader/another/SavedComp';
import MyWave from './component/footerHeader/another/MyWave';

function App() {
  return (
    <div>
      <HeaderComp />
      <div className="content-container">
        <div className="column column-30">
          <SavedComp />
        </div>
        <div className="column column-70">
          <MyWave />
        </div>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
