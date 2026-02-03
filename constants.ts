import { Dish, MenuCategory, Review, Stat, SocialImage, FullMenuCategory, EventItem } from './types';

export const LOGO_URL = "https://lh3.googleusercontent.com/a-/ALV-UjVmL6FE6rmtio8-Mst2Ztm2c-voFBm9j6yosxbT-ZwUJl2YEwKG=w90-h90-p-rp-mo-br100";

export const BRAND_NAME = "BFF – Brooklyn Food Factory";
export const BRAND_SHORT = "BFF";

// Keep existing images for the Signature section
export const SIGNATURE_DISHES: Dish[] = [
  {
    id: '1',
    name: 'The Brooklyn Smash',
    description: 'Double smashed lamb patty, aged cheddar, caramelized onions, and secret BFF sauce on brioche.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerZBG0u5UGIfmrCm1MsfdTllHnSh9XUqENUlomqde6lpkdCfGxcx79iE6UyKwcLf0N1KlB0cY4ZaANlyi1JxRxIS9uVRxN2bQAeV3rEWUqEVROqzsixCoKZAaHDnhSPcazs1UOCpQ=s1360-w1360-h1020-rw',
    price: '₹349'
  },
  {
    id: '2',
    name: 'Truffle Mushroom Pasta',
    description: 'Hand-rolled pasta with wild mushrooms and signature black truffle cream sauce.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerQzXxyRMh4-Kf3sV_SiALEBo_b4wBwfVKv0F0hiOlSRTcyqiQHUjGJm1AibR7SnrNPk-X-f6Fhth8qlpAmbBh_WZl45em52YLE0vdO_V2q-9Tt3GhYHUEapjbccgcGMut3EwrDAw=s1360-w1360-h1020-rw',
    price: '₹399'
  },
  {
    id: '3',
    name: 'Avocado Sourdough',
    description: 'Toasted sourdough, smashed avocado, poached egg, chili flakes, and microgreens.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweq7kwKDVa9mmfAT0a0WT41C2nxnhzz6oZnsXS_fCTnLzHSVmGEiZVjsUyQk5RODrhzAyd9EZ6jPfdPwdQrPQA0XhdZ3GEgzkdz4Wjp2CbpiFWtJQ0MDI67AVIMi-XGz213XJQTx=s1360-w1360-h1020-rw',
    price: '₹299'
  },
  {
    id: '4',
    name: 'Berry Bliss Waffles',
    description: 'Belgian waffles topped with fresh berries, whipped cream, and maple syrup.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQ2pOddiEEP9SYcbdVVrHDPc7QSk8sGNGw8uRBXMNsqvLgDv_SixMQS1hUDxtH49iVu9Lpv6k8EcHVdhn6ofFR_jNbK8AxEz-jOBq-VARU6wXjB6TPOridd0VQ9tSNfyXfnxY=s1360-w1360-h1020-rw',
    price: '₹249'
  },
  {
    id: '5',
    name: 'Signature Latte',
    description: 'Premium roasted beans with velvety steamed milk and custom latte art.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerweALP6Xdig4ZL3yyZqvM1Z2gAAh4YtcLhMIZNUlt5q1SBqZ6guaA3xGntp8yZLZY_bm-jqn37mlgItxosuSwvmP61CWZTyDM96gsfAkiZhSPnq29cliQUkokIcfMdv1y0mqY=s1360-w1360-h1020-rw',
    price: '₹199'
  }
];

export const MENU_HIGHLIGHTS: MenuCategory[] = [
  {
    title: 'Burgers',
    items: [
      { name: 'Classic Smash', description: 'Lamb patty, lettuce, tomato, house sauce', price: '₹299' },
      { name: 'Spicy Chicken', description: 'Crispy chicken, jalapeño slaw, sriracha mayo', price: '₹329' },
      { name: 'Mushroom Swiss', description: 'Sautéed mushrooms, swiss cheese, garlic aioli', price: '₹349' },
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Molten Lava Cake', description: 'Warm chocolate cake with vanilla scoop', price: '₹249' },
      { name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: '₹279' },
      { name: 'Cheesecake', description: 'New York style with berry compote', price: '₹229' },
    ]
  },
  {
    title: 'Beverages',
    items: [
      { name: 'Cold Brew', description: 'Steeped for 12 hours, smooth finish', price: '₹189' },
      { name: 'Matcha Latte', description: 'Premium ceremonial grade matcha', price: '₹219' },
      { name: 'House Lemonade', description: 'Freshly squeezed with mint', price: '₹149' },
    ]
  }
];

