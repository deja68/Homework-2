// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');
// CHALLENGE 1
function createFunction() {
	let fun1 = function(){
		console.log('hello');
  }
  return fun1;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	let fun2 = function(){
		console.log(input);
  }
  return fun2;
}

// /*** Uncomment these to check your work! ***/
//
const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
	function add(y){
		console.log(x+y);
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
 let addByTwo = addByX(2);
 //addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4

  /*
function once(func) {
  var result;

  return function() {
    if (func) {
      result = func.apply(undefined, arguments);
      func = null;
  }

    return result;
  }
}*/
function once(func){
  var result =0;
  var flag = false;
  function inner(x){
		if(!flag){
			//pozvana jednom
      flag = true;
      result = func(x);
    }
    return result;
  }
  return inner;
}


var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
/*console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6
*/


// CHALLENGE 5
function after(count, func) {
  var counter = 0;
  function inner(){
    counter++;
    if(counter === count){
      return func();
    }
  }
	return inner;
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
  let output;
  output = setTimeout(func,wait);
  return output;
}

function sayHello() {
  console.log('Hello!')}
//delay(sayHello,3000);


// CHALLENGE 7
function rollCall(names) {
	let called = 0;
  
  return function(){
    for(let i=0; i < names.length; i++){
			if(called === i){
        console.log(names[i]);
      }
    }
    if(called===names.length)
      console.log("Everyone accounted for");
    called++;
  }
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  let obj ={};
	function inner(x){
		if(x !== magicWord){
			let output = func(x);
      obj[x] = output;
      return output;
    } else {
			return obj;
    } 
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
 //const multiplyBy2 = function(num) { return num * 2; };
 //const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
 //console.log(multBy2AndLog(2)); // => should log 4
 //console.log(multBy2AndLog(9)); // => should log 18
 //console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let counter = 0;
	function inner(){
		counter++;
    
    if(counter === array.length + 1){
      counter = 1;
    }
    return array[counter - 1];
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
 //const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 //const getDay = cycleIterator(threeDayWeekend);
 //console.log(getDay()); // => should log 'Fri'
//console.log(getDay()); // => should log 'Sat'
//console.log(getDay()); // => should log 'Sun'
//console.log(getDay()); // => should log 'Fri'
//console.log(getDay());


// CHALLENGE 10
function defineFirstArg(func, arg) {
	function inner(x){
		return func(arg,x);
  }
  return inner;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
	let obj = {};
  
  return function(arg){
		obj.date = '23/03/2020';
    obj.output = func(arguments[0]);
    return result;
  }
}


// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
	let obj={};
  return function(str1,str2){
		if(arguments.length===2){
      obj[str1] = str2;
    } else {
      for(let key in obj){
        str1 = str1.replace(key, obj[key]);
      }
      return str1;
    }
  }
}

// /*** Uncomment these to check your work! ***/
/* const changeScene = censor();
 changeScene('dogs', 'cats');
 changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
*/

// CHALLENGE 13
function createSecretHolder(secret) {
	 /*var _secret = secret;

    return {
        getSecret: function() {
            return _secret;
        },

        setSecret: function(secret) {
            _secret = secret;
        }
    }*/
  var obj ={};
  obj[secret] = secret;
  return {
        getSecret: function() {
            return _secret;
        },

        setSecret: function(secret) {
            _secret = secret;
        }
    }
}

// /*** Uncomment these to check your work! ***/
/* obj = createSecretHolder(5)
 obj.getSecret() // => returns 5
 obj.setSecret(2)
 obj.getSecret() // => returns 2
*/

// CHALLENGE 14
function turnToString(callback) {
	return function(x){
		let result = callback(x);
    let str = result.toString();
    console.log(str);
  }
}


function return50() {
  return 50;
}

// /*** Uncomment these to check your work! ***/
 /*let myNewFunc = turnToString(return50);
 myNewFunc(); // => returns ’50’*/


// CHALLENGE 15
function callTimes() {
  let times = 0;
	return function(){
		times++;
    console.log(times);
  }
}

// /*** Uncomment these to check your work! ***/
/*let myNewFunc1 = callTimes();
 let myNewFunc2 = callTimes();
 myNewFunc1(); // => 1
 myNewFunc1(); // => 2
 myNewFunc2(); // => 1
 myNewFunc2(); // => 2
*/

// CHALLENGE 16
function russianRoulette(num) {
	let called = 0;
  let str='';
  return function(){
		called++;
    if(called >= num+1){
			return str='reload to play again';	
    } else if(called === num){
			return str='bang';
    } else {
			return str='click';
    }
  }
}

// /*** Uncomment these to check your work! ***/
/* const play = russianRoulette(3);
 console.log(play()); // => should log 'click'
 console.log(play()); // => should log 'click'
 console.log(play()); // => should log 'bang'
 console.log(play()); // => should log 'reload to play again'
 console.log(play()); // => should log 'reload to play again'
*/

// CHALLENGE 17
function average() {
  let sum =0;
  let avg =0;
  let counter = 0;
	return function(x){
		if(arguments.length == 1){
      counter++;
      sum += x;
      avg = sum/counter;
			//1 argument
    } 
    return avg;
  }
}

// /*** Uncomment these to check your work! ***/
/* const avgSoFar = average();
 console.log(avgSoFar()); // => should log 0
 console.log(avgSoFar(4)); // => should log 4
 console.log(avgSoFar(8)); // => should log 6
 console.log(avgSoFar()); // => should log 6
 console.log(avgSoFar(12)); // => should log 8
 console.log(avgSoFar()); // => should log 8
*/

// CHALLENGE 18
function makeFuncTester(arrOfTests) {
  return function(func){
    for(let i = 0; i < arrOfTests.length; i++){
				if(func(arrOfTests[i][0])===arrOfTests[i][1])
          return true;
    }
    return false;
  }
}

// /*** Uncomment these to check your work! ***/
/*const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
 capLastTestCases.push(['goodbye', 'goodbyE']);
 capLastTestCases.push(['howdy', 'howdY']);
 const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
 const capLastAttempt1 = str => str.toUpperCase();
 const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
 console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
 console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
*/

// CHALLENGE 19
function makeHistory(limit) {
  let arr = [];
  let counter = 0;
	return function(str){
		if(str!='undo'){
			arr.push(str);
      return str + ' done';
    }else {
      if((counter > limit) || (arr.length < counter)){
				return 'nothing to undo';
      } else {
				let el = arr.pop(str);
        counter++;
        return el + " undone";
      }
			 
    }
  }
}

// /*** Uncomment these to check your work! ***/
/* const myActions = makeHistory(2);
 console.log(myActions('jump')); // => should log 'jump done'
 console.log(myActions('undo')); // => should log 'jump undone'
 console.log(myActions('walk')); // => should log 'walk done'
 console.log(myActions('code')); // => should log 'code done'
 console.log(myActions('pose')); // => should log 'pose done'
 console.log(myActions('undo')); // => should log 'pose undone'
 console.log(myActions('undo')); // => should log 'code undone'
 console.log(myActions('undo')); // => should log 'nothing to undo'
*/

// CHALLENGE 20
function blackjack(array) {
  let called = 0;
  let sum = 0;
  let index=0;
  let save = '';
	return function dealer(a,b){
		return function player(){
      called++;
			if(called === 1){
				sum = a + b;
        return sum;
      } else if (called === 2){
        sum += array[0];
        index++;
        if(sum <= 21){
          return sum;
        } else {
					save= 'bust';
          return save;
        }
      }else{
				if(save === 'bust'){
					return 'you are done';
        }else{
					sum += array[index];
          index++;
          if(sum <= 21){
            return sum;
          }else {
						save= 'bust';
          	return save;
          }
        }
        
      }
      
    }
  }
  
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
/* const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
*/
// /*** PLAYER 1 ***/
/* const i_like_to_live_dangerously = deal(4, 5);
 console.log(i_like_to_live_dangerously()); // => should log 9
 console.log(i_like_to_live_dangerously()); // => should log 11
 console.log(i_like_to_live_dangerously()); // => should log 17
 console.log(i_like_to_live_dangerously()); // => should log 18
 console.log(i_like_to_live_dangerously()); // => should log 'bust'
 console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
 console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
*/
// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
