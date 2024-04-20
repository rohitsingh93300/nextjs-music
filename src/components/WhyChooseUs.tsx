"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Content = [
    {
      title: "Guitar Fundamentals",
      description: "Learn the basics of playing the guitar, including proper technique, chord progressions, and strumming patterns. Suitable for beginners."
    },
    {
      title: "Piano for Beginners",
      description: "Get started with playing the piano. This class covers the fundamentals such as reading sheet music, hand positions, and playing simple melodies."
    },
    {
      title: "Introduction to Music Theory",
      description: "Explore the fundamental concepts of music theory including notes, scales, chords, and rhythm. No prior musical experience required."
    },
    {
      title: "Vocal Training",
      description: "Improve your singing voice with techniques to strengthen vocal cords, control pitch, and develop better tone. Suitable for all levels."
    }
  ];

function WhyChooseUs() {
  return (
    <div >
      <StickyScroll content={Content}/>
    </div>
  )
}

export default WhyChooseUs
