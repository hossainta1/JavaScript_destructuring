// Array destructuring 

// const numbers = [42, 65];
// old version
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65]

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(100, 58));

// object destructuring

const {name, age}= {name:'Tanvie', age: 26}




