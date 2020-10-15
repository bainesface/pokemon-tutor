// function addToStorage(item) {
//     this.storage.push(item);
//   }
  
//   function createStack() {
//     const stack = {};
  
//     stack.storage = {};
//     stack.quantity = 0;
//     stack.addToStorage = addToStorage;
  
//     return stack;
//   }
  
//   const testStack = createStack();
//   testStack.addToStorage('piano');

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   const firstPerson = Person('Alice', 500);
//   const secondPerson = new Person('Alice', 500);

//   console.log(firstPerson, '1')
//   console.log(secondPerson, '2')

function Account(name) {
    this.name = name;
    this.basket = [];
  }
  
  Account.prototype.addToBasket = function (item) {
    this.basket.push(item);
  };
  
  const testAccount = new Account('Jane');

//   console.log(Object.getPrototypeOf(testAccount) === Account.prototype)
  console.log(Account.prototype, 'acc')
  console.log(testAccount.prototype, 'test')
  console.log(Object.getPrototypeOf(testAccount))
  console.log(testAccount.prototype === Account.prototype)