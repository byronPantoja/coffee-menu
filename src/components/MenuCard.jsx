const menuItems = [
  {
    name: "Black Coffee",
    ingredients: "Arabica House Blend",
    price: 3,
    photoName: "coffee/blackHouseBlend.jpg",
    soldOut: false,
  },
  {
    name: "Cafe latte",
    ingredients: "Local Milk + Espresso",
    price: 4,
    photoName: "coffee/latte.jpg",
    soldOut: false,
  },
  {
    name: "Extra Foam Latte",
    ingredients: "Steamed Local Milk + Whip + Espresso",
    price: 5,
    photoName: "coffee/xtraFoamLatte.jpg",
    soldOut: false,
  },
  {
    name: "Mocha Smoothie",
    ingredients: "Chocolate + Espresso + Local Milk",
    price: 7,
    photoName: "coffee/mochaSmoothie.jpg",
    soldOut: false,
  },
  {
    name: "Matcha Smoothie",
    ingredients: "Local Milk + Single Origin Matcha",
    price: 7,
    photoName: "coffee/matchaSmoothie.jpg",
    soldOut: true,
  },
  {
    name: "Mango Smoothie",
    ingredients: "Local Mango + Ice + a spray of lemon",
    price: 7,
    photoName: "coffee/mangoSmoothie.jpg",
    soldOut: false,
  },
];

function MenuCard() {
  return (
    <>
      {menuItems.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>

          <img src={item.photoName} className="w-48" />
        </div>
      ))}
    </>
  );
}

export default MenuCard;
