import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemConextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemConextProvider>
        <Navbar />
        <BookList />
      </ThemConextProvider> 
    </div>
  );
}

export default App;
