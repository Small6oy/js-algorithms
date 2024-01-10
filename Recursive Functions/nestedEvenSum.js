// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object
// which may contain nested objects.

// SAMPLE INPUT / OUTPUT
// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function nestedEvenSum(obj) {
    if (Object.keys(obj).length === 0) return 0
    if (obj == undefined) return 0

    let objValue = 0;
    let objKey = Object.keys(obj)[0]
    if(typeof obj[objKey] === 'object'){
        objValue = nestedEvenSum(obj[objKey]);
    } else if (typeof obj[objKey] === 'number'){
        objValue = obj[objKey] % 2 == 0 ? obj[objKey] : 0;
    }

    delete obj[objKey];
    return objValue + nestedEvenSum(obj)
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log('result', nestedEvenSum(obj1));
console.log('result', nestedEvenSum(obj2));