export const STATS: Stat[] = [
  { id: 1, label: 'Orders Served', value: 25000, suffix: '+' },
  { id: 2, label: 'Happy Customers', value: 12000, suffix: '+' },
  { id: 3, label: 'Years of Experience', value: 8, suffix: '' },
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Sarah Jenkins", text: "BFF totally nailed the vibe. The smashed burgers are incredible and the pasta is restaurant quality. New favorite spot!", rating: 5 },
  { id: 2, name: "Michael Chen", text: "Best food in the neighborhood. The Brooklyn Smash is legit. Love the atmosphere and the staff.", rating: 5 },
  { id: 3, name: "Emily Davis", text: "Hidden gem! The desserts are to die for, especially the lava cake. Great place to hang out.", rating: 4 },
];

export const SOCIAL_IMAGES: SocialImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop', alt: 'Latte Art' },
  { id: 2, url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop', alt: 'Gourmet Burger' },
  { id: 3, url: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop', alt: 'Pasta Feast' },
  { id: 4, url: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop', alt: 'Friends Gathering' },
];

export const USP_ITEMS = [
  { title: "Freshly Prepared", desc: "Made to order, every single time." },
  { title: "Premium Ingredients", desc: "Sourced from the best local farms." },
  { title: "Signature Recipes", desc: "Bold flavors you won't find elsewhere." },
  { title: "Loved by Customers", desc: "Thousands of 5-star reviews." }
];

// Events Data
export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Live Jazz Nights",
    subtitle: "Every Friday | 8 PM Onwards",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2070&auto=format&fit=crop",
    badge: "Live Event",
    ctaText: "Reserve a Table"
  },
  {
    id: 2,
    title: "Weekend Brunch Fiesta",
    subtitle: "Bottomless Mimosas & Pancakes",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop",
    badge: "Weekend Special",
    ctaText: "View Menu"
  },
  {
    id: 3,
    title: "Brooklyn Burger Fest",
    subtitle: "Try our new limited edition smashed patties",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
    badge: "Limited Time",
    ctaText: "Order Now"
  }
];

