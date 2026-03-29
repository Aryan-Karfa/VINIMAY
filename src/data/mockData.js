export const currentUser = {
  name: "Aryan Karfa",
  username: "@aryanvinimay",
  initials: "AK",
  level: "Gold",
  credits: 2340,
  inrEquivalent: 23400,
  pendingCredits: 340,
  itemsRecycled: 23,
  co2Saved: 18.4,
  pickupsDone: 7,
  itemsPurchased: 5,
  creditsEarned: 3180,
  creditsSpent: 840,
  redemptions: 4200,
  levelProgress: 75,
};

export const transactions = [
  { id:1,  type:"earned",  icon:"CheckCircle", title:"Pickup Completed (3 items)",  date:"Mar 25, 2026", amount:180  },
  { id:2,  type:"spent",   icon:"ShoppingCart",title:"Purchased: Levi's 511 Slim",  date:"Mar 22, 2026", amount:-220 },
  { id:3,  type:"earned",  icon:"Users",       title:"Referral Bonus: Priya S.",    date:"Mar 18, 2026", amount:50   },
  { id:4,  type:"earned",  icon:"Upload",      title:"Upload Approved: 2 shirts",   date:"Mar 15, 2026", amount:120  },
  { id:5,  type:"spent",   icon:"ShoppingCart",title:"Purchased: Pottery Barn Bag", date:"Mar 10, 2026", amount:-90  },
  { id:6,  type:"earned",  icon:"CheckCircle", title:"Pickup Completed (4 items)",  date:"Mar 05, 2026", amount:200  },
  { id:7,  type:"pending", icon:"Star",        title:"Weekly Streak Bonus",         date:"Mar 01, 2026", amount:25   },
  { id:8,  type:"spent",   icon:"ShoppingCart",title:"Purchased: Zara Midi Skirt",  date:"Feb 26, 2026", amount:-150 },
  { id:9,  type:"earned",  icon:"CheckCircle", title:"Pickup Completed (5 items)",  date:"Feb 20, 2026", amount:310  },
  { id:10, type:"pending", icon:"Gift",        title:"Sign-up Bonus",               date:"Feb 14, 2026", amount:50   },
];

export const products = [
  { id:1,  brand:"LEVI'S",           name:"511 Slim Fit Jeans",         condition:"Like New", size:"M",  vmc:220, inr:2200, category:"Bottoms"   },
  { id:2,  brand:"ZARA",             name:"Floral Print Midi Dress",    condition:"Good",     size:"S",  vmc:180, inr:1800, category:"Dresses"   },
  { id:3,  brand:"H&M",              name:"Relaxed Fit Hoodie",         condition:"Good",     size:"L",  vmc:130, inr:1300, category:"Tops"      },
  { id:4,  brand:"TOMMY HILFIGER",   name:"Essential Piqué Polo",       condition:"Like New", size:"M",  vmc:150, inr:1500, category:"Tops"      },
  { id:5,  brand:"FABINDIA",         name:"Cotton Block Print Kurta",   condition:"Like New", size:"XL", vmc:200, inr:2000, category:"Ethnic"    },
  { id:6,  brand:"ALLSAINTS",        name:"Balfern Leather Jacket",     condition:"Fair",     size:"S",  vmc:450, inr:4500, category:"Outerwear" },
  { id:7,  brand:"UNIQLO",           name:"Supima Cotton Tee",          condition:"Like New", size:"M",  vmc:80,  inr:800,  category:"Tops"      },
  { id:8,  brand:"MASSIMO DUTTI",    name:"Wool Blend Overcoat",        condition:"Like New", size:"L",  vmc:520, inr:5200, category:"Outerwear" },
  { id:9,  brand:"NORTH FACE",       name:"Venture Rain Jacket",        condition:"Good",     size:"XL", vmc:310, inr:3100, category:"Outerwear" },
  { id:10, brand:"ADIDAS",           name:"Stan Smith Originals",       condition:"Like New", size:"42", vmc:280, inr:2800, category:"Footwear"  },
  { id:11, brand:"POLO RALPH LAUREN",name:"Slim Fit Oxford Shirt",      condition:"Good",     size:"L",  vmc:190, inr:1900, category:"Tops"      },
  { id:12, brand:"GAP",              name:"Icon Denim Jacket",          condition:"Like New", size:"M",  vmc:210, inr:2100, category:"Outerwear" },
];

export const activities = [
  { icon:"CheckCircle", colorScheme:"green", title:"Pickup completed — 3 items", sub:"Today, 2:40 PM",      amount:"+180 VMC", sign:"positive" },
  { icon:"ShoppingCart",colorScheme:"muted", title:"Purchased: Levi's 511",      sub:"Oct 24, 11:15 AM",    amount:"-220 VMC", sign:"negative" },
  { icon:"Sparkles",    colorScheme:"amber", title:"AI Estimate accepted",        sub:"Pending verification", amount:"95 VMC",   sign:"pending"  },
  { icon:"Users",       colorScheme:"green", title:"Referral bonus credited",     sub:"Mar 18, 2026",        amount:"+50 VMC",  sign:"positive" },
  { icon:"Upload",      colorScheme:"green", title:"Upload approved — 2 shirts",  sub:"Mar 15, 2026",        amount:"+120 VMC", sign:"positive" },
];
