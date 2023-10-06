let dishes = [
    {
       name: "Burger",
       price: 20.99,
       category: "Fast Food",
       image: "https://img.com/dish_image.jpeg",
       ingredients: "Meat, Cheese, Onion, Bread"
    },
    {
        name: "HotDog",
        price: 18.99,
        category: "Fast Food",
        image: "https://img.com/dish_image.jpeg",
        ingredients: "Meat, Cheese, Onion, Bread"
     },
     {
        name: "Pizza",
        price: 22.99,
        category: "Fast Food",
        image: "https://img.com/dish_image.jpeg",
        ingredients: "Meat, Cheese, Onion, Bread"
     },
    //  {
    //     name: "Pizza",
    //     price: 22.99,
    //     category: "Fast Food",
    //     image: "https://img.com/dish_image.jpeg",
    //     ingredients: "Meat, Cheese, Onion, Bread"
    //  },
     
 ];

 
//Implementation for createDish function

const menuContainer = document.querySelector('.menu-container');

function createDishCard(dish) {
    const dishCard = document.createElement('div');
    dishCard.classList.add('dish-card');

    const nameElement = document.createElement('h2');
    nameElement.textContent = dish.name;
    dishCard.appendChild(nameElement);

    const imageElement = document.createElement('img');
    imageElement.src = dish.image;
    imageElement.alt = dish.name;
    dishCard.appendChild(imageElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${dish.price.toFixed(2)}`;
    dishCard.appendChild(priceElement);

    const ingredientsElement = document.createElement('p');
    ingredientsElement.textContent = dish.ingredients;
    dishCard.appendChild(ingredientsElement);

    menuContainer.appendChild(dishCard);
}

function addCategory(newCategory) {
    const categoryFilter = document.querySelector('#category-filter');
    const categoryExists = Array.from(categoryFilter.options).some(
        (option) => option.value === newCategory
    );
    if (!categoryExists) {
        const optionElement = document.createElement('option');
        optionElement.value = newCategory;
        optionElement.textContent = newCategory;
        categoryFilter.appendChild(optionElement);
    }
}

dishes.forEach(dishe => {
    addCategory(dishe.category);
});

dishes.forEach((dish) => {
    createDishCard(dish);
});
const newDishButton = document.getElementById('new-dish-button');
const nameDish = document.getElementById('name');
const priceDish = document.getElementById('price');
const categoryDish = document.getElementById('category');
const imageUrl = document.querySelector('#image');
const ingredientsDish = document.querySelector('#ingredients');
const categoryFilterr=document.querySelector('#category-filter');
newDishButton.onclick = () => {
    const newDish = {
        name: nameDish.value,
        price: parseFloat(priceDish.value),
        category: categoryDish.value,
        image: imageUrl.value,
        ingredients: ingredientsDish.value,
    };
    addCategory(newDish.category);

    createDishCard(newDish); 

};


//Implementation for research function

const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');

searchInput.addEventListener('input', filterDishes);
categoryFilter.addEventListener('change', filterDishes);
priceFilter.addEventListener('input', filterDishes);

function filterDishes() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value.toLowerCase();
    const maxPrice = parseFloat(priceFilter.value) || Infinity;

    const filteredDishes = dishes.filter((dish) => {
        const nameMatches = dish.name.toLowerCase().includes(searchTerm);
        const categoryMatches = category === '' || dish.category.toLowerCase() === category;
        const priceMatches = dish.price <= maxPrice;
        return nameMatches && categoryMatches && priceMatches;
    });

    menuContainer.innerHTML = ''; 

    filteredDishes.forEach((dish) => {
        createDishCard(dish);
    });
}
