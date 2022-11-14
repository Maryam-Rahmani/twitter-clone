import React from 'react';
import ReactDOM from 'react-dom/client';
import StartPage from './pages/start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './pages/sign-up';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<StartPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path='/login'  element={<LoginPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
