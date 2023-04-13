import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemConextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemConextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemConextProvider> 
    </div>
  );
}

export default App;
