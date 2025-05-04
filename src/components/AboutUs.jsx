import Image from "next/image";
import food from "../../public/Food/food-order.jpg";

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-900 text-white">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 relative">
        <Image
          src={food}
          alt="Couple relaxing"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-semibold">Sit at Home</h2>
        <h3 className="text-4xl font-bold text-yellow-500 mt-2">We Will Take Care</h3>
        <p className="mt-4 text-gray-300">
          Proin ornare posuere quam at euismod. Nam ac nunc <br /> vitae orci ultricies  imperdiet ut id ligula.
          Vestibulum <br /> in elementum mauris. In iaculis odio urna.
        </p>

        {/* Features */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="flex items-center">
            <span className="text-yellow-400 text-3xl">🚀</span>
            <p className="ml-2">Fast Delivery in 1 Hour</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 text-3xl">📱</span>
            <p className="ml-2">Amazing Mobile App</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 text-3xl">🗺️</span>
            <p className="ml-2">Wide Coverage Map</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 text-3xl">🚴‍♂️</span>
            <p className="ml-2">More Than 150 Couriers</p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Read More
        </button>
      </div>
    </div>
    );
};

export default AboutUs;