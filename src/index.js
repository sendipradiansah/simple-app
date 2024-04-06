import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Assets/Style/main.scss';
import AddData from './Pages/Products/AddData';
import EditData from './Pages/Products/EditData';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      {/* <Route path="/view" element={<ShowData />}></Route> */}
      <Route path="/add" element={<AddData />}></Route>
      <Route path="/edit/:id" element={<EditData />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
