import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; 
import { motion, useScroll, useTransform } from 'framer-motion';


import FeatureCard from '../components/FeatureCard.jsx';
import Popup from '../components/Popup.jsx';

import AboutImage from '../assets/about-pic.png';
import Cookies from '../assets/cookies.png';
import Onions from '../assets/onions.png';
import Sandwich from '../assets/sandwich.png';
import Fries from '../assets/fries.png';
import Carrots from '../assets/carrots.png';
import Waffles from '../assets/waffles.png';
import Tomatoes from '../assets/tomatoes.png';
import Pizza from '../assets/pizza.png';
import Shortcake from '../assets/shortcake.png';
import GarlicBread from '../assets/garlic-bread.png';
import LemonPie from '../assets/lemon-pie.png';
import Jam from '../assets/jam.png';



const LandingPage = () => {
  const features = [
    {
      title: "Filter by ingredients, budget, or dietary needs",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel, nunc tellus ornare viverra aptent augue.",
      delay: 0
    },
    {
      title: "Pantry-aware suggestions",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel, nunc tellus ornare viverra aptent augue.",
      delay: 100
    },
    {
      title: "Smart suggestions",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel, nunc tellus ornare viverra aptent augue.",
      delay: 200
    },
    {
      title: "Quick & easy recipes",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel, nunc tellus ornare viverra aptent augue.",
      delay: 300
    }
  ];

  const [popupVisible, setPopupVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpenContactForm = () => {
  setPopupVisible(false); 
  setFormVisible(true); 
};

  // intersection observer refs for animations per section
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,    // 10% visible to trigger
  });

  const [howItWorksRef, howItWorksInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyCozinaRef, whyCozinaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutImageRef, aboutImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutTextRef, aboutTextInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  const [contactBtnRef, contactBtnInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const { scrollYProgress } = useScroll();

  const ScrollingRate1 = useTransform(
      scrollYProgress,
      [0, 1], 
      ['0vh', '150vh'] 
  );

  const ScrollingRate2 = useTransform(
      scrollYProgress,
      [0, 1], 
      ['0vh', '110vh'] 
  );

  const ScrollingRate3 = useTransform(
      scrollYProgress,
      [0, 1], 
      ['0vh', '80vh'] 
  );

  return (
    <div className="relative min-h-screen bg-cozina-cream">

      <main className="relative z-10 flex flex-col items-center h-vhiewport overflow-hidden">

        <header className="sticky top-0 z-50 bg-cozina-cream shadow-sm w-full">
            <div className="relative flex justify-between items-center px-16 py-10"> 
                <Link to="/" className="font-cozina-heading text-4xl text-cozina-maroon">
                    Cozina
                </Link>
                <div className="flex gap-4">
                    <button className="font-cozina-body px-6 py-3 border-2 border-black text-gray-800 rounded-full font-medium w-[140px] hover:bg-white/40 transition-all duration-300">
                        Sign Up
                    </button>
                    <button className="font-cozina-body px-6 py-3 bg-cozina-black text-white rounded-full font-medium w-[140px] hover:bg-gray-800 transition-all duration-300">
                        Log In
                    </button>
                </div>
            </div>
            <hr className="border-gray-700 my-0" />
        </header>

        <motion.img
          src={Cookies}
          style={{ y: ScrollingRate1 }}
          alt="Cookies"
          className="top-36 absolute w-[225px] left-[50px] z-0"
        />

        <motion.img
          src={Onions}
          style={{ y: ScrollingRate2 }}
          alt="Onions"
          className="absolute top-[420px] w-[140px] left-[-10px] z-0 rotate-45"
        />

        <motion.img
          src={Sandwich}
          style={{ y: ScrollingRate2 }}
          alt="Sandwich"
          className="absolute top-[150px] w-[180px] right-[-40px] z-0 rotate-45"
        />

        <motion.img
          src={Fries}
          style={{ y: ScrollingRate1 }}
          alt="Fries"
          className="absolute top-[500px] w-[150px] right-[160px] z-0"
        />

        <motion.img
          src={Carrots}
          style={{ y: ScrollingRate2 }}
          alt="Carrots"
          className="absolute top-[950px] w-[220px] left-[-30px] z-0"
        />

        <motion.img
          src={Waffles}
          style={{ y: ScrollingRate3 }}
          alt="Waffles"
          className="absolute top-[700px] w-[270px] left-[300px] z-0"
        />

        <motion.img
          src={Tomatoes}
          style={{ y: ScrollingRate3 }}
          alt="Tomatoes"
          className="absolute top-[1150px] w-[200px] right-[100px] z-0"
        />

        <motion.img
          src={Pizza}
          style={{ y: ScrollingRate1 }}
          alt="Pizza"
          className="absolute top-[1200px] w-[220px] left-[100px] z-0"
        />

        <motion.img
          src={Shortcake}
          style={{ y: ScrollingRate2 }}
          alt="Shortcake"
          className="absolute top-[1300px] w-[220px] right-[200px] z-0"
        />

        <motion.img
          src={GarlicBread}
          style={{ y: ScrollingRate3 }}
          alt="Garlic Bread"
          className="absolute top-[2100px] w-[220px] left-[-30px] z-0"
        />

        <motion.img
          src={LemonPie}
          style={{ y: ScrollingRate1 }}
          alt="Lemon Pie"
          className="absolute top-[1700px] w-[220px] right-[-10px] z-0"
        />

        <motion.img
          src={Jam}
          style={{ y: ScrollingRate2 }}
          alt="Jam"
          className="absolute top-[2200px] w-[180px] left-[150px] z-0"
        />

        {/* hero section (transition) */} 
        <div 
          ref={heroRef} 
          className={`text-center mb-16 transition-all duration-1000 ease-out w-full
                      ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} // Apply transition classes
        >
        
          <h1 className="font-cozina-heading md:text-5xl text-cozina-black mb-[20px] mt-[100px]">
            Comfort food, simplified
          </h1>
          <p className="font-cozina-subheading text-3xl text-cozina-black mb-2 max-w-lg mx-auto">
            filter, personalize, and cook smart —
          </p>
          <p className="font-cozina-subheading text-3xl text-cozina-black mb-[48px] max-w-lg mx-auto">
            built by students, for students.
          </p>
          
          <Link 
            to="/recipes"
            className="inline-flex items-center mb-[20px] px-8 py-4 bg-cozina-black text-cozina-cream text-xl rounded-full font-cozina-body hover:translate-x-1 transition-all duration-300 shadow-lg group"
          > Check out some recipes as guest
            <div className="ml-2 group-hover:translate-x-2 transition-transform">→</div>
          </Link>
        </div>

        {/* Features  */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full transition-opacity duration-700 ease-out 
                      ${heroInView ? 'opacity-100' : 'opacity-0'}`} // Fades in with the hero section
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* How it works  */}
        <section 
          ref={howItWorksRef} 
          className={`mt-[210px] text-center px-4 max-w-6xl mx-auto text-cozina-maroon transition-all duration-1000 ease-out 
                      ${howItWorksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} // Apply transition classes
        >
          <h2 className="font-cozina-heading text-[40px] mb-8 ">How it works</h2>
          <div className="grid md:grid-cols-3 gap-12 font-cozina-body text-lg">
            <div>
              <h3 className="text-2xl font-cozina-subheading font-semibold mb-2">1. Tell us what you have</h3>
              <p className="font-cozina-body">Add ingredients, dietary needs, or a budget range — we’ll take it from there.</p>
            </div>  
            <div>
              <h3 className="text-2xl font-cozina-subheading font-semibold mb-2">2. Get curated recipes</h3>
              <p className="font-cozina-body">Get suggestions based on your pantry. No repeats, no waste. Just smart, personalized picks.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-cozina-subheading font-semibold mb-2">3. Cook & connect</h3>
              <p className="font-cozina-body">Follow steps, leave a comment, share tips, or discover hacks from other students like you.</p>
            </div>
          </div>
        </section>

        {/* Why Cozina Section */}
        <section 
          ref={whyCozinaRef} // Attach ref
          className={`flex mt-[210px] text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ease-out 
                      ${whyCozinaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} // Apply transition classes
        >
          <div className="w-[1100px] h-[600px] bg-cozina-darkgreen mx-auto mb-4 p-[75px] rounded-[50px] flex flex-col text-center">
            <h2 className="font-cozina-heading text-3xl mb-14 text-cozina-neongreen">Why Cozina?</h2>
          <p className="font-cozina-body text-lg text-cozina-neongreen">
            Cozina was born from a simple problem: how do you make real food with limited time, money, and ingredients — and still enjoy it? 
            As students juggling classes, late nights, and tiny kitchens, we wanted something more helpful than just a recipe site. 
            We needed something that *understood* what was in our fridge, how much we could spend, and how tired we were.
          </p>
          <p className="font-cozina-body text-lg text-cozina-neongreen mt-4">
            That’s why we built Cozina — to make everyday cooking more accessible, less wasteful, and a little more joyful. 
            It filters recipes by budget, ingredients, and dietary needs, gives pantry-aware suggestions, and even lets users share tips and comment on what works best for them.
          </p>
          <p className="font-cozina-body text-lg text-cozina-neongreen mt-4">
            At its heart, Cozina is made by students, for students — and anyone who’s ever stared into an empty fridge thinking, “What now?”
          </p>
          </div>
        </section>

        <div className="mt-20 w-20 h-2 bg-cozina-orange mx-auto"/>

        {/* About Me Section */}
        <section 
          ref={aboutRef}
          className={`mt-16 px-4 max-w-5xl mx-auto text-center transition-all duration-1000 ease-out 
                      ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-cozina-heading text-3xl mb-12 text-cozina-orange">Meet the developer</h2>

        </section>

          <div className='flex flex-col md:flex-row items-center md:items-start'>
            <img
              ref={aboutImageRef} 
              src={AboutImage}
              alt="Developer - Atenas"
              className={`w-full max-w-sm md:w-[400px] h-full object-cover mb-8 md:mb-0
                        transition-all duration-1000 ease-out md:mr-4
                        ${aboutImageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} 
            />
          
            <div 
              ref={aboutTextRef} 
              className={`md:ml-16 flex flex-col justify-center w-[550px] font-cozina-body text-xl text-cozina-maroon text-center 
                         transition-all duration-1000 ease-out
                         ${aboutTextInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
              <p>
                Hi! I'm Atenas — a Honduran CS and Technology Engineering Student in Monterrey, Mexico. Besides programming, design and tech, one of my biggest passions is cooking and sharing my recipes with others.
                Food has always been a way for me to connect with friends and family, especially as a student living away from home.
              </p>
              <p className="mt-8">
                I built Cozina to make cooking easier, smarter, and a little more joyful for people like me: students with limited time and ingredients.
              </p>
              <p className="mt-8">
                Whether you're trying to use up pantry leftovers, learn how to cook for yourself, or just find new recipes to try, I hope Cozina helps you feel a little more at home.
              </p>
            </div>

          </div>
          
          <button
          onClick={() => setPopupVisible(true)}
          ref={contactBtnRef}
          className={`border border-cozina-maroon m-8 font-cozina-subheading font-medium px-16 py-3 bg-cozina-yellow text-cozina-maroon text-lg rounded-full hover:bg-cozina-yellow/20 transition-all duration-300
                    ${contactBtnInView ? 'opacity-100 translate-x-0 ' : 'opacity-0 translate-x-20'}`}>
              Contact Me!
          </button>

          <Popup trigger={popupVisible} setTrigger={setPopupVisible}>
            <div className="p-8 flex gap-4 flex-col">
              <h2 className="font-cozina-heading text-2xl mb-6 text-cozina-maroon flex justify-center">Get in touch!</h2>

            {/* Email Card */}
            <div className="group flex items-center p-5 border-2 border-cozina-maroon rounded-2xl hover:border-cozina-maroon hover:bg-cozina-cream/30 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg"
              onClick={() => {
              navigator.clipboard.writeText("atenaslucia23@gmail.com")
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)}}>
              <div className="bg-cozina-cream p-4 rounded-xl mr-4 group-hover:bg-cozina-maroon/10 transition-all duration-300"> 
                <svg fill="currentColor" width="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="text-cozina-maroon">
                  <path d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"/>
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-cozina-maroon text-lg mb-1">Email</h3>
                <p className="text-sm text-gray-600">Click to copy my email to clipboard</p>
              </div>

              <div className="text-cozina-maroon group-hover:translate-x-1 transition-transform duration-300">
                {copied ? (<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                              <g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#4F060B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                            </svg>): 
                          (<svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z" fill="#4F060B"/> </g>
                            </svg>) }
              </div>
            </div>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/atenas-lucía-arita-garcía-430331294" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-5 border-2 border-cozina-maroon rounded-2xl hover:border-blue-900 hover:bg-blue-200/30 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg">
              <div className="bg-cozina-cream p-4 rounded-xl mr-4 group-hover:bg-blue-600/20 transition-all duration-300"> 
                <svg fill="currentColor" width="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                  <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-cozina-maroon text-lg mb-1">LinkedIn</h3>
                <p className="text-sm text-gray-600">Connect professionally</p>
              </div>
              <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/atenasarita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center p-5 border-2 border-cozina-maroon rounded-2xl hover:border-gray-600 hover:bg-gray-50/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="bg-cozina-cream p-4 rounded-xl mr-4 group-hover:bg-gray-100 transition-all duration-300"> 
                <svg width="24" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="text-gray-800">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                      <g transform="translate(56.000000, 160.000000)">
                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-cozina-maroon text-lg mb-1">GitHub</h3>
                <p className="text-sm text-gray-600">View my projects</p>
              </div>
              <div className="text-gray-600 group-hover:translate-x-1 transition-transform duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </a>

            {/* Contact Form Option */}
            <div 
            onClick={handleOpenContactForm}

            className="group flex items-center p-5 border-2 border-cozina-maroon rounded-2xl hover:border-cozina-yellow/80 hover:bg-cozina-yellow/10 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg">
              <div className="bg-cozina-cream p-4 rounded-xl mr-4 group-hover:bg-cozina-yellow/60 transition-all duration-300"> 
                <svg fill="currentColor" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 219.376 219.376" className="text-cozina-maroon">
                  <path d="M127.518,0H40.63c-6.617,0-12,5.383-12,12v195.376c0,6.617,5.383,12,12,12h138.117c6.617,0,12-5.383,12-12V59.227
                    c0-3.204-1.248-6.217-3.514-8.484l-51.364-47.36C133.619,1.2,130.661,0,127.518,0z M175.747,204.376H43.63V15h71.768v40.236
                    c0,8.885,7.225,16.114,16.105,16.114h44.244V204.376z M131.503,56.35c-0.609,0-1.105-0.5-1.105-1.114v-31.58l34.968,32.693H131.503z
                    M65.499,97.805c-5.14,0-9.321,4.182-9.321,9.321c0,5.14,4.182,9.321,9.321,9.321c5.14,0,9.321-4.182,9.321-9.321
                    C74.82,101.987,70.638,97.805,65.499,97.805z M82.499,99.627h79.5v15h-79.5V99.627z M65.499,127.805
                    c-5.14,0-9.321,4.182-9.321,9.321s4.182,9.321,9.321,9.321c5.14,0,9.321-4.182,9.321-9.321S70.638,127.805,65.499,127.805z
                    M82.499,129.626h79.5v15h-79.5V129.626z M65.499,157.805c-5.14,0-9.321,4.182-9.321,9.321s4.182,9.321,9.321,9.321
                    c5.14,0,9.321-4.182,9.321-9.321S70.638,157.805,65.499,157.805z M82.499,159.626h79.5v15h-79.5V159.626z"/>
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-cozina-maroon text-lg mb-1">Send a Message</h3>
                <p className="text-sm text-gray-600">Quick contact form</p>
              </div>
              <div className="text-cozina-maroon group-hover:translate-x-1 transition-transform duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>

            {copied && <div className="mt-6 p-4 rounded-xl text-center transition-all duration-300 bg-cozina-darkgreen text-cozina-neongreen">
              <div className="flex items-center justify-center gap-2">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Email copied to clipboard!
              </div>
            </div>}
          </div>
        </Popup>

        <Popup trigger={formVisible} setTrigger={setFormVisible}>
                this is a contact form placeholder.
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border border-cozina-maroon rounded-lg focus:outline-none focus:ring-2 focus:ring-cozina-maroon/50"
                  />
                </form>
          </Popup>

        {/* Call to Action  */}
        <div 
            ref={ctaRef}
            className={`flex flex-col items-center transition-all duration-1000 ease-out py-16 px-4 m-16
                        ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="font-cozina-heading text-3xl mb-8 text-cozina-maroon max-w-4xl text-center mx-auto leading-relaxed">
                Join Cozina and start your journey to mastering cooking, one recipe at a time!
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 max-w-2xl text-center">
                Get access to personalized recipes, cooking tips, and a community of food lovers.
            </p>
            
            <Link 
                to="/" 
                className="font-cozina-heading text-xl bg-cozina-darkpink text-white px-8 py-4 rounded-full 
                          hover:bg-cozina-maroon transition-colors duration-300 shadow-lg hover:shadow-xl 
                          transform"
            >
                Start Cooking Today
            </Link>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;