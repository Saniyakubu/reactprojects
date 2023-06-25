const foods = [
  {
    id: 1,
    foodname: 'Sushi',
    country: 'Japan',
    prepare:
      'Cook rice and add vinegar, sugar, and salt. Cut fish and other ingredients into small pieces. Place rice on seaweed, add ingredients, and roll tightly.',
    howToEat:
      'Use chopsticks to pick up a piece of sushi, dip it in soy sauce if desired, and eat it in one bite.',
    benefits:
      'Good source of protein and omega-3 fatty acids, may help improve heart health.',
  },
  {
    id: 2,
    foodname: 'Tacos',
    country: 'Mexico',
    prepare:
      'Cook meat with spices. Warm tortillas. Add meat, cheese, lettuce, and other toppings as desired.',
    howToEat: 'Use hands to pick up a taco, fold it in half, and take a bite.',
    benefits:
      'Good source of protein, fiber, and vitamins, may help improve digestion.',
  },
  {
    id: 3,
    foodname: 'Pasta',
    country: 'Italy',
    prepare: 'Boil pasta until al dente. Add sauce and any desired toppings.',
    howToEat: 'Use a fork to twirl the pasta and bring it to your mouth.',
    benefits:
      'Good source of carbohydrates and fiber, may help improve energy levels.',
  },
  {
    id: 4,
    foodname: 'Curry',
    country: 'India',
    prepare:
      'Cook spices and vegetables in oil. Add meat or legumes and cook until tender. Serve with rice or bread.',
    howToEat: 'Use a fork or bread to scoop up curry and eat it.',
    benefits:
      'May have anti-inflammatory properties, may help improve digestion.',
  },
  {
    id: 5,
    foodname: 'Burgers',
    country: 'United States',
    prepare:
      'Form ground beef into patties. Cook on a grill or stovetop. Add cheese, lettuce, tomato, and other toppings as desired. Serve on a bun.',
    howToEat: 'Pick up the burger with your hands and take a bite.',
    benefits:
      'Good source of protein, iron, and vitamins, but may be high in saturated fat and calories.',
  },
  {
    id: 6,
    foodname: 'Sushi Burrito',
    country: 'United States',
    prepare:
      'Wrap sushi ingredients in a large sheet of seaweed and rice. Roll tightly into a burrito shape.',
    howToEat:
      'Use hands to pick up the sushi burrito, dip it in soy sauce if desired, and take a bite.',
    benefits:
      'Combines the flavors of sushi with the convenience of a burrito.',
  },
  {
    id: 7,
    foodname: 'Pho',
    country: 'Vietnam',
    prepare:
      'Boil bones, meat, and spices to make broth. Add rice noodles and meat. Serve with herbs and lime wedges.',
    howToEat:
      'Use chopsticks or a fork to pick up noodles and meat. Sip the broth separately.',
    benefits: 'May help improve digestion and boost immune system.',
  },
  {
    id: 8,
    foodname: 'Falafel',
    country: 'Middle East',
    prepare:
      'Blend chickpeas, herbs, and spices. Form into balls or patties. Fry or bake until crispy.',
    howToEat:
      'Serve falafel in a pita with lettuce, tomato, cucumber, tahini sauce, and other toppings as desired.',
    benefits:
      'Good source of protein and fiber, may help improve heart health.',
  },
  {
    id: 9,
    foodname: 'Ramen',
    country: 'Japan',
    prepare:
      'Boil noodles until tender. Add broth, meat or tofu, vegetables, and other toppings as desired.',
    howToEat:
      'Use chopsticks or a fork to pick up noodles and other ingredients. Sip the broth separately.',
    benefits: 'May help improve digestion and boost immune system.',
  },
  {
    id: 10,
    foodname: 'Fish and Chips',
    country: 'United Kingdom',
    prepare:
      'Coat fish in batter or breadcrumbs. Fry until crispy. Serve with french fries (chips) and tartar sauce.',
    howToEat:
      'Use a fork or your hands to pick up fish and chips. Dip in tartar sauce if desired.',
    benefits:
      'Good source of protein and omega-3 fatty acids from the fish, but may be high in calories from the frying.',
  },
  {
    id: 11,
    foodname: 'Pad Thai',
    country: 'Thailand',
    prepare:
      'Cook noodles until tender. Stir-fry vegetables and meat or tofu in oil. Add noodles and sauce made from tamarind paste, fish sauce, sugar, and chili flakes.',
    howToEat:
      'Use chopsticks or a fork to pick up noodles and other ingredients.',
    benefits: 'May help improve digestion and boost immune system.',
  },
  {
    id: 12,
    foodname: 'Goulash',
    country: 'Hungary',
    prepare:
      'Cook beef or pork with onions, paprika, tomatoes, and other vegetables until tender.',
    howToEat: 'Serve goulash with bread or potatoes.',
    benefits:
      'Good source of protein and vitamins from the meat and vegetables.',
  },
  {
    id: 13,
    foodname: 'Ceviche',
    country: 'Peru',
    prepare:
      "Marinate raw fish or seafood in citrus juice until it is 'cooked' by the acid. Add onions, peppers, cilantro, and other seasonings as desired.",
    howToEat: 'Use a fork or tortilla chips to scoop up ceviche.',
    benefits:
      'Good source of protein and omega-3 fatty acids from the fish or seafood.',
  },
  {
    id: 14,
    foodname: 'Shakshuka',
    country: 'Middle East/North Africa',
    prepare:
      'Cook onions, peppers, tomatoes, and spices in oil. Crack eggs into the mixture and cook until set.',
    howToEat: 'Serve shakshuka with bread for dipping.',
    benefits:
      'Good source of protein and vitamins from the eggs and vegetables.',
  },
  {
    id: 15,
    foodname: 'Samosas',
    country: 'India',
    prepare:
      'Fill dough triangles with spiced vegetables or meat. Fry or bake until crispy.',
    howToEat: 'Serve samosas with chutney or yogurt sauce for dipping.',
    benefits:
      'Good source of protein and vitamins from the vegetables or meat.',
  },
  {
    id: 16,
    foodname: 'Gyudon',
    country: 'Japan',
    prepare:
      'Cook thinly sliced beef with onions in a sweet soy sauce-based broth. Serve over rice.',
    howToEat: 'Use chopsticks or a fork to pick up beef and rice together.',
    benefits: null,
  },
  {
    id: 17,
    foodname: 'Samosa chaat',
    country: 'India',
    prepare:
      'Mix samosas with chickpeas curry,chutney,yogurt,onions,tomatoes,cilantro etc ',
    howToEat: 'Serve Samosa chaat in a plate using spoon',
    benefits: 'Good source of proteins,vitamins etc',
  },
  {
    id: 18,
    foodname: 'Momo',
    country: 'Nepal/Tibet/India/Bhutan',
    prepare:
      'Mix minced meat(Chicken,pork etc) with onions,cilantro etc.Fill the mixture inside dough wrapper.Cook momos using steam ',
    howToEat: 'Serve momos with spicy tomato sauce using chopsticks or hands ',
    benefits: 'Good source of proteins,vitamins etc',
  },
  {
    id: 19,
    foodname: 'Kebab',
    country: 'Middle East/South Asia/Europe etc',
    prepare:
      'Marinate meat with yogurt,onions,cilantro,mint etc.Grill the meat on skewers ',
    howToEat: 'Serve kebab with naan bread ,yogurt sauce etc using hands ',
    benefits: 'Good source of proteins,vitamins etc',
  },
  {
    id: 20,
    foodname: 'Peking duck',
    country: 'China',
    prepare:
      'Season duck with spices inside out.Roast duck in oven until crispy ',
    howToEat:
      'Wrap duck meat ,cucumber,onions etc inside thin pancake using hands ',
    benefits: 'Good source of proteins,vitamins etc',
  },
];

export default foods;
