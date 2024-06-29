import React from 'react';
import Hero from '../Components/SubHeader/Hero';
import HomeSecCrousel from '../Components/HomeSecCrousel/HomeSecCrousel';
import {mens_kurta} from '../Components/Data/mens_kurta';
import { dressPage1 } from '../Components/Data/dressPage1';
import { Mens_Shirt} from '../Components/Data/Mens_Shirt';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSecCrousel data={mens_kurta} section_Name='mens_kurta'/>
      <HomeSecCrousel data={dressPage1} section_Name='dressPage1'/>
      <HomeSecCrousel data={Mens_Shirt} section_Name='Mens_Shirt'/>
      </div>
    </div>
  );
}

export default HomePage;