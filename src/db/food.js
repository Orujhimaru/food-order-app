export const categories = [
  {
    id: 1,
    name: "All",
    key: "all",
  },

  {
    id: 2,
    name: "Cold Dishes",
    key: "cold-dishes",
  },

  {
    id: 3,
    name: "Grill",
    key: "grill",
  },

  {
    id: 4,
    name: "Appetizer",
    key: "appetizer",
  },
  {
    id: 5,
    name: "Dessert",
    key: "dessert",
  },
  {
    id: 6,
    name: "Soup",
    key: "soup",
  },
];

export const orderTypes = [
  { key: "all", name: "All" },
  { key: "Dine In", name: "Dine In" },
  { key: "To go", name: "To go" },
  { key: "Delivery", name: "Delivery" },
];

const [_, coldDishes, grill, appetizer, dessert, soup] = categories;

export const foods = [
  {
    id: 1,
    image: "/src/assets/Image-2.png", //"/public/Image-2.png",
    description: "Spicy seasoned seafood noodles ",
    price: "$ 2.29",
    orderType: "Dine In",
    category: soup,
  },
  {
    id: 2,
    image: "/src/assets/Image-2.png",
    description: "Salted Pasta with mushroom sauce ",
    price: "$ 2.69",
    orderType: "Dine In",
    category: soup,
  },
  {
    id: 3,
    image: "/src/assets/Image-3.png",
    description: "Beef dumpling in hot and sour soup ",
    price: "$ 2.99",
    orderType: "Dine In",
    category: soup,
  },
  {
    id: 4,
    image: "/src/assets/Image-5.png",
    description: "Healthy noodle with spinach leaf ",
    price: "$ 3.29",
    orderType: "To go",
    category: coldDishes,
  },
  {
    id: 5,
    image: "/src/assets/Image-5.png",
    description: "Hot spicy fried rice with omelet ",
    price: "$ 3.49",
    orderType: "Delivery",
    category: coldDishes,
  },
  {
    id: 6,
    image: "/src/assets/Image-6.png",
    description: "Spicy instant noodle with special omelette ",
    price: "$ 3.59",
    orderType: "To go",
    category: appetizer,
  },
  {
    id: 7,
    image: "/src/assets/Image-2.png",
    description: "Spicy seasoned seafood noodles ",
    price: "$ 2.29",
    orderType: "Dine In",
    category: grill,
  },
  {
    id: 8,
    image: "/src/assets/Image-2.png",
    description: "Salted Pasta with mushroom sauce ",
    price: "$ 2.69",
    orderType: "Dine In",
    category: appetizer,
  },
  {
    id: 9,
    image: "/src/assets/Image-3.png",
    description: "Beef dumpling in hot and sour soup ",
    price: "$ 2.99",
    orderType: "Dine In",
    category: dessert,
  },
  {
    id: 10,
    image: "/src/assets/Image-5.png",
    description: "Healthy noodle with spinach leaf ",
    price: "$ 3.29",
    orderType: "To go",
    category: coldDishes,
  },
  {
    id: 11,
    image: "/src/assets/Image-5.png",
    description: "Hot spicy fried rice with omelet ",
    price: "$ 3.49",
    orderType: "Delivery",
    category: appetizer,
  },
  {
    id: 12,
    image: "/src/assets/Image-6.png",
    description: "Spicy instant noodle with special omelette ",
    price: "$ 3.59",
    orderType: "To go",
    category: appetizer,
  },

  {
    id: 13,
    image: "/src/assets/Image-2.png",
    description: "Spicy seasoned seafood noodles ",
    price: "$ 2.29",
    orderType: "Dine In",
    category: appetizer,
  },
  {
    id: 14,
    image: "/src/assets/Image-2.png",
    description: "Salted Pasta with mushroom sauce ",
    price: "$ 2.69",
    bowl: "38",
    orderType: "Dine In",
    category: appetizer,
  },
  {
    id: 15,
    image: "/src/assets/Image-3.png",
    description: "Beef dumpling in hot and sour soup ",
    price: "$ 2.99",
    bowl: "27",
    orderType: "Dine In",
    category: dessert,
  },
  {
    id: 16,
    image: "/src/assets/Image-5.png",
    description: "Healthy noodle with spinach leaf ",
    price: "$ 3.29",
    bowl: "22",
    orderType: "To go",
    category: coldDishes,
  },
  {
    id: 17,
    image: "/src/assets/Image-5.png",
    description: "Hot spicy fried rice with omelet ",
    price: "$ 3.49",
    bowl: "13",
    orderType: "Delivery",
    category: appetizer,
  },
  {
    id: 18,
    image: "/src/assets/Image-6.png",
    description: "Spicy instant noodle with special omelette ",
    price: "$ 3.59",
    bowl: "5",
    orderType: "To go",
    category: appetizer,
  },
];
