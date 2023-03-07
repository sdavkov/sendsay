import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { store } from '../src/store/store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
