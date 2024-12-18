import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Intersection Observers for different sections
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div id="About-Us" className="m-auto max-w-7xl font-jost px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div
        ref={titleRef}
        className={`text-center py-5 mt-5 transition-all duration-1000 ${
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-8xl font-bold text-white border-b pb-5 border-gray-700">About Us</h1>
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className={`text-center py-5 transition-all duration-1000 ${
          textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xl sm:text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 m-auto tracking-wide leading-relaxed text-sky-500">
          Shaping spaces with precision and creativity. Highlighting the beauty
          of glass through artful engraving, we redefine elegance in every
          design.
        </p>
      </div>

      {/* Image and Description Section */}
      <div
        ref={imageRef}
        className={`flex flex-col lg:flex-row py-10 mb-20 transition-all duration-1000 ${
          imageInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image */}
        <div className="flex justify-center lg:w-1/2">
          <img className="w-10/12 rounded-lg" src="./img/bg-h1.jpg" alt="Glass engraving" />
        </div>

        {/* Description */}
        <div className="text-left lg:w-1/2 px-4 md:px-10 mt-6 lg:mt-0">
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
