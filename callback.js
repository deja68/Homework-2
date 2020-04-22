// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num+2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + 's';
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let arr2 = [];
  for(let i = 0; i < array.length; i++){
		arr2.push(callback(array[i]));
  }
	return arr2;
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  let arr2 = [];
  for(let i = 0; i < array.length; i++){
    arr2.push(callback(array[i]));
  }
	return arr2;
}

// see for yourself if your forEach works!
/*
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); 
*/

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	let arr2 = [];
  array.forEach(function(element){
		arr2.push(callback(element));
  });
  return arr2;
}

//console.log(mapWith([1, 2, 3], addTwo));

//Extension 2

function reduce(array, callback, initialValue) {
   var tempInitial= initialValue;
   array.map(function(element) {
     tempInitial = callback(tempInitial, element);
   });
   return tempInitial;
}

var nums = [4, 1, 3];
var add = function(a, b) {
  return a + b;
  };
//console.log(reduce(nums, add, 0));

//Extension 3
function mutualElem(arr1, arr2) {
  return arr1.filter(function(elem) {
     return arr2.includes(elem);
	});
}
//console.log(concat([1,2,3],[2,3,4])); 
function intersection(arrays) {
  let arr = Array.from(arguments);
	return reduce(arr,mutualElem,arr[0]);
}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function elemInUnion(arr1,arr2){
  let newArr = [...arr1,...arr2];
  let arr =[];
  newArr.forEach(function(elem){
    if(!arr.includes(elem))
			arr.push(elem);
  });
  return arr;
}
//console.log(elemInUnion([1,2,3,4],[2,4,3,1,5,6]));
function union(arrays) {
	let arr = Array.from(arguments);
  return reduce(arr,elemInUnion,arr[0]);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	let obj ={};
  return array1.reduce((acc,el,i)=>{
		if(callback(el)===array2[i]){
      obj[el] = array2[i];
    }
    return obj;
  },{});
};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arr1, arrCallbacks) {
    return arr1.reduce(function(acc, word) {
      acc[word] = arrCallbacks.reduce(function(array,func) {
        array.push(func(word))
        return array
      }, [])
      return acc
    }, {})
}

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
	let keys = Object.keys(obj);
  let newObj ={};
  for(let i =0; i<keys.length; i++){
		if(callback(keys[i])===obj[keys[i]])
      newObj[keys[i]]=obj[keys[i]];
  }
  return newObj;
}

 const cities = {
 London: 'LONDON',
 LA: 'Los Angeles',
 Paris: 'PARIS',
 };
 console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

