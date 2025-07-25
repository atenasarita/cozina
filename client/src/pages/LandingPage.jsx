import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; 
import { motion, useScroll, useTransform } from 'framer-motion';

import FeatureCard from '../components/FeatureCard.jsx';
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

        <header className="sticky top-0 z-50 bg-cozina-cream shadow-sm">
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

      

      <main className="relative z-10 flex flex-col items-center px-8 py-16">

        <motion.img
          src={Cookies}
          style={{ y: ScrollingRate1 }}
          alt="Cookies"
          className="absolute w-[225px] left-[50px] z-0"
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
          className="absolute top-[25px] w-[180px] right-[-40px] z-0 rotate-45"
        />

        <motion.img
          src={Fries}
          style={{ y: ScrollingRate1 }}
          alt="Fries"
          className="absolute top-[370px] w-[150px] right-[160px] z-0"
        />

        <motion.img
          src={Carrots}
          style={{ y: ScrollingRate2 }}
          alt="Carrots"
          className="absolute top-[870px] w-[220px] left-[-30px] z-0"
        />

        <motion.img
          src={Waffles}
          style={{ y: ScrollingRate3 }}
          alt="Waffles"
          className="absolute top-[600px] w-[270px] left-[300px] z-0"
        />

        <motion.img
          src={Tomatoes}
          style={{ y: ScrollingRate3 }}
          alt="Tomatoes"
          className="absolute top-[1100px] w-[200px] right-[100px] z-0"
        />

        <motion.img
          src={Pizza}
          style={{ y: ScrollingRate3 }}
          alt="Pizza"
          className="absolute top-[1450px] w-[220px] left-[100px] z-0"
        />

        <motion.img
          src={Shortcake}
          style={{ y: ScrollingRate2 }}
          alt="Shortcake"
          className="absolute top-[1350px] w-[220px] right-[200px] z-0"
        />

        <motion.img
          src={GarlicBread}
          style={{ y: ScrollingRate3 }}
          alt="Garlic Bread"
          className="absolute top-[1900px] w-[220px] left-[-30px] z-0"
        />

        <motion.img
          src={LemonPie}
          style={{ y: ScrollingRate1 }}
          alt="Lemon Pie"
          className="absolute top-[1600px] w-[220px] right-[-10px] z-0"
        />

        <motion.img
          src={Jam}
          style={{ y: ScrollingRate2 }}
          alt="Jam"
          className="absolute top-[2130px] w-[200px] left-[100px] z-0"
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
          
          <button ref={contactBtnRef} 
          className={`mt-14 mb-32 font-cozina-body px-16 py-3 bg-cozina-lightpink text-cozina-maroon text-lg rounded-full hover:bg-white/40 transition-all duration-300 
                    ${contactBtnInView ? 'opacity-100 translate-x-0 ' : 'opacity-0 translate-x-20'}`}>
              Contact Me!
          </button>
        

        {/* Call to Action  */}
        <div 
            ref={ctaRef}
            className={`flex flex-col items-center transition-all duration-1000 ease-out 
                        ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h2 className="font-cozina-heading text-3xl mb-12 text-cozina-maroon w-[900px] text-center mx-auto">Join Cozina and start your journey to mastering cooking, one recipe at a time!</h2>
            <Link to="/" className="font-cozina-heading text-2xl text-cozina-darkpink mb-48 hover:underline">
                 Sign up here to access all features!
            </Link>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;