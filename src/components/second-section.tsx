"use client";
import Image from "next/image";
const Section = () => {
  return (
    <main>
      <div className="flex justify-center items-center text-neutral-700 text-3xl font-bold pt-16">
        Our Clients
      </div>
      <p className="flex justify-center items-center pt-3">
        Lorem ipsum dolor sit amet
      </p>
      <div className="flex flex-wrap justify-center items-center pt-10 gap-20">
        {/* Add your logo images here */}
        <Image
          src="/logo1.svg"
          alt="Client 1"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
        <Image
          src="/logo2.svg"
          alt="Client 2"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
        <Image
          src="/logo3.svg"
          alt="Client 3"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
        <Image
          src="/logo4.svg"
          alt="Client 4"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
        <Image
          src="/logo5.svg"
          alt="Client 5"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
        <Image
          src="/logo6.svg"
          alt="Client 6"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
        <Image
          src="/logo6.svg"
          alt="Client 6 copy"
          width={50}
          height={50}
          className="object-cover pb-10"
        />
      </div>

      {/* Parent div */}
      <div className="flex items-center justify-center font-semibold text-neutral-700 text-2xl pt-8">
        Managed your entirely community
      </div>
      <div className="flex justify-center font-semibold items-center text-neutral-700 text-2xl pt-1">
        in a single system
      </div>
      <p className="flex justify-center items-center pt-1 font-sans">
        Who is nextcent suitable for.
      </p>

      <div className="flex flex-col justify-center items-center xl:flex-row py-10 px-4 font-sans font-semibold text-neutral-700 gap-24">
        <div className="flex flex-col items-center">
          <Image
            src={"/membership.png"}
            alt="image"
            width={55}
            height={55}
            className="object-cover pb-2"
          />
          <h2 className="text-2xl text-center">
            MemberShip <br /> Organization
          </h2>
          <p className="text-center pt-2">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Iusto, minima.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={"/home.png"}
            alt="image"
            width={55}
            height={55}
            className="object-cover pb-2"
          />
          <h2 className="text-2xl text-center">
            National <br /> Association
          </h2>
          <p className="text-center pt-2">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Temporibus ducimus.
          </p>
        </div>

        <div className="flex flex-col items-center mt-11">
          <Image
            src={"/realsta.png"}
            alt="image"
            width={55}
            height={55}
            className="object-cover pb-2"
          />
          <h2 className="text-2xl text-center">
            Clubs And <br /> Groups
          </h2>
          <p className="text-center pt-2">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Voluptatibus eos.
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <Image
          src="/login.png"
          alt="Desktop and smartphone app development"
          width={600}
          height={600}
        />
        <div className="">
          <div className="text-3xl text-neutral-700 pt-6 pl-9 pb-1 px-10  font-semibold">
            The Unseen of spending Three  <br />years at pixelgrade
          </div>
          <p className=" pt-2 pr-16 pl-9 font-serif ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            maxime delectus beatae minus quo earum, aliquam atque cum eligendi
            debitis, iusto deserunt dolor eos maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem, obcaecati similique maiores nobis vero officia, a perferendis, excepturi nihil modi voluptatum mollitia!
          </p>
          <div className="px-10">
            <button className="flex justify-center items-center text-lg md:text-xl xl:text-2xl bg-green-600 h-12 md:h-[7vh] xl:h-[8vh] w-36 md:w-[10vw] xl:w-[12vw] rounded-sm text-white hover:bg-green-700 mt-6 mx-auto md:mx-0">
              Get started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section;
