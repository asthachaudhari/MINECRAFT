import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Forms_Structure from './pages/Forms_Structure';

function App() {
        return (
          <div>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <Navbar />
                      <Forms_Structure />
                    </div>
                  }
                ></Route>
              </Routes>
            </BrowserRouter>
          </div>
        );
      }

export default App;
