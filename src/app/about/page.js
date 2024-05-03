import React from 'react'
import OurTeam from '@/components/About/OurTeam/OurTeam';
import Slideone from '@/components/About/Slideone/Slideone';
import Slidetwo from '@/components/About/Slidetwo/Slidetwo';
import Slidethree from '@/components/About/Slidethree/Slidethree';
import Slidefour from '@/components/About/Slidefour/Slidefour';
import Review from '@/components/About/Review/Review';

export default function Home() {
    return (
      <>
        <Slideone/>
        <Slidetwo/>
        <Slidethree/>
        <Slidefour/>
        <OurTeam/>
        <Review/>
        
      </>
    );
  }
  