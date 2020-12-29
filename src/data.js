import breakfast from './imgs/breakfast.jpg';
import breakfast2 from './imgs/breakfast2.jpg';
import breakfast3 from './imgs/breakfast3.jpg';
import breakfast4 from './imgs/breakfast4.jpg';
import breakfast5 from './imgs/breakfast5.jpg';
import breakfast6 from './imgs/breakfast6.jpg';
import breakfast7 from './imgs/breakfast7.jpg';
import breakfast8 from './imgs/breakfast8.jpg';
import dinner from './imgs/dinner.jpg';
import dinner2 from './imgs/dinner2.jpg';
import dinner3 from './imgs/dinner3.jpg';
import dinner4 from './imgs/dinner4.jpg';
import dinner5 from './imgs/dinner5.jpg';
import dinner6 from './imgs/dinner6.jpg';
import lunch from './imgs/lunch.jpg';
import lunch2 from './imgs/lunch2.jpg';
import lunch3 from './imgs/lunch3.jpg';
import lunch4 from './imgs/lunch4.jpg';
import lunch5 from './imgs/lunch5.jpg';
import snack from './imgs/snack.jpg';
import snack2 from './imgs/snack2.jpg';
import snack3 from './imgs/snack3.jpg';
import snack4 from './imgs/snack4.jpg';
import snack5 from './imgs/snack5.jpg';
import snack6 from './imgs/snack6.jpg';
import snack7 from './imgs/snack7.jpg';
import snack8 from './imgs/snack8.jpg';
import snack9 from './imgs/snack9.jpg';

const menus = [{
    id : 0,
    category : 'breakfast',
    name : 'Beard',
    img : breakfast,
    price : 100,
    quantity : 1,
    inCart : false,
},
{
    id : 1,
    category : 'lunch',
    name : 'Veg Bowl' ,
    img : lunch,
    price : 150,
    quantity : 1,
    inCart : false,
},
{
    id : 2,
    category : 'dinner',
    name : 'Cupcake' ,
    img : dinner,
    price : 80,
    quantity : 1,
    inCart : false,
},
{
    id : 3,
    category : 'breakfast',
    name : 'Full Dog Bread',
    img : breakfast2,
    price : 100,
    quantity : 1,
    inCart : false,
},
{
    id : 4,
    category : 'lunch',
    name : 'Spinach Bowl' ,
    img : lunch2,
    price : 149,
    quantity : 1,
    inCart : false,
},
{
    id : 5,
    category : 'dinner',
    name :'Choco cup',
    img : dinner2,
    price : 79,
    quantity : 1,
    inCart : false,
},
{
    id : 6,
    category : 'breakfast',
    name : 'Choco Dougnut',
    img : breakfast3,
    price : 99,
    quantity : 1,
    inCart : false,
},
{
    id : 7,
    category : 'lunch',
    name : 'Veg Salad' ,
    img : lunch3,
    price : 199,
    quantity : 1,
    inCart : false,
},
{
    id : 8,
    category : 'dinner',
    name : 'Pink Cupcake' ,
    img : dinner3,
    price : 79,
    quantity : 1,
    inCart : false,
},
{
    id : 9,
    category : 'snack',
    name : 'Grapes Jar',
    img : snack,
    price : 169,
    quantity : 1,
    inCart : false,
},
{
    id : 10,
    category : "snack",
    name : 'wedding cke' ,
    img : snack2,
    price : 479,
    quantity : 1,
    inCart : false,
},
{
    id : 11,
    category : 'snack',
    name : 'Red Velvet cake' ,
    img : snack3,
    price : 79,
    quantity : 1,
    inCart : false,
},
{
    id : 12,
    category : 'breakfast',
    name : 'dognut',
    img : breakfast4,
    price : 149,
    quantity : 1,
    inCart : false,
},
{
    id : 13,
    category : 'lunch',
    name : 'Pan Cake' ,
    img : lunch4,
    price : 179,
    quantity : 1,
    inCart : false,
},
{
    id : 14,
    category : 'snack',
    name : 'Choco Cake',
    img : snack4,
    price : 199,
    quantity : 1,
    inCart : false,
},
{
    id : 15,
    category : 'dinner',
    name : 'Strawberry Cupcake',
    img : dinner4,
    price : 119,
    quantity : 1,
    inCart : false,
},
{
    id : 16,
    category : 'breakfast',
    name : 'Dougnut Combo',
    img : breakfast5,
    price : 249,
    quantity : 1,
    inCart : false,
},
{
    id : 17,
    category : 'lunch',
    name : 'Brry Jar' ,
    img : lunch5,
    price : 179,
    quantity : 1,
    inCart : false,
},
{
    id : 18,
    category : 'snack',
    name : 'Choco Bisciuts',
    img : snack5,
    price : 79,
    quantity : 1,
    inCart : false,
},
{
    id : 19,
    category : 'dinner',
    name : 'CupCake Combo',
    img : dinner5,
    price : 179,
    quantity : 1,
    inCart : false,
},
{
    id : 20,
    category : "breakfast",
    name : "Cream Beard",
    img : breakfast6,
    price : 179,
    quantity : 1,
    inCart : false,
},
{
    id : 21,
    category : 'snack',
    name : 'Berry Jar' ,
    img : snack6,
    price : 179,
    quantity : 1,
    inCart : false,
},
{
    id : 22,
    category : 'snack',
    name : 'MarshMallow',
    img : snack7,
    price : 99,
    quantity : 1,
    inCart : false,
},
{
    id : 23,
    category : 'dinner',
    name :'Choco Cake',
    img : dinner6,
    price : 79,
    quantity : 1,
    inCart : false,
},
{
    id : 24,
    category : 'breakfast',
    name : 'Badam Beard',
    img : breakfast7,
    price : 249,
    quantity : 1,
    inCart : false,
},
{
    id : 25,
    category : 'snack',
    name :'Birthday cake',
    img : snack8,
    price : 249,
    quantity : 1,
    inCart : false,
},
{
    id : 26,
    category : 'breakfast',
    name : 'Fresh Doug' ,
    img : breakfast8,
    price : 100,
    quantity : 1,
    inCart : false,
},
{
    id : 27,
    category : 'snack',
    name : 'Jelly Candy' ,
    img : snack9,
    price : 49,
    quantity : 1,
    inCart : false,
},
{
    id : 28,
    category : 'new',
    name : 'veg Bowl' ,
    img : lunch,
    price : 150,
    quantity : 1,
    inCart : false,
},];


export default menus