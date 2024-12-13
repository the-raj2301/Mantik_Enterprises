import React from "react";

const About = () => {
  return (
    <div className="m-auto max-w-7xl font-jost px-4 sm:px-6 lg:px-8">
      <div className="text-center py-5 mt-5">
        <h1 className="text-4xl md:text-8xl font-bold text-white">
          About Us
        </h1>
        {/* <div className="h-1 m-auto bg-gray-400 rounded mt-2 w-1/3 transition-all duration-300 hover:w-1/2"></div> */}
      </div>

      <div className="text-center py-5">
        <p className="text-xl sm:text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 m-auto tracking-wide leading-relaxed text-sky-500">
          Shaping spaces with precision and creativity. Highlighting the beauty
          of glass through artful engraving, we redefine elegance in every
          design.
        </p>
      </div>

      <div className="flex flex-col md:flex-row py-10 mb-20">
        <div className="flex justify-center md:w-1/2">
          <img className="w-10/12 rounded-lg" src="./img/bg-h1.jpg" alt="Glass engraving" />
        </div>
        <div className="text-left md:w-1/2 px-4 md:px-10 mt-6 md:mt-0">
          <p className="text-lg tracking-wide leading-normal">
            Welcome to <strong>MANTIK ENTERPRISES</strong>, your trusted
            destination for premium glass solutions and expert engraving
            services. Located in the heart of Mumbai, we specialize in offering
            high-quality glass products and innovative designs tailored to meet
            your needs.
            <br />
            <br />
            At <strong>MANTIK ENTERPRISES</strong>, we provide an extensive
            range of glass services, including precision cutting, custom
            installations, and specialized V-groove engraving, which adds a
            touch of sophistication to any space. Our product portfolio
            includes:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Glass Engraving</li>
              <li>Clear Float Glass</li>
              <li>Toughened Glass</li>
              <li>Extra Clear Glass</li>
              <li>Fabric Laminated Glass</li>
              <li>And more...</li>
            </ul>
            <br />
            <p>
            With a commitment to craftsmanship, attention to detail, and
            exceptional customer service, we work closely with architects,
            designers, and homeowners to bring their visions to life. Whether
            it’s enhancing interiors with decorative glass or providing durable,
            functional solutions, we deliver unmatched quality every time.
            <br />
            <br />
            Discover how we can transform your spaces with glass. Contact us
            today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
