import { ImageAssets } from "@/assets/ImageAssets";

export const Categories = [
  "dairy",
  "fruit",
  "vegetable",
  "bakery",
  "vegan",
  "meat",
];

import { type StaticImageData } from "next/image";
export interface categoriesType {
  name: string;
  value: string;
  image: string | StaticImageData;
}

export const categories: categoriesType[] = [
  { name: "All", value: "all", image: ImageAssets.prodImgs.AllCategories },
  {
    name: "Dairy Products",
    value: "dairy",
    image: ImageAssets.prodImgs.Img0,
  },
  {
    name: "Fruits",
    value: "fruit",
    image: ImageAssets.prodImgs.Img1,
  },
  {
    name: "Vegetables",
    value: "vegetable",
    image: ImageAssets.prodImgs.Img2,
  },
  {
    name: "Vegan Products",
    value: "vegan",
    image: ImageAssets.prodImgs.Img21,
  },
  {
    name: "Meat Products",
    value: "meat",
    image: ImageAssets.prodImgs.Img45,
  },
];

export const AllProducts = [
  {
    id: 0,
    title: "Brown eggs",
    type: "dairy",
    description: "Raw organic brown eggs in a basket",
    filename: ImageAssets.prodImgs.Img0,
    height: 600,
    width: 400,
    price: 28.1,
    rating: 4,
  },
  {
    id: 1,
    title: "Sweet fresh stawberry",
    type: "fruit",
    description: "Sweet fresh stawberry on the wooden table",
    filename: ImageAssets.prodImgs.Img1,
    height: 450,
    width: 299,
    price: 29.45,
    rating: 4,
  },
  {
    id: 2,
    title: "Asparagus",
    type: "vegetable",
    description: "Asparagus with ham on the wooden table",
    filename: ImageAssets.prodImgs.Img2,
    height: 450,
    width: 299,
    price: 18.95,
    rating: 3,
  },
  {
    title: "Green smoothie",
    id: 3,
    type: "dairy",
    description:
      "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    filename: ImageAssets.prodImgs.Img3,
    height: 600,
    width: 399,
    price: 17.68,
    rating: 4,
  },
  {
    id: 4,
    title: "Raw legums",
    type: "vegetable",
    description: "Raw legums on the wooden table",
    filename: ImageAssets.prodImgs.Img4,
    height: 450,
    width: 299,
    price: 17.11,
    rating: 2,
  },
  {
    title: "Baking cake",
    id: 5,
    type: "dairy",
    description:
      "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    filename: ImageAssets.prodImgs.Img5,
    height: 450,
    width: 675,
    price: 11.14,
    rating: 4,
  },
  {
    id: 6,
    title: "Pesto with basil",
    type: "vegetable",
    description: "Italian traditional pesto with basil, chesse and oil",
    filename: ImageAssets.prodImgs.Img6,
    height: 450,
    width: 299,
    price: 18.19,
    rating: 2,
  },
  {
    title: "Hazelnut in black ceramic bowl",
    id: 7,
    type: "vegetable",
    description:
      "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    filename: ImageAssets.prodImgs.Img7,
    height: 450,
    width: 301,
    price: 27.35,
    rating: 0,
  },
  {
    id: 8,
    title: "Fresh stawberry",
    type: "fruit",
    description: "Sweet fresh stawberry on the wooden table",
    filename: ImageAssets.prodImgs.Img8,
    height: 600,
    width: 399,
    price: 28.59,
    rating: 4,
  },
  {
    id: 9,
    title: "Lemon and salt",
    type: "fruit",
    description: "Rosemary, lemon and salt on the table",
    filename: ImageAssets.prodImgs.Img9,
    height: 450,
    width: 299,
    price: 15.79,
    rating: 5,
  },
  {
    id: 10,
    title: "Homemade bread",
    type: "bakery",
    description: "Homemade bread",
    filename: ImageAssets.prodImgs.Img10,
    height: 450,
    width: 301,
    price: 17.48,
    rating: 3,
  },
  {
    id: 11,
    title: "Legums",
    type: "vegetable",
    description: "Cooked legums on the wooden table",
    filename: ImageAssets.prodImgs.Img11,
    height: 600,
    width: 399,
    price: 14.77,
    rating: 0,
  },
  {
    id: 12,
    title: "Fresh tomato",
    type: "vegetable",
    description: "Fresh tomato juice with basil",
    filename: ImageAssets.prodImgs.Img12,
    height: 600,
    width: 903,
    price: 16.3,
    rating: 2,
  },
  {
    title: "Healthy breakfast",
    id: 13,
    type: "fruit",
    description:
      "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    filename: ImageAssets.prodImgs.Img13,
    height: 450,
    width: 350,
    price: 13.02,
    rating: 2,
  },
  {
    id: 14,
    title: "Green beans",
    type: "vegetable",
    description: "Raw organic green beans ready to eat",
    filename: ImageAssets.prodImgs.Img14,
    height: 450,
    width: 300,
    price: 28.79,
    rating: 1,
  },
  {
    title: "Baked stuffed portabello mushrooms",
    id: 15,
    type: "bakery",
    description:
      "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    filename: ImageAssets.prodImgs.Img15,
    height: 600,
    width: 400,
    price: 20.31,
    rating: 1,
  },
  {
    id: 16,
    title: "Strawberry jelly",
    type: "fruit",
    description: "Homemade organic strawberry jelly in a jar",
    filename: ImageAssets.prodImgs.Img16,
    height: 400,
    width: 600,
    price: 14.18,
    rating: 1,
  },
  {
    id: 17,
    title: "Pears juice",
    type: "fruit",
    description: "Fresh pears juice on the wooden table",
    filename: ImageAssets.prodImgs.Img17,
    height: 600,
    width: 398,
    price: 19.49,
    rating: 4,
  },
  {
    id: 18,
    title: "Fresh pears",
    type: "fruit",
    description: "Sweet fresh pears on the wooden table",
    filename: ImageAssets.prodImgs.Img18,
    height: 600,
    width: 398,
    price: 15.12,
    rating: 5,
  },
  {
    title: "Caprese salad",
    id: 19,
    type: "vegetable",
    description:
      "Homemade healthy caprese salad with tomato mozzarella and basil",
    filename: ImageAssets.prodImgs.Img19,
    height: 400,
    width: 600,
    price: 16.76,
    rating: 5,
  },
  {
    title: "Oranges",
    id: 20,
    type: "fruit",
    description:
      "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
    filename: ImageAssets.prodImgs.Img20,
    height: 450,
    width: 274,
    price: 21.48,
    rating: 4,
  },
  {
    id: 21,
    title: "Vegan food",
    type: "vegetable",
    description: "Concept of vegan food",
    filename: ImageAssets.prodImgs.Img21,
    height: 450,
    width: 299,
    price: 29.66,
    rating: 4,
  },
  {
    id: 22,
    title: "Breakfast with muesli",
    type: "dairy",
    description: "Concept of healthy breakfast with muesli",
    filename: ImageAssets.prodImgs.Img22,
    height: 450,
    width: 299,
    price: 22.7,
    rating: 2,
  },
  {
    id: 23,
    title: "Honey",
    type: "bakery",
    description: "Honey and honeycell on the table",
    filename: ImageAssets.prodImgs.Img23,
    height: 450,
    width: 299,
    price: 17.01,
    rating: 2,
  },
  {
    id: 24,
    title: "Breakfast with cottage",
    type: "fruit",
    description: "Healthy breakfast with cottage cheese and strawberry",
    filename: ImageAssets.prodImgs.Img24,
    height: 600,
    width: 398,
    price: 14.05,
    rating: 1,
  },
  {
    title: "Strawberry smoothie",
    id: 25,
    type: "fruit",
    description:
      "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
    filename: ImageAssets.prodImgs.Img25,
    height: 600,
    width: 400,
    price: 28.86,
    rating: 2,
  },
  {
    id: 26,
    title: "Strawberry and mint",
    type: "fruit",
    description: "Homemade muesli with strawberry and mint",
    filename: ImageAssets.prodImgs.Img26,
    height: 450,
    width: 299,
    price: 26.21,
    rating: 4,
  },
  {
    id: 27,
    title: "Ricotta",
    type: "dairy",
    description: "Ricotta with berry and mint",
    filename: ImageAssets.prodImgs.Img27,
    height: 600,
    width: 398,
    price: 27.81,
    rating: 5,
  },
  {
    title: "Cuban sandwiche",
    id: 28,
    type: "bakery",
    description:
      "Homemade traditional cuban sandwiches with ham pork and cheese",
    filename: ImageAssets.prodImgs.Img28,
    height: 450,
    width: 300,
    price: 18.5,
    rating: 4,
  },
  {
    title: "Granola",
    id: 29,
    type: "dairy",
    description:
      "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
    filename: ImageAssets.prodImgs.Img29,
    height: 450,
    width: 300,
    price: 29.97,
    rating: 3,
  },
  {
    title: "Smoothie with chia seeds",
    id: 30,
    type: "fruit",
    description:
      "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
    filename: ImageAssets.prodImgs.Img30,
    height: 600,
    width: 900,
    price: 25.26,
    rating: 5,
  },
  {
    id: 31,
    title: "Yogurt",
    type: "dairy",
    description: "Homemade yogurt with raspberry and mint",
    filename: ImageAssets.prodImgs.Img31,
    height: 450,
    width: 299,
    price: 27.61,
    rating: 4,
  },
  {
    id: 32,
    title: "Sandwich with salad",
    type: "vegetable",
    description: "Vegan sandwich with salad, tomato and radish",
    filename: ImageAssets.prodImgs.Img32,
    height: 600,
    width: 398,
    price: 22.48,
    rating: 5,
  },
  {
    id: 33,
    title: "Cherry",
    type: "fruit",
    description: "Cherry with sugar on old table",
    filename: ImageAssets.prodImgs.Img33,
    height: 600,
    width: 400,
    price: 14.35,
    rating: 5,
  },
  {
    id: 34,
    title: "Raw asparagus",
    type: "vegetable",
    description: "Raw fresh asparagus salad with cheese and dressing",
    filename: ImageAssets.prodImgs.Img34,
    height: 600,
    width: 400,
    price: 22.97,
    rating: 4,
  },
  {
    id: 35,
    title: "Corn",
    type: "vegetable",
    description: "Grilled corn on the cob with salt and butter",
    filename: ImageAssets.prodImgs.Img35,
    height: 450,
    width: 300,
    price: 13.55,
    rating: 2,
  },
  {
    id: 36,
    title: "Vegan",
    type: "vegan",
    description: "Concept of healthy vegan eating",
    filename: ImageAssets.prodImgs.Img36,
    height: 600,
    width: 398,
    price: 28.96,
    rating: 5,
  },
  {
    title: "Fresh blueberries",
    id: 37,
    type: "fruit",
    description:
      "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    filename: ImageAssets.prodImgs.Img37,
    height: 450,
    width: 321,
    price: 21.01,
    rating: 4,
  },
  {
    title: "Smashed avocado",
    id: 38,
    type: "fruit",
    description:
      "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    filename: ImageAssets.prodImgs.Img38,
    height: 450,
    width: 450,
    price: 25.88,
    rating: 0,
  },
  {
    title: "Italian ciabatta",
    id: 39,
    type: "bakery",
    description:
      "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    filename: ImageAssets.prodImgs.Img39,
    height: 450,
    width: 565,
    price: 15.18,
    rating: 1,
  },
  {
    title: "Rustic breakfast",
    id: 40,
    type: "dairy",
    description:
      "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    filename: ImageAssets.prodImgs.Img40,
    height: 450,
    width: 307,
    price: 21.32,
    rating: 0,
  },
  {
    title: "Sliced lemons",
    id: 41,
    type: "fruit",
    description:
      "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    filename: ImageAssets.prodImgs.Img41,
    height: 600,
    width: 900,
    price: 27.14,
    rating: 2,
  },
  {
    id: 42,
    title: "Plums",
    type: "fruit",
    description: "Yellow and red sweet plums",
    filename: ImageAssets.prodImgs.Img42,
    height: 450,
    width: 299,
    price: 19.18,
    rating: 1,
  },
  {
    id: 43,
    title: "French fries",
    type: "bakery",
    description: "Homemade oven baked french fries with ketchup",
    filename: ImageAssets.prodImgs.Img43,
    height: 600,
    width: 400,
    price: 18.32,
    rating: 3,
  },
  {
    title: "Strawberries",
    id: 44,
    type: "fruit",
    description:
      "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
    filename: ImageAssets.prodImgs.Img44,
    height: 450,
    width: 352,
    price: 15.13,
    rating: 3,
  },
  {
    title: "Ground beef meat burger",
    id: 45,
    type: "meat",
    description:
      "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
    filename: ImageAssets.prodImgs.Img45,
    height: 450,
    width: 675,
    price: 11.73,
    rating: 5,
  },
  {
    id: 46,
    title: "Tomatoes",
    type: "fruit",
    description: "Organic tomatoes made with love",
    filename: ImageAssets.prodImgs.Img46,
    height: 450,
    width: 675,
    price: 26.03,
    rating: 4,
  },
  {
    id: 47,
    title: "Basil",
    type: "vegetable",
    description: "Concept of vegan food with basil",
    filename: ImageAssets.prodImgs.Img47,
    height: 450,
    width: 678,
    price: 15.19,
    rating: 4,
  },
  {
    id: 48,
    title: "Fruits bouquet",
    type: "fruit",
    description: "Abstract citrus fruits bouquet on blue background",
    filename: ImageAssets.prodImgs.Img48,
    height: 600,
    width: 401,
    price: 18.18,
    rating: 1,
  },
  {
    title: "Peaches on branch",
    id: 49,
    type: "fruit",
    description:
      "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    filename: ImageAssets.prodImgs.Img49,
    height: 600,
    width: 400,
    price: 25.62,
    rating: 3,
  },
];
