const inquirer = require('inquirer');
const { Pokemon } = require('./pokemon');
const Trainer = require('./trainer');
const firstQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Ash',
  },
  {
    type: 'list',
    name: 'pokemon',
    message: 'Which pokemon do you choose?',
    choices: ['Pikachu', 'Magikarp'],
  },
  {
    type: 'input',
    name: 'sound',
    message: 'What sound does your Pokemon make?',
    default: 'pika pika',
  },
  {
    type: 'input',
    name: 'move',
    message: "What is your pokemon's special move?",
  },
  {
    type: 'number',
    name: 'attackDamage',
    message: "What is your pokemon's attack damage",
  },
];
const secondQuestions = [
  //... see examples to how to format questions
];
function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {
      const trainer1 = new Trainer(firstAnswers.name);
      const pokemon1 = new Pokemon(
        firstAnswers.pokemon,
        firstAnswers.sound,
        firstAnswers.move
      );
      //console.log(trainer1);
      console.log(pokemon1);

      return inquirer.prompt(secondQuestions);
    })
    .then(function (secondAnswers) {
      // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
    });
}
playGame();
