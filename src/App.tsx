
import './tailwind.css';
import Header from './header';
import Welcome from './welcome';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import { StateContext, StateProvider } from 'StateProvider';
import { useContext } from 'react';
import Body from './body';
import './App.css';

function App() {
  return (
    <StateProvider>
      <AppContent />
    </StateProvider>
  );
}

function AppContent() {
  const {state, dispatch} = useContext(StateContext);
  return (
    <div className="App">
      {/* <div className={`overlay 
      transition ease-in 
      ${sc.leftSideIsOpen || sc.rightSideIsOpen? 
      'bg-neutral-500 bg-opacity-70' : 
      'bg-white bg-opacity-0'} fixed`}></div> */}
      <Header />
      <LeftSideBar />
      <RightSideBar />
      <Welcome />
      <Body />
    </div>
  );
}

export default App;
