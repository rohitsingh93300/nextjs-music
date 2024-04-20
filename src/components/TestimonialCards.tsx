'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [

      
        { quote: "Their music transcends boundaries and speaks to the depths of the human experience. Every note, every lyric is a testament to their mastery of the art. Truly, they are a force to be reckoned with in the music industry.", name: "John Doe", title: "Music Producer" },
        { quote: "I've listened to countless artists, but none have moved me the way they do. Their melodies linger in my mind long after the music stops, and their lyrics resonate with my soul. In a world full of noise, they are a beacon of authenticity and talent.", name: "Jane Smith", title: "Music Enthusiast" },
        { quote: "As a music blogger, I've had the privilege of witnessing the rise of many artists, but few have captured my attention like they have. Their ability to innovate while staying true to their roots is commendable. I eagerly anticipate each new release, knowing I'm in for a musical journey like no other.", name: "Alice Johnson", title: "Music Blogger" },
        { quote: "I've been a music critic for years, and I've heard it all. Yet, every now and then, an artist comes along who redefines what it means to create music. They are one of those artists. Their latest album is not just music; it's an experience. It challenges, it inspires, and above all, it resonates.", name: "Michael Brown", title: "Music Critic" },
        { quote: "I attended their live performance recently, and I was blown away. Their energy on stage is infectious, and their passion for music is palpable. It's not just a concert; it's an event. I left feeling exhilarated and eager for more.", name: "Emily Davis", title: "Concertgoer" },
        { quote: "Their music has been the soundtrack to my life for as long as I can remember. Each song is a reminder of a moment, a feeling, a memory. Their music has a way of bringing people together, transcending barriers, and uniting us in our shared humanity.", name: "David Wilson", title: "Music Lover" },
        { quote: "I'm a music student, and I study their work religiously. Their compositions are intricate yet accessible, complex yet relatable. They are a constant source of inspiration for me as I navigate my own musical journey.", name: "Sarah Thompson", title: "Music Student" },
        { quote: "As a songwriter, I've always admired artists who can tell a story through their music. They are masters of storytelling. Their melodies are enchanting, and their lyrics are poetry. They have a gift for capturing the essence of the human experience in every song.", name: "James Lee", title: "Songwriter" },
        { quote: "I work as a music therapist, and I've seen firsthand the power of music to heal and to uplift. Their music has a transformative quality that touches the hearts of those who listen. It's more than just entertainment; it's a form of therapy.", name: "Olivia Martinez", title: "Music Therapist" },
        { quote: "As an aspiring musician, I look up to them as role models. They've shown me that success in the music industry is possible with hard work, dedication, and above all, authenticity. Their journey inspires me to keep pursuing my passion, no matter the obstacles.", name: "William Johnson", title: "Aspiring Musician" }
      
      

]
function MusicSchoolTestimonial() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicSchoolTestimonial
