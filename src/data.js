class User{
    constructor(name, email, password, payment){
        this.name = name;
        this.email = email;
        this.password = password;
        this.payment = payment;
    }
}

class Restaurant {
    constructor(name, ownerAccount, income, outcome, storage, menuID){
        this.name = name;
        this.ownerAccount = ownerAccount
        this.income = income;
        this.outcome = outcome;
        this.storage = storage;
        this.menuID = menuID;
    }
}

class Menu {
    constructor(menuID, menuName, food){
        this.menuID = menuID;
        this.menuName = menuName;
        this.food = food;
    }
}

class Food {
    constructor(name, ingredients, price, time, image){
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.time = time;
        this.image = image;
    }
}

const usersArray = [
    new User('Felipe', 'felipe@gmail.com', 1111, true)
];

export const storageArray = [
    {
        isPositive: true,
        value: 12,
    },
    {
        isPositive: true,
        value: 10,
    },
    {
        isPositive: false,
        value: 5,
    },
    {
        isPositive: false,
        value: 15,
    },
    {
        isPositive: true,
        value: 30,
    },
    {
        isPositive: false,
        value: 3,
    },
];

export const lastProfitArray = [
    {
        isPositive: true,
        value: 543.99,
    },
    {
        isPositive: false,
        value: 123.32,
    },
    {
        isPositive: false,
        value: 100.00,
    },
    {
        isPositive: true,
        value: 155.65,
    },
    {
        isPositive: true,
        value: 332.45,
    },
    {
        isPositive: false,
        value: 140.54,
    },
];