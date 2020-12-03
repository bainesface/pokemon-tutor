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
testStack.addToStorage('piano');
```

a) Work out what happens when `testStack.addToStorage` is invoked in order to add the "piano" to storage <br>
When `createStack` is invoked, a new instance of `stack` is created. This new instance (an object) is assigned to the variable testStack. `testStack` has a method called `addToStorage` which when invoked with an item, attempts to push the item to `storage`. However, `storage` is an object, not an array so line 27 will result in a TypeError : this.storage.push is not a function.

---

&nbsp;

### Task 2

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const firstPerson = Person('Alice', 500);
const secondPerson = new Person('Alice', 500);
```

a) What value does `firstPerson` store ?</br>
`firstPerson` stores the value undefined as it was invoked without the `new` keyword. One of the many things the `new` keyword does for us is create the object **and** _return_ it. So invoking `Person` without `new` means that nothing is explicitly returned. </br>
b) What value does `secondPerson` store ?</br>
`secondPerson` stores `{name: 'Alice', age: 500}` because the constructor function `Person` was invoked with `new`.</br>
c) What does `this` point to when `Person` is invoked with the `new` keyword? </br>
`this` points to the new instance of `Person`, so </br>
`this.name = "Alice"` </br>
`this.age = 500`

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

const testAccount = new Account('Jane');
```

For each of the following expressions below, identify whether they will evaluate to **true** or **false**.</br>
You must also try and provide justifications for your answers - feel free to lookup methods and operators online to help you work out your answers.

a) `testAccount.hasOwnProperty('Jane');`</br>
False. `hasOwnProperty()` checks that a property with the specified key exists on an object, `'Jane'` is the value, not the key. </br>
b) `testAccount.hasOwnProperty('name');`</br>
True. The `testAccount` instance has a key of `'name'` </br>
c) `'name' in testAccount`</br>
True. This checks that the `'name'` property exists in on the `testAccount` instance. </br>
d) `testAccount.hasOwnProperty('addToBasket')`</br>
False. `hasOwnProperty()` returns `false` for inherited properties. `addToBasket` is an inherited property because it lives on the Account protoype, rather than in the constructor function itself.
e) `'addToBasket' in testAccount`</br>
True. `in` returns true for inherited properties, ie properties on the prototype.
f) `testAccount.addToBasket === Account.prototype.addToBasket`</br>
True. By adding `addToBasket` to the `Account` prototype, we are ensuring that all instances of `Account` use the same function which has the identical reference in memory. This prevents us from using up memory by creating a new `addToBasket` function every time a new instance is created.</br>
g) `Object.getPrototypeOf(testAccount) === Account`</br>
False. The prototype of `testAccount` is not the Account constructor itself.</br>
h) `Object.getPrototypeOf(testAccount) === Account.prototype` </br>
True. The prototype of `testAccount` is the Account prototype.

Once you've had a go at answer these you can run the code with `node` to see if you were right.

&nbsp;

### Task 4

Write a **test case (or test cases) only** below to assert that an `Animal` constructor returns an object with a name and species defined when the constructor is invoked. See below:

```js
const sammy = new Animal('Samuel', 'snake');

expect(sammy).toBeInstanceOf(Animal);
expect(sammy.name).toBe('Samuel');
expect(sammy.species).toBe('snake');
```
