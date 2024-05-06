import React from 'react'
import About from '@/components/Menu/About/About'
import Header from '@/components/Menu/Header/Header'
import WeServe from '@/components/Menu/WeServe/WeServe'
import Visitus from '@/components/Home/Visit/Visitus'
import OurMenu from '@/components/Menu/ourMenu/ourMenu'


export default function Home() {
    return (
      <>
        <Header/>
        <About/>
        <WeServe/>
        <OurMenu/>
        <Visitus/>     
      </>
    );
  }
  