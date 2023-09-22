import deliver from "./../Assets/delivery.png";

const Card = ({ title, price, description, imageSrc }) => {
  return (
    <div class="bg-tgrey rounded-lg">
      <div>
        <img class="rounded-t-lg w-full h-40" src={imageSrc} alt="" />
      </div>
      <div class="p-5">
        <div class="flex flex-row justify-between">
          <p class="text-l font-bold text-tblack">{title}</p>
          <p class="text-torange">{price}</p>
        </div>
        <p class="mt-8 font-normal text-gray-700 h-32">{description}</p>
        <div class="mt-8 mb-4 flex flex-row">
          <p>Order a delivery</p>
          <img class="h-5 ml-2 mt-1" src={deliver} />
        </div>
      </div>
    </div>
  );
};
export default Card;
