import React from "react";
import {
  AboutHome,
  Faq,
  FeaturedBlog,
  HeroSection,
  NewsLetter,
  Stats,
  Testimonial,
} from "../../components";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Stats />
      <AboutHome />
      <FeaturedBlog />
      <Testimonial />
      <Faq />
      <NewsLetter />
    </div>
  );
};

export default Home;
