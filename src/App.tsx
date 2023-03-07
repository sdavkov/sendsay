import React from 'react';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="wrapper">
        <div className="app">
          <Header />
          <div className="content">
            <Sidebar />
            <Canvas />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