// --- EXTENSIVE FULL MENU DATA ---
// Images updated with reliable Unsplash IDs to ensure loading
export const FULL_MENU_DATA: FullMenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizer Factory",
    items: [
      { name: "French Fries", price: "₹129", veg: true, image: "https://images.unsplash.com/photo-1573080496987-a199f8cd4058?q=80&w=800&auto=format&fit=crop" },
      { name: "Peri Peri Fries", price: "₹149", veg: true, spicy: true, image: "https://images.unsplash.com/photo-1619531040576-f3994c603b5f?q=80&w=800&auto=format&fit=crop" },
      { name: "Cheese Loaded Fries", price: "₹189", veg: true, image: "https://images.unsplash.com/photo-1585109649139-3668018951a7?q=80&w=800&auto=format&fit=crop" },
      { name: "Potato Wedges", price: "₹159", veg: true, image: "https://images.unsplash.com/photo-1605652392476-0d32f1a63b2f?q=80&w=800&auto=format&fit=crop" },
      { name: "Garlic Bread", price: "₹139", veg: true, image: "https://images.unsplash.com/photo-1573140247632-f84660f67126?q=80&w=800&auto=format&fit=crop" },
      { name: "Cheese Garlic Bread", price: "₹179", veg: true, image: "https://images.unsplash.com/photo-1619531040576-f3994c603b5f?q=80&w=800&auto=format&fit=crop" },
      { name: "Cheese Chilli Toast", price: "₹189", veg: true, spicy: true, image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop" },
      { name: "Onion Rings", price: "₹169", veg: true, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "munchie",
    title: "Munchie Madness",
    items: [
      { name: "Classic Nachos", description: "Tortilla chips with cheese sauce and salsa", price: "₹199", veg: true, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop" },
      { name: "Loaded Nachos", description: "Beans, jalapenos, olives, cheese sauce, salsa", price: "₹249", veg: true, image: "https://images.unsplash.com/photo-1627845701839-869279768a48?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Nachos", description: "Spiced chicken chunks with full loaded toppings", price: "₹299", veg: false, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Popcorn", price: "₹229", veg: false, image: "https://images.unsplash.com/photo-1609121774327-023a105d15fc?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Fingers", price: "₹249", veg: false, image: "https://images.unsplash.com/photo-1636906660144-8846c4f8285c?q=80&w=800&auto=format&fit=crop" },
      { name: "Fish Fingers", price: "₹299", veg: false, image: "https://images.unsplash.com/photo-1599307767316-77f537765576?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "wings",
    title: "Wings of Fire",
    items: [
      { name: "BBQ Wings", description: "Smokey BBQ sauce glazed wings (6pcs)", price: "₹249", veg: false, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop" },
      { name: "Peri Peri Wings", description: "Spicy dry rub wings (6pcs)", price: "₹249", veg: false, spicy: true, image: "https://images.unsplash.com/photo-1527477396000-64bc618e7d38?q=80&w=800&auto=format&fit=crop" },
      { name: "Buffalo Wings", description: "Classic hot sauce wings (6pcs)", price: "₹269", veg: false, spicy: true, image: "https://images.unsplash.com/photo-1569691105751-88df003de7a4?q=80&w=800&auto=format&fit=crop" },
      { name: "Honey Mustard Wings", description: "Sweet and tangy glazed wings (6pcs)", price: "₹269", veg: false, image: "https://images.unsplash.com/photo-1527477396000-64bc618e7d38?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "burgers_veg",
    title: "Brooklyn’s Burger Joint (Veg)",
    note: "All burgers served with chips. Add Cheese ₹40",
    items: [
      { name: "Classic Aloo Tikki", description: "Spiced potato patty, onion, tomato, mayo", price: "₹149", veg: true, image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop" },
      { name: "Crispy Paneer", description: "Crumb fried paneer patty, lettuce, tandoori mayo", price: "₹199", veg: true, image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop" },
      { name: "Mushroom Melt", description: "Grilled mushroom patty, cheesy sauce, caramelized onions", price: "₹219", veg: true, image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop" },
      { name: "Spicy Bean", description: "Mixed bean and veg patty, jalapenos, sriracha mayo", price: "₹189", veg: true, spicy: true, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop" },
      { name: "The Big Veggie", description: "Double patty, double cheese, lettuce, pickles", price: "₹249", veg: true, bestseller: true, image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "burgers_nonveg",
    title: "The Meaty Stack (Non-Veg)",
    items: [
      { name: "Classic Chicken", description: "Grilled chicken patty, lettuce, tomato, classic mayo", price: "₹199", veg: false, image: "https://images.unsplash.com/photo-1615297348958-817812543d23?q=80&w=800&auto=format&fit=crop" },
      { name: "Crispy Chicken", description: "Fried chicken fillet, slaw, spicy mayo", price: "₹229", veg: false, bestseller: true, image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop" },
      { name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, onion rings, cheese", price: "₹249", veg: false, image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop" },
      { name: "Brooklyn Smash", description: "Smashed lamb patty, caramelized onions, cheddar", price: "₹299", veg: false, bestseller: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
      { name: "The T-Rex", description: "Double chicken patty, fried egg, sausages, cheese", price: "₹349", veg: false, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "pizza",
    title: "The Pizza Lab",
    note: "Hand-tossed base. Available in 7\" / 9\"",
    items: [
      { name: "Margherita", price: [{label: "7\"", value: "₹199"}, {label: "9\"", value: "₹299"}], veg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" },
      { name: "Farmhouse", description: "Onion, capsicum, mushroom, tomato", price: [{label: "7\"", value: "₹249"}, {label: "9\"", value: "₹399"}], veg: true, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
      { name: "Paneer Tikka", description: "Spiced paneer, onion, coriander", price: [{label: "7\"", value: "₹269"}, {label: "9\"", value: "₹429"}], veg: true, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
      { name: "BBQ Chicken", description: "BBQ chicken, onion, paprika", price: [{label: "7\"", value: "₹299"}, {label: "9\"", value: "₹449"}], veg: false, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
      { name: "Chicken Pepperoni", description: "Classic chicken pepperoni, mozzarella", price: [{label: "7\"", value: "₹329"}, {label: "9\"", value: "₹499"}], veg: false, bestseller: true, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "pasta",
    title: "Sauce It Up (Pasta)",
    note: "Choice of Penne or Spaghetti. Add Chicken ₹60",
    items: [
      { name: "Arrabbiata", description: "Spicy tomato sauce, basil, chilli flakes", price: "₹299", veg: true, spicy: true, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop" },
      { name: "Alfredo", description: "Rich creamy white cheese sauce, mushrooms", price: "₹319", veg: true, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop" },
      { name: "Pink Sauce", description: "Mix of red and white sauce", price: "₹309", veg: true, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop" },
      { name: "Pesto Genovese", description: "Basil pesto, cream, parmesan", price: "₹329", veg: true, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop" },
      { name: "Aglio Olio", description: "Olive oil, garlic, chilli flakes, parsley", price: "₹289", veg: true, image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "bowls",
    title: "Rice Bowls",
    items: [
      { name: "Mexican Rice Bowl", description: "Spicy rice, beans, salsa, nachos, cheese sauce", price: "₹249", veg: true, image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=800&auto=format&fit=crop" },
      { name: "Paneer Makhani Bowl", description: "Rice served with rich paneer gravy", price: "₹279", veg: true, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop" },
      { name: "Butter Chicken Bowl", description: "Rice served with classic butter chicken", price: "₹329", veg: false, bestseller: true, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop" },
      { name: "Thai Curry Bowl", description: "Green/Red Curry with steamed rice", price: "₹349", veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "shakes",
    title: "Shake Factory",
    items: [
      { name: "Classic Vanilla", price: "₹149", veg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" },
      { name: "Double Chocolate", price: "₹179", veg: true, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800&auto=format&fit=crop" },
      { name: "Oreo Cookie", price: "₹189", veg: true, bestseller: true, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop" },
      { name: "Nutella Hazelnut", price: "₹229", veg: true, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=800&auto=format&fit=crop" },
      { name: "KitKat Crunch", price: "₹199", veg: true, image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=800&auto=format&fit=crop" },
      { name: "Strawberry Bliss", price: "₹169", veg: true, image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "coffee",
    title: "Coffee Fix",
    items: [
      { name: "Espresso", price: "₹99", veg: true, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop" },
      { name: "Americano", price: "₹119", veg: true, image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=800&auto=format&fit=crop" },
      { name: "Cappuccino", price: "₹149", veg: true, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop" },
      { name: "Latte", price: "₹159", veg: true, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop" },
      { name: "Mocha", price: "₹169", veg: true, image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop" },
      { name: "Caramel Macchiato", price: "₹179", veg: true, image: "https://images.unsplash.com/photo-1485808191679-5f8c7c8606af?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  {
    id: "coolers",
    title: "Cool Down With BFF",
    items: [
      { name: "Virgin Mojito", price: "₹149", veg: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" },
      { name: "Blue Lagoon", price: "₹149", veg: true, image: "https://images.unsplash.com/photo-1536935338788-843bb6303669?q=80&w=800&auto=format&fit=crop" },
      { name: "Lemon Iced Tea", price: "₹129", veg: true, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop" },
      { name: "Peach Iced Tea", price: "₹139", veg: true, image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=800&auto=format&fit=crop" },
      { name: "Fresh Lime Soda", price: "₹99", veg: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" },
    ]
  }
];
