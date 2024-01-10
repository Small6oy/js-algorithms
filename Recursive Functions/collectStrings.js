// Write a function called collectStrings
// which accepts an object and returns an
// array of all the values in the object
// that have a typeof string

function collectStrings(obj) {
    if(Object.keys(obj).length == 0) return [];

    let array = []

    let objKey = Object.keys(obj)[0]
    if(typeof obj[objKey] === 'object'){
        return collectStrings(obj[objKey])
    } else if(typeof obj[objKey] === 'string'){
        array.push(obj[objKey])
    }

    delete obj[objKey];
    return array.concat(collectStrings(obj))
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log('result', collectStrings(obj)) // ["foo", "bar", "baz"])
