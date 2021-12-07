//Create a function printAfter that calls its argument after printing hello world

const print = () => console.log('Elon Musk');
const afterPrint = someVal => {
  console.log('Hello World');
  someVal();
};
afterPrint(print);
