import food from "./../Assets/restauranfood.jpg";

const AboutSection = () => {
  return (
    <div class="bg-tgreen px-80 grid grid-cols-2 h-96">
      <div class="flex items-center mr-24">
        <div class="grid justify-items-start">
          <h1 class="text-6xl text-tyellow">Little Lemon</h1>
          <p class="text-2xl text-white">Chicago</p>
          <p class="text-2xl text-white mt-4">
            We are a family owned Mediterranean restuarant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button class="bg-tyellow hover:bg-yellow-500 text-black font-bold py-3 px-5 rounded-full mt-4">
            Reserve a table
          </button>
        </div>
      </div>
      <div class="relative">
        <img
          src={food}
          class="w-80 h-96 rounded-3xl absolute left-36 top-16"
          alt="Restuarant Food"
        />
      </div>
    </div>
  );
};
export default AboutSection;
