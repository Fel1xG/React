'use client'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/Header';
import { AppRouter } from './router/AppRouter';
import { Footer } from './componentes/Footer';

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}
