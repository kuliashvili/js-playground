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
