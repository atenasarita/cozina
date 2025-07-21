import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard.jsx';

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
      title: "Quick & easy",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit vel, nunc tellus ornare viverra aptent augue.",
      delay: 300
    }
  ];

  return (
    

    <div className="relative min-h-screen bg-cozina-cream">

        <header className="sticky top-0 z-50 bg-cozina-cream shadow-sm">
            <div className="relative flex justify-between items-center px-16 py-10"> 
                <Link to="/" className="font-cozina-heading text-4xl text-gray-900">
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

      <main className="relative z-10 flex flex-col items-center justify-center px-8 py-16">

        <div className="text-center mb-16">

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

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <section className="mt-24 text-center px-4 max-w-5xl mx-auto">
        <h2 className="font-cozina-heading text-3xl mb-8 text-cozina-black">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 font-cozina-body text-lg text-gray-800">
            <div>
            <h3 className="text-xl font-semibold mb-2">1. Tell us what you have</h3>
            <p>Add ingredients, dietary needs, or a budget range.</p>
            </div>
            <div>
            <h3 className="text-xl font-semibold mb-2">2. Get smart suggestions</h3>
            <p>We suggest recipes that match your input — no waste, no stress.</p>
            </div>
            <div>
            <h3 className="text-xl font-semibold mb-2">3. Start cooking</h3>
            <p>Quick, student-friendly recipes, curated just for you.</p>
            </div>
        </div>
        </section>


      </main>
    </div>
  );
};

export default LandingPage;
