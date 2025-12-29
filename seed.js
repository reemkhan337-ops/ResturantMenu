
const mongoose = require('mongoose');
const Menu = require('./models/Menu');

mongoose.connect('mongodb://127.0.0.1:27017/restaurantDB');

const items = [
 {name:'Margherita Pizza',description:'Tomato, mozzarella, basil',price:14,category:'Pizzas',image:'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80'},
 {name:'Pepperoni Pizza',description:'Pepperoni & cheese',price:16,category:'Pizzas',image:'https://images.unsplash.com/photo-1601924582975-7d4bcd8fef39?auto=format&fit=crop&w=800&q=80'},
 {name:'Veggie Pizza',description:'Fresh vegetables',price:15,category:'Pizzas',image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80'},
 {name:'Pasta Alfredo',description:'Creamy alfredo sauce',price:18,category:'Main Courses',image:'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'},
 {name:'Lasagna',description:'Baked layered pasta',price:20,category:'Main Courses',image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80'},
 {name:'Tiramisu',description:'Coffee dessert',price:9,category:'Desserts',image:'https://images.unsplash.com/photo-1589308078055-918f8c8c5a46?auto=format&fit=crop&w=800&q=80'},
 {name:'Cheesecake',description:'Creamy cheesecake',price:8,category:'Desserts',image:'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'},
 {name:'Red Wine',description:'Italian red wine',price:12,category:'Beverages',image:'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80'},
 {name:'Sparkling Water',description:'Mineral water',price:5,category:'Beverages',image:'https://images.unsplash.com/photo-1561043433-9265f73e685f?auto=format&fit=crop&w=800&q=80'}
];

Menu.deleteMany({}).then(()=>Menu.insertMany(items))
.then(()=>{console.log('Seeded');mongoose.connection.close();});
