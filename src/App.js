import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/navbar/Hero/Hero';
import HeadineCards from './components/navbar/HeadlineCards/HeadineCards';
import Food from './components/Food';
import Category from './components/Category';
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <HeadineCards />
      <Food />
      <Category/>
    </>
  );
}

export default App;
