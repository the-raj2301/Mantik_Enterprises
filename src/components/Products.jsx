import React from 'react';

const Card = ({ image, title, subtitle }) => {
  return (
    <div className='m-auto w-72 bg-[#252526] p-6 rounded-lg font-jost 
      hover:shadow-[0_4px_20px_rgba(3,196,255,0.3)] hover:scale-105 
      transition-transform duration-300'>
      <img className=' h-72 object-cover' src={image} alt={title} />
      <h1 className='text-2xl font-bold pt-4 text-white tracking-wide'>{title}</h1>
      <h2 className='text-lg text-gray-400'>{subtitle}</h2>
    </div>
  );
};

const Products = () => {
  return (
    <div className="max-w-7xl m-auto pt-10">

                {/* Title Section */}
        <div
            className="text-center py-5 mt-5 transition-all duration-1000"
        >
            <h1 className="text-4xl md:text-8xl font-bold text-white border-b pb-5 border-gray-700">Products</h1>
        </div>

        <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

            {/* Card Section */}

        <Card 
            image="./engraving/4V_ENGRAVING.png"
            title="Engraved Mirror"
            subtitle="4V Engraving"
        />
        <Card 
            image="./engraving/ENGRAVED MIRROR.png"
            title="Engraved Mirror"
            subtitle="6MM Engraving"
        />
            <Card 
            image="./engraving/FLUTED ENGRAVING.png"
            title="Engraved Glass"
            subtitle="4V Engraving"
            />
            <Card 
            image="./engraving/MICRO ENGRAVING.png"
            title="Engraved Glass"
            subtitle="4V Engraving"
            />
        <Card 
            image="./engraving/MULTI ENGRAVED TOUGHEN GLASS.png"
            title="Engraved Glass"
            subtitle="4V Engraving"
        />
        <Card 
            image="./engraving/ETCHED GLASS.png"
            title="Engraved Glass"
            subtitle="4V Engraving"
        />
        <Card 
            image="./engraving/STAR ENGRAVING.png"
            title="Engraved Glass"
            subtitle="4V Engraving"
        />
        <Card 
            image="./engraving/COLOR MIRROR.jpg"
            title="Engraved Glass"
            subtitle="4V Engraving"
        />
        </div>
    </div>
  );
};

export default Products;
