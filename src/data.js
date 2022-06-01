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
    User('Felipe', 'felipe@gmail.com', 1111, true)
];