# Object creation patterns

## Post lecture evaluation

---

&nbsp;

### Task 1

```js
function addToStorage(item) {
  this.storage.push(item);
}

function createStack() {
  const stack = {};

  stack.storage = {};
  stack.quantity = 0;
  stack.addToStorage = addToStorage;

  return stack;
}

const testStack = createStack();
testStack.addToStorage("piano");
```

a) Work out what happens when `testStack.addToStorage` is invoked in order to add the "piano" to storage
// this.storage.push is NOT a function

---

&nbsp;

### Task 2

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const firstPerson = Person("Alice", 500);
const secondPerson = new Person("Alice", 500);
```

a) What value does `firstPerson` store ?</br>
// undefined -> invoking Person without a return value
b) What value does `secondPerson` store ?</br>
// new instance of Person with Alice deeets
c) What does `this` point to when `Person` is invoked with the `new` keyword.
// the instanciated version of Person (`this` points to `secondPerson`)

---

&nbsp;

### Task 3

```js
function Account(name) {
  this.name = name;
  this.basket = [];
}

Account.prototype.addToBasket = function (item) {
  this.basket.push(item);
};

const testAccount = new Account("Jane");
```

For each of the following expressions below, identify whether they will evaluate to **true** or **false**.</br>
You must also try and provide justifications for your answers - feel free to lookup methods and operators online to help you work out your answers.

a) `testAccount.hasOwnProperty('Jane');`</br>
// false
b) `testAccount.hasOwnProperty('name');`</br>
// true
c) `'name' in testAccount`</br>
// true
d) `testAccount.hasOwnProperty('addToBasket')`</br>
// false -> on prototype, NOT property
e) `'addToBasket' in testAccount`</br>
// false
f) `testAccount.addToBasket === Account.prototype.addToBasket`</br>
// true
g) `Object.getPrototypeOf(testAccount) === Account`</br>
// false
h) `Object.getPrototypeOf(testAccount) === Account.prototype`
// true

Once you've had a go at answer these you can run the code with `node` to see if you were right.

&nbsp;

### Task 3

Write a **test case (or test cases) only** below to assert that an `Animal` constructor returns an object with a name and species defined when the constructor is invoked. See below:

```js
const sammy = new Animal("Samuel", "snake");

// sammy should be an object with the following form:

// {
//   name: 'Samuel',
//   species: 'snake;
//  }

//returns an object
//sammy is an instance of Animal
//has property name = arg passed
//has property species = arg passed
```
