import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MarketplacePage from './pages/MarketplacePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import SignupPage from './pages/SignupPage';
import Header from './components/Header';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const openLoginPopup = () => setShowLoginPopup(true);
  const closeLoginPopup = () => setShowLoginPopup(false);

  const openSignupPopup = () => setShowSignupPopup(true);
  const closeSignupPopup = () => setShowSignupPopup(false);

  return (
    <Router>
      <Header onLoginClick={openLoginPopup}/>
      {showLoginPopup && <LoginPage onClose={closeLoginPopup} onSignupClick={openSignupPopup} />}
      {showSignupPopup && <SignupPage onClose={closeSignupPopup} />}
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
