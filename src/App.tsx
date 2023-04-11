
import './tailwind.css';
import Header from './header';
import Welcome from './welcome';
import Sidebar from './sidebar';
import { StateContext, StateProvider } from 'StateProvider';
import { useContext } from 'react';
import Body from './body';

function App() {
  return (
    <StateProvider>
      <AppContent />
    </StateProvider>
  );
}

function AppContent() {
  const sc = useContext(StateContext);
  return (
    <div className="App">
      {/* <div className={`overlay 
      transition ease-in 
      ${sc.SideIsOpen? 
      'bg-neutral-500 bg-opacity-70' : 
      'bg-white bg-opacity-0'} fixed`}></div> */}
      <Header />
      <Sidebar />
      <Welcome />
      <Body />
    </div>
  );
}

export default App;
