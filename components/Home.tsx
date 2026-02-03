import React from 'react';
import { Hero } from './Hero';
import { SignatureDishes } from './SignatureDishes';
import { EventSlider } from './EventSlider';
import { MenuHighlights } from './MenuHighlights';
import { WhyChooseUs } from './WhyChooseUs';
import { StatsCounter } from './StatsCounter';
import { Reviews } from './Reviews';
import { BrandStory } from './BrandStory';
import { EventsTicker } from './EventsTicker';
import { Location } from './Location';
import { SocialGallery } from './SocialGallery';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <EventSlider />
      <MenuHighlights />
      <WhyChooseUs />
      <StatsCounter />
      <Reviews />
      <BrandStory />
      <EventsTicker />
      <Location />
      <SocialGallery />
    </>
  );
};