'use client'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    { id: 1, name: "John Doe", designation: "Lead Guitarist", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Jane Smith", designation: "Vocal Coach", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww" },
    { id: 3, name: "Alice Johnson", designation: "Drum Instructor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Michael Brown", designation: "Bass Guitar Teacher", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" },
    { id: 5, name: "Emily Davis", designation: "Piano Tutor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" }
  ];
  

function Instructors() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
         <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
         <p className="text-center">Discover the talented profesionals who will guide your musical journey </p>
         <div className='flex flex-row items-center justify-center mb-10 w-full'>
            <AnimatedTooltip items={instructors}/>
         </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
