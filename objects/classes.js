// User class - Manage user information

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
    return `User ${this.name} is logged in :)`;
  }

  logout() {
    this.loggedIn = false;
    return `User ${this.name} is logged out :)`;
  }

  getinfo() {
    return `Info: name is: ${this.name}, age is: ${this.age}, email: ${this.email}`;
  }
}

// Usage example

const user1 = new User("giorgi", "gio@gmail.com", 22);
user1.login();
user1.getinfo();
console.log(user1.getinfo());

// Product class - Handle product details

class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  checkstock() {
    return this.stock > 0;
  }

  updatePrice(newPrice) {
    this.price = newPrice;
  }

  sell(quantity) {
    if (quantity >= this.stock) {
      return `We dont have that much item, we only have ${this.stock} items left`;
    } else {
      this.stock = this.stock - quantity;
      return `Nice, we sold ${quantity} items of ${this.name}, we have ${this.stock} ${this.name} left`;
    }
  }
}

// Usage

const product1 = new Product("banana", 4.99, 100);
product1.checkstock();
product1.updatePrice(3);

console.log(product1.sell(200));
