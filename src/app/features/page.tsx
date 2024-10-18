'use client';

import React from "react"; // Import React
import Image from "next/image"; // Ensure Image is imported
import Link from "next/link"; // Import Link for navigation

const Features = () => {
  return (
    <>
      {/* First Section */}
      <div className="px-4 sm:px-8 md:px-16 md:pb-28 lg:px-24 xl:px-32 pb-20 pt-20 bg-gray-100 mt-14">
        <div className="flex flex-wrap justify-end items-end">
          {/* Right Section: Heading and Text */}
          <div className="w-full md:w-1/2 pb-6">
            <div className="text-3xl font-bold pb-1 font-sans">
              Helping a local
            </div>
            <div className="text-3xl text-[#33a01d] font-bold">
              Business reinvent itself
            </div>
            <p className="text-gray-500">
              We have been dedicated to supporting small businesses like yours, helping them grow by providing innovative solutions that enhance efficiency and visibility in a competitive market.
            </p>
          </div>

          {/* Left Section: Two rows with two divs each */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-start gap-10">
            {/* Row 1 */}
            <div className="w-[45%] flex items-center gap-4 pb-4">
              <Image
                src="/second/first.png" // Replace with the actual image path
                alt="Icon 1"
                width={40}
                height={40}
              />
              <div>
                <div className="text-2xl font-bold">2,245,341</div>
                <div className="text-gray-500">Members</div>
              </div>
            </div>

            <div className="w-[45%] flex items-center gap-4 pb-4">
              <Image
                src="/second/second.png"
                alt="Icon 2"
                width={40}
                height={40}
              />
              <div>
                <div className="text-2xl font-bold">46,328</div>
                <div className="text-gray-500">Clubs</div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-[45%] flex items-center gap-4 pb-4">
              <Image
                src="/second/third.png" // Replace with the actual image path
                alt="Icon 3"
                width={40}
                height={40}
              />
              <div>
                <div className="text-2xl font-bold">828,867</div>
                <div className="text-gray-500">Event Bookings</div>
              </div>
            </div>

            <div className="w-[45%] flex items-center gap-4 pb-4">
              <Image
                src="/second/fourth.png" // Replace with the actual image path
                alt="Icon 4"
                width={40}
                height={40}
              />
              <div>
                <div className="text-2xl font-bold">1,926,436</div>
                <div className="text-gray-500">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <section className="bg-gray-100 py-10 pb-20">
        <div className="container mx-auto px-4 md:flex justify-between items-center">
          {/* Left Section: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <Image
              src="/signup.png" // Replace this with the actual image path
              alt="Business Image"
              width={500} // Adjust width as necessary
              height={300} // Adjust height as necessary
              className="object-cover" // Ensures the image covers the area properly
            />
          </div>

          {/* Right Section: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800">
              How to design your site footer like we did
            </h2>
            <p className="text-gray-600 mt-2">
              Designing an effective site footer helps in providing key information to your users while maintaining a clean, organized layout. Our footer design serves as a guide to create a lasting impact on your visitors.
            </p>
            <button className="text-sm items-center md:text-lg xl:text-xl bg-green-600 h-10 md:h-12 xl:h-14 w-28 md:w-32 xl:w-40 rounded-sm text-white hover:bg-green-700 mt-6">
              Learn more
              
            </button>
          </div>
        </div>
      </section>

      {/* Third section */}
      <div className="bg-gray-100 py-10 pb-20 mt-20 mb-10">
        <div className="container mx-auto px-4 md:flex justify-between items-center">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <Image
              src="/logo.png"
              alt="Business Image"
              width={300} // Adjust width as necessary
              height={100} // Adjust height as necessary
              className="object-cover"
            />
          </div>

          {/* Right Section: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-600 mt-0">
              Our clients consistently rely on us for innovative solutions that help them reach their full potential. From small businesses to large enterprises, we specialize in giving your brand the recognition it deserves.
            </p>
            <h2 className="text-3xl font-bold text-green-600 mt-4 mb-4">
              Tim Smith
            </h2>
            <p>
              CEO, British Dragon Boat Racing Association. With a passion for growth, we help businesses navigate their way to success in an ever-changing market.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row pb-20 sm:px-4 md:px-8 gap-6 bg-gray-100 ">
        {[
          {
            src: "/man picture.jpeg",
            heading: "Creating streamline",
            text: "Safeguarding process with one rain",
            link: "/read-more-1",
          },
          {
            src: "/lapto.jpg",
            heading: "What are you safeguarding",
            text: "Helping your business stay ahead.",
            link: "/read-more-2",
          },
          {
            src: "/laptopg.jpg",
            heading: "Revamping the membership",
            text: "Model with trithlon Australia membership",
            link: "/read-more-3",
          },
        ].map((image, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[90%] md:w-[32%] lg:w-[30%] xl:w-[30%] flex flex-col items-center mx-auto"
          >
            <Image
              src={image.src}
              alt={image.heading}
              width={400}
              height={500}
              className="object-cover rounded-lg w-full h-[300px]"
            />
            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-3 mx-auto bg-white opacity-90 z-10 rounded-lg flex flex-col justify-center items-center w-[90%] h-20 sm:h-24 md:h-28 lg:h-28 xl:h-28">
              <h2 className="text-sm sm:text-base md:text-lg mt-1 text-neutral-700 text-center">
                {image.heading}
              </h2>
              <p className="text-sm sm:text-base md:text-lg mt-1 text-neutral-700 text-center">
                {image.text}
              </p>
              {/* Link with "Read more" and arrow */}
              <Link 
                href={image.link}
                className="text-green-600 hover:underline flex items-center gap-2 mt-2"
              >
                <span className="font-bold text-xl">Read more</span>
                <span className="font-bold text-xl">→</span> {/* Arrow icon */}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*  */}
     <div className="text-center font-semibold text-neutral-700 text-lg md:text-2xl pt-8 pb-20 font-serif"> pellentesteque suscipit.</div>
    </>
  );
};

export default Features;


