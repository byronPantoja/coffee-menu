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

function MenuItems() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-6"
    >
      {menuItems.map((item) => (
        <li
          key={item.name}
          className="col-span-1 flex flex-col text-center text-white"
        >
          <div className="flex justify-between px-2 py-2 text-xl">
            <h2>{item.name}</h2>
            <h2>${item.price}</h2>
          </div>
          <img src={item.photoName} className="rounded-lg" />
          <p className="text-sm">{item.ingredients}</p>
        </li>
      ))}
    </ul>
  );
}

export default MenuItems;
