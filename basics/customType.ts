type Combinable = number | string;
type ConversionDescriptor = 'as-number'| 'as-text';

function combine2(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else {
        return result.toString() + input2.toString()
    }

    return result;
}


const combineAges2 = combine2(30,26, 'as-number');
console.log(combineAges2);

const combinedStringAges2 = combine2('30','26','as-number');
console.log(combinedStringAges2);

const combinedNames2 = combine2('Sumit', 'Choudhary', 'as-text');
console.log(combinedNames2)