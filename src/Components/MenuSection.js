import Card from "./Card";

const foods = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../Assets/greek salad.jpg"),
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../Assets/bruchetta.jpg"),
  },
  {
    title: "Lemon Dessert",
    price: "$5",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../Assets/lemon dessert.jpg"),
  },
];

const MenuSection = () => {
  return (
    <div id="Menu-Section" class="px-80 ">
      <div class="pt-32 grid grid-cols-2">
        <h1 class="text-5xl font-bold">This Week Specials!</h1>
        <div class="place-self-end">
          <button class="bg-tyellow hover:bg-yellow-500 text-black font-bold py-3 px-5 rounded-full">
            Online Menu
          </button>
        </div>
      </div>
      <div class="pt-20 grid grid-cols-3 gap-8">
        {foods.map((food) => (
          <Card
            key={food.title}
            title={food.title}
            price={food.price}
            description={food.description}
            imageSrc={food.getImageSrc()}
          />
        ))}
      </div>
    </div>
  );
};
export default MenuSection;
