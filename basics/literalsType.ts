function combine1(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else {
        return result.toString() + input2.toString()
    }

    return result;
}


const combineAges1 = combine1(30,26, 'as-number');
console.log(combineAges1);

const combinedStringAges = combine1('30','26','as-number');
console.log(combinedStringAges);

const combinedNames = combine1('Sumit', 'Choudhary', 'as-text');
console.log(combinedNames)