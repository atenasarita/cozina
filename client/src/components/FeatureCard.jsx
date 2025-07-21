import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, link, delay = 0 }) => {
  const cardContent = (
    <div 
      className={`bg-cozina-darkpink text-cozina-lightpink p-10 rounded-[50px] transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-cozina-heading mb-2 group-hover:scale-105 transition-transform">
        {title}
      </h3>
      {description && <p className="text-lg opacity-90">{description}</p>}
      
    </div>
  );

  return link ? <Link to={link}>{cardContent}</Link> : cardContent;
};

export default FeatureCard;
