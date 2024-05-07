import './tailwind.css';
import { StateContext, StateProvider } from 'StateProvider';
import { Route, Routes } from 'react-router-dom';
import Menu from 'pages/Menu';
import CheckoutPage from 'pages/Checkout';

import './App.css';
import { useContext } from 'react';

function App() {
  return (
    <StateProvider>
      <AppContent />
    </StateProvider>
  );
}

function AppContent() {
  const { state } = useContext(StateContext)

  return (
    <>
      <div className={`overlay 
      transition ease-in 
      ${state.leftSideIsOpen || state.rightSideIsOpen ?
          'bg-neutral-500 bg-opacity-70 z-10' :
          'bg-white bg-opacity-0 -z-10'} fixed`}></div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
