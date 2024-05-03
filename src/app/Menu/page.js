import React from 'react'
import About from '@/components/Menu/About/About'
import Header from '@/components/Menu/Header/Header'
import OurSpecial from '@/components/Menu/OurSpecial/OurSpecial'
import WeServe from '@/components/Menu/WeServe/WeServe'
import Visitus from '@/components/Home/Visit/Visitus'


export default function Home() {
    return (
      <>
        <Header/>
        <About/>
        <WeServe/>
        <OurSpecial/>
        <Visitus/>
        
      </>
    );
  }
  