// Write a function called stringifyNumbers 
// which takes in an object and finds all 
// of the values which are numbers and converts
// them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    if(Object.keys(obj).length == 0) return obj;

    let newObj = {}

    let objKey = Object.keys(obj)[0]
    if(typeof obj[objKey] === 'object' && !Array.isArray(obj[objKey])){
        newObj[objKey] = stringifyNumbers(obj[objKey])
    } else if(typeof obj[objKey] === 'number'){
        newObj[objKey] = `${obj[objKey]}`
    } else {
        newObj[objKey] = obj[objKey]
    }


    delete obj[objKey];
    return Object.assign(newObj, stringifyNumbers(obj))
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log('result', stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/