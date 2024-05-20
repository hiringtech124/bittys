'use client'
import React, { useRef } from 'react'
import About from '@/components/Menu/About/About'
import Header from '@/components/Menu/Header/Header'
import WeServe from '@/components/Menu/WeServe/WeServe'
import Visitus from '@/components/Home/Visit/Visitus'
import Menu from '@/components/Menu/menuPage/menu'


export default function Home() {
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
      <>
        <Header scrollToMenu={scrollToMenu}/>
        <About/>
        <WeServe/>
        <Menu ref={menuRef}/>
        <Visitus/>     
      </>
    );
  }
  