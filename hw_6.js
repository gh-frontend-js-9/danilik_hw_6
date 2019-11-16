// Task 1
console.log('Find in array: sum, min and max, replace min and max - create custom functions \n');

const arr = [1, -21, 17, 54, 41, 386];

const CompareNum = (a,b)  => a - b;

const SwapMinAndMax = () => {
    arr.sort(CompareNum);
    [arr[0], arr[5]] = [arr[5], arr[0]];
    console.log(arr);
}

SwapMinAndMax();


const GetMinOfArray = () => {
    console.log(`Min of array: ${Math.max(...arr)}`);
}

const GetMaxOfArray = () => {
    console.log(`Max of array: ${Math.min(...arr)}`);
}

const GetSumOfArray = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    console.log(`Sum of array: ${sum}`);
}

GetMinOfArray();
GetMaxOfArray();
GetSumOfArray();

// Task 2
console.log('\nCreate function which will return function with callback in arguments\n')

function callbackFunc(arg, callback) {
    console.log(`I take ${arg}`)
    callback();
}

callbackFunc('Arguments', function() {
    console.log('And callback');
});

// Taks 3
console.log('\nCreate a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.\n')

const foobar = () => {
    for( i = 0; i <= 49; i++ ) {
        console.log(i);
    
        if( i % 3 == 0 && i % 7 == 0 ) {
            console.log('foobar');
        } else if(i % 7 == 0) {
            console.log('bar');
        } else if(i % 3 == 0) {
            console.log('foo');
        }
    }
}

foobar();


// Task 4
console.log('\nCreate function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.\n')



