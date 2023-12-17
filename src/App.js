import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import ChatPage from './components/chatpage';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:contactId" element={<ChatPage />} />
        </Routes>

      </Router>
    </Provider>

  );
}

export default App;
