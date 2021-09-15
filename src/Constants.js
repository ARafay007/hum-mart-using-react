
const bundleNameAry = [{
    id: 1,
    name: 'Shahi Zeera',
    price: 120,
    bundleName: 'Super Saver Bundle 6',
    img: 'Images/bundleOffer-1.jpg',
    qty: 1,
    remaining: 9,
    saving: 195
},
{
    id: 2,
    name: 'Chat Masala',
    price: 111,
    bundleName: 'Super Saver Bundle 1',
    img: 'Images/bundleOffer-2.jpg',
    qty: 1,
    remaining: 9,
    saving: 195
}];

const categoriesName = ['Personal Care', 'Home & Kitchen', 'Household Needs', 'Noodles, Sauce and Frozen Foods', 'Grocery & Staples', 'Breakfast & Dairy', 'Furnishing & Home Needs', 'Beverages', 'Baby & Kids', 'Pet Care', 'Pharmacy', 'Home Service', 'Biscuits, Snacks and Chocolates', 'Meat & Seafood'];


const categoryList = [
    {
        id: 3,
        name: 'Cool & Cool Ocean Hand Sanitizer',
        price: 302,
        bundleName: '',
        img: '/CategoryList/sanitizer1.jpg',
        qty: 1,
        remaining: 9,
        saving: 515,
        category: 'Personal Care'
    },
    {
        id: 4,
        name: 'Cool & Cool Fresh Sprit Hand Sanitizer',
        price: 302,
        bundleName: '',
        img: '/CategoryList/sanitizer2.jpg',
        qty: 1,
        remaining: 9,
        saving: 515,
        category: 'Personal Care'
    },
    {
        id: 5,
        name: 'Cool & Cool Aqua Fresh Hand Sanitizer',
        price: 302,
        bundleName: '',
        img: '/CategoryList/sanitizer3.jpg',
        qty: 1,
        remaining: 9,
        saving: 515,
        category: 'Personal Care'
    },
    {
        id: 6,
        name: 'Puricy Advanced Natural Care Anti Bacterial Handwash',
        price: 200,
        bundleName: '',
        img: '/CategoryList/sanitizer4.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 7,
        name: 'Puricy Advanced Care Anti Bacterial Handwash',
        price: 200,
        bundleName: '',
        img: '/CategoryList/sanitizer5.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 8,
        name: 'Puricy Advanced Care Anti Bacterial Handwash',
        price: 200,
        bundleName: '',
        img: '/CategoryList/sanitizer6.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 9,
        name: 'Puricy Advanced Lemon Care Anti Bacterial Handwash',
        price: 200,
        bundleName: '',
        img: '/CategoryList/sanitizer7.jpg',
        qty: 1,
        remaining: 9,
        saving: 515,
        category: 'Personal Care'
    },
    {
        id: 10,
        name: 'Cool & Cool Fresh Sprit Hand Sanitizer',
        price: 200,
        bundleName: '',
        img: '/CategoryList/sanitizer8.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 11,
        name: 'Puricy Advanced Anti Bacterial Handwash Pack',
        price: 800,
        bundleName: '',
        img: '/CategoryList/sanitizer9.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 12,
        name: 'Puricy Advanced Complete Care Anti Bacterial Handwash',
        price: 200,
        bundleName: '',
        img: '/CategoryList/sanitizer10.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 13,
        name: 'Gimix Men Facewash Pack',
        price: 1950,
        bundleName: '',
        img: '/CategoryList/sanitizer11.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 14,
        name: 'Gimix Men Facewash Trio Pack',
        price: 990,
        bundleName: '',
        img: '/CategoryList/sanitizer12.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Personal Care'
    },
    {
        id: 15,
        name: 'Spontex Oval Bucket With Wringer',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen1.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 16,
        name: 'Spontex Multipurpose Cleaning Cloth',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen2.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 17,
        name: 'Spontex Protector Pack Of Latex Gloves Medium',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen3.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 18,
        name: 'Spontex Trios Latex Gloves Size Large',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen4.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 19,
        name: 'Spontex Sensitive Perfect Gloves Large',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen5.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 20,
        name: 'Spontex Sensitive Perfect Touch Gloves Medium',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen6.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 21,
        name: 'Spontex Wash Ups Cotton Gloves Large',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen7.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 22,
        name: 'Spontex Wash Ups Cotton Gloves Medium',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen8.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 23,
        name: 'Spontex Multipurpose Cotton Gloves Large',
        price: 990,
        bundleName: '',
        img: '/CategoryList/home&kitchen9.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Home & Kitchen'
    },
    {
        id: 24,
        name: 'Scrub Shine Anti Microbial 3 In 1 Scouring Pad',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold1.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 25,
        name: 'Wet Mop Refill',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold2.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 26,
        name: 'Mosi Wet Mop Complete Set',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold3.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 27,
        name: 'Dry Mop Set Local',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold4.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 28,
        name: 'Wiper Local',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold5.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 29,
        name: 'Finis Mop White Phenyle Dilute',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold6.png',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 30,
        name: 'Harpic Hygienic Citrus Toilet Block Cleaner',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold7.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 31,
        name: 'Lemon Max powder',
        price: 990,
        bundleName: '',
        img: '/CategoryList/houseHold8.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Household Needs'
    },
    {
        id: 32,
        name: 'Eco Daal Mash Shelled',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery1.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 33,
        name: 'Eco Gluten FREE Almond Powder',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery2.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 34,
        name: 'Eco Chicken N Bone Broth (Yakhni Powder) Bottle',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery3.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 35,
        name: 'Eco Carrot Powder',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery4.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 36,
        name: 'Eco Cucumber Powder',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery5.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 37,
        name: 'Eco Basil Leaves',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery6.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 38,
        name: 'Eco Thyme Leaves',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery7.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    },
    {
        id: 39,
        name: 'Eco Gluten FREE Tapioca Starch',
        price: 990,
        bundleName: '',
        img: '/CategoryList/grocery8.jpg',
        qty: 1,
        remaining: 9,
        saving: 0,
        category: 'Grocery & Staples'
    }
];


export { bundleNameAry, categoriesName, categoryList };