import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AppStyles from './app.module.css';

import AppHeader from '../app-header/app-header';

import ForgotPassword  from '../../pages/registration/forgot-password/forgot-password';
import HomePage  from '../../pages/homepage/homepage';
import Profile  from '../../pages/account/profile/profile';
import Registration  from '../../pages/registration/registration/registration';
import ResetPassword  from '../../pages/registration/reset-password/reset-password';
import SignIn  from '../../pages/registration/sign-in/sign-in';

import { userData } from '../../services/selectors/user';

import { getIngredients } from '../../services/actions/burger-ingredients-requests';

export const NORMA_API = 'https://norma.nomoreparties.space/api';

function App() {

  const userIsLogged = useSelector(userData).userIsLogged;
  const dispatch = useDispatch();

  useEffect( ()=> {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
   <>
    <div className={AppStyles.wrapper}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/ingredients:id' element={<ResetPassword />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
    <div id="modals"></div>
    </>
  );
}

export default App