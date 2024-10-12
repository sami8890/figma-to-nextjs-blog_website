// "use client";
// import Image from "next/image";
// const Section = () => {
//   return (
//     <main>
//       <div className="flex justify-center items-center text-neutral-700 text-3xl font-bold pt-16">
//         Our Clients
//       </div>
//       <p className="flex justify-center items-center pt-3">
//         Lorem ipsum dolor sit amet
//       </p>
//       <div className="flex flex-wrap justify-center items-center pt-10 gap-20">
//         {/* Add your logo images here */}
//         <Image
//           src="/logo1.svg"
//           alt="Client 1"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//         <Image
//           src="/logo2.svg"
//           alt="Client 2"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//         <Image
//           src="/logo3.svg"
//           alt="Client 3"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//         <Image
//           src="/logo4.svg"
//           alt="Client 4"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//         <Image
//           src="/logo5.svg"
//           alt="Client 5"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//         <Image
//           src="/logo6.svg"
//           alt="Client 6"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//         <Image
//           src="/logo6.svg"
//           alt="Client 6 copy"
//           width={50}
//           height={50}
//           className="object-cover pb-10"
//         />
//       </div>

//       {/* Parent div */}
//       <div className="flex items-center justify-center font-semibold text-neutral-700 text-2xl pt-8">
//         Managed your entirely community
//       </div>
//       <div className="flex justify-center font-semibold items-center text-neutral-700 text-2xl pt-1">
//         in a single system
//       </div>
//       <p className="flex justify-center items-center pt-1 font-sans">
//         Who is nextcent suitable for.
//       </p>

//       <div className="flex flex-col justify-center items-center xl:flex-row py-10 px-4 font-sans font-semibold text-neutral-700 gap-24">
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/membership.png"}
//             alt="image"
//             width={55}
//             height={55}
//             className="object-cover pb-2"
//           />
//           <h2 className="text-2xl text-center">
//             MemberShip <br /> Organization
//           </h2>
//           <p className="text-center pt-2">
//             Lorem ipsum dolor sit amet,
//             <br />
//             consectetur adipisicing elit.
//             <br />
//             Iusto, minima.
//           </p>
//         </div>

//         <div className="flex flex-col items-center">
//           <Image
//             src={"/home.png"}
//             alt="image"
//             width={55}
//             height={55}
//             className="object-cover pb-2"
//           />
//           <h2 className="text-2xl text-center">
//             National <br /> Association
//           </h2>
//           <p className="text-center pt-2">
//             Lorem ipsum dolor sit amet,
//             <br />
//             consectetur adipisicing elit.
//             <br />
//             Temporibus ducimus.
//           </p>
//         </div>

//         <div className="flex flex-col items-center mt-11">
//           <Image
//             src={"/realsta.png"}
//             alt="image"
//             width={55}
//             height={55}
//             className="object-cover pb-2"
//           />
//           <h2 className="text-2xl text-center">
//             Clubs And <br /> Groups
//           </h2>
//           <p className="text-center pt-2">
//             Lorem ipsum dolor sit amet,
//             <br />
//             consectetur adipisicing elit.
//             <br />
//             Voluptatibus eos.
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-between ">
//         <Image
//           src="/login.png"
//           alt="Desktop and smartphone app development"
//           width={600}
//           height={600}
//         />
//         <div className="">
//           <div className="text-3xl text-neutral-700 pt-6 pl-9 pb-1 px-10  font-semibold">
//             The Unseen of spending Three  <br />years at pixelgrade
//           </div>
//           <p className=" pt-2 pr-16 pl-9 font-serif ">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
//             maxime delectus beatae minus quo earum, aliquam atque cum eligendi
//             debitis, iusto deserunt dolor eos maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem, obcaecati similique maiores nobis vero officia, a perferendis, excepturi nihil modi voluptatum mollitia!
//           </p>
//           <div className="px-10">
//             <button className="flex justify-center items-center text-lg md:text-xl xl:text-2xl bg-green-600 h-12 md:h-[7vh] xl:h-[8vh] w-36 md:w-[10vw] xl:w-[12vw] rounded-sm text-white hover:bg-green-700 mt-6 mx-auto md:mx-0">
//               Get started
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };


// export default Section;
"use client";
import Image from "next/image";

const Section = () => {
  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Title Section */}
      <div className="text-center text-neutral-700 text-2xl md:text-3xl font-bold pt-16">
        Our Clients
      </div>
      <p className="text-center text-sm md:text-base pt-3">
        Lorem ipsum dolor sit amet
      </p>

      {/* Client Logos */}
      <div className="flex flex-wrap justify-center items-center pt-10 gap-8 md:gap-16 lg:gap-20">
        {["/logo1.svg", "/logo2.svg", "/logo3.svg", "/logo4.svg", "/logo5.svg", "/logo6.svg"].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            width={50}
            height={50}
            className="object-cover pb-6 md:pb-10"
          />
        ))}
      </div>

      {/* Managed your community Section */}
      <div className="text-center font-semibold text-neutral-700 text-lg md:text-2xl pt-8">
        Manage your entire community
      </div>
      <div className="text-center font-semibold text-neutral-700 text-lg md:text-2xl pt-1">
        in a single system
      </div>
      <p className="text-center text-sm md:text-base pt-1">
        Who is Nextcent suitable for?
      </p>

      {/* Features Section */}
      <div className="flex flex-col xl:flex-row justify-center items-center py-10 gap-12 md:gap-16 lg:gap-24 px-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src={"/membership.png"}
            alt="Membership"
            width={55}
            height={55}
            className="object-cover pb-2"
          />
          <h2 className="text-xl md:text-2xl">
            MemberShip <br /> Organization
          </h2>
          <p className="text-sm md:text-base pt-2">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Iusto, minima.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src={"/home.png"}
            alt="National Association"
            width={55}
            height={55}
            className="object-cover pb-2"
          />
          <h2 className="text-xl md:text-2xl">
            National <br /> Association
          </h2>
          <p className="text-sm md:text-base pt-2">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Temporibus ducimus.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src={"/realsta.png"}
            alt="Clubs and Groups"
            width={55}
            height={55}
            className="object-cover pb-2"
          />
          <h2 className="text-xl md:text-2xl">
            Clubs And <br /> Groups
          </h2>
          <p className="text-sm md:text-base pt-2">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Voluptatibus eos.
          </p>
        </div>
      </div>

      {/* Login Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 pt-8">
        <Image
          src="/login.png"
          alt="Desktop and smartphone app development"
          width={500}
          height={500}
          className="object-cover max-w-full"
        />
        <div className="w-full lg:w-1/2">
          <div className="text-2xl md:text-3xl text-neutral-700 pt-6 font-semibold px-4 lg:px-0">
            The Unseen of spending Three <br /> years at Pixelgrade
          </div>
          <p className="pt-2 text-sm md:text-base font-serif px-4 lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            maxime delectus beatae minus quo earum, aliquam atque cum eligendi
            debitis, iusto deserunt dolor eos maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem, obcaecati similique maiores nobis vero officia, a perferendis, excepturi nihil modi voluptatum mollitia!
          </p>
          {/* Centered Button on Small Devices */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="text-sm md:text-lg xl:text-xl bg-green-600 h-10 md:h-12 xl:h-14 w-28 md:w-32 xl:w-40 rounded-sm text-white hover:bg-green-700">
              Get started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section;
