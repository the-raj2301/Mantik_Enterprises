import React from 'react';
import ProductCarousel from './ProductCarousel';

const Card = ({ image, title, subtitle }) => {
  return (
    <div className='w-full bg-[#252526] p-6 rounded-lg font-jost 
      hover:shadow-[0_4px_20px_#e47025b0] hover:scale-105 
      transition-transform duration-300'>
      <img className='w-full md:h-64 object-cover rounded-md' src={image} alt={title} loading='lazy'/>
      <h1 className='text-2xl font-bold pt-4 text-white tracking-wide'>{title}</h1>
      <h2 className='text-lg text-gray-400'>{subtitle}</h2>
    </div>
  );
};

const Products = () => {
  return (
    <div id='Products' className="max-w-7xl m-auto font-jost pt-6">

                {/* Title Section */}
        <div
            className="text-center p-5 transition-all duration-1000"
        >
            <h1 className="text-4xl md:text-8xl font-bold text-white border-b pb-5 border-gray-700">Products</h1>
        </div>
        <div className="text-left px-10 py-2 text-2xl"><h1>Photo Gallery</h1></div>
        <div className="px-10"><ProductCarousel/></div>
        <div className="text-left px-10 pt-5 text-2xl"><h1>Wall Panelling</h1></div>

        <div className='p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

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
            subtitle="Fluted Engraving"
            />
            <Card 
            image="./engraving/MICRO ENGRAVING.png"
            title="Engraved Glass"
            subtitle="Micro Engraving"
            />
        <Card 
            image="./engraving/MULTI ENGRAVED TOUGHEN GLASS.png"
            title="Engraved Glass"
            subtitle="Multi Engraving"
        />
        <Card 
            image="./engraving/ETCHED GLASS.png"
            title="Etched Glass"
            subtitle="Texured Frost"
        />
        <Card 
            image="./engraving/STAR ENGRAVING.png"
            title="Brown Mirror"
            subtitle="Star Engraving"
        />
        <Card 
            image="./engraving/COLOR MIRROR.jpg"
            title="Colored Mirror"
            subtitle="5MM Mirror Beveled Edges"
        />
        </div>
    </div>
  );
};

export default Products;
