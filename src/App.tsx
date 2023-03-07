import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
            <DndProvider backend={HTML5Backend}>
              <Sidebar />
              <Canvas />
            </DndProvider>
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
