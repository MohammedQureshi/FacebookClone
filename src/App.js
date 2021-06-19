import './App.css';
import Header  from './Header/Header'
import LeftSidePanel from './Panel/LeftSidePanel';
import MiddlePanel from './MiddlePanel/MiddlePanel';
import RightSidePanel from './Panel/RightSidePanel';

function App() {
  return (
    <div className="FacebookClone">
      {/* HEADER - MOHAMMED */}
      <Header /> 
      {/* Main Body */}
      <div className="FacebookClone_MainPanel">
        <div className="FacebookClone_MainPanel__Left">
          <LeftSidePanel />
        </div>
        <div className="FacebookClone_MainPanel__Middle">
          <MiddlePanel />
        </div>
        <div className="FacebookClone_MainPanel__Right">
          <RightSidePanel />
        </div>
      </div>
    </div>
  );
}

export default App;
