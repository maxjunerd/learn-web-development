const _ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const slampedValue = Math.min(lowerClampedValue, upper);
        return slampedValue;
    },
    inRange(number, start, end) {
        if (!end) {
            end = start;
            start = 0;
        }
        if (!(end > start)) {
            [end, start] = [start, end];
        }
        const isInRange = (number>=start)&&(number<end);
        return isInRange;
    },
    words(string) {
        const words = string.split(' ');
        return words;
    },
    pad(string, length) {
        if (string.length >= length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length)/2);
        console.log(startPaddingLength);
        const endPaddingLength = Math.ceil((length - string.length)/2);
        console.log(endPaddingLength);
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;
    },
    has(object, key) {
        return (object.hasOwnProperty(key));
    },
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            invertedObject[object[key]] = key;
        };
        return invertedObject;
    },
    findKey(object, predicate) {
        for (let key in object) {
            if (predicate(object[key])) {
                return key;
            }
        return undefined;
        }
    },
    drop(array, number) {
        if (number > 1) {
            return array.slice(number);
        } else {
            return array.slice(1);
        }
    },
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex(function(element, index) {
            return !predicate(element, index, array);
        });
        const droppedArray = this.drop(dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        if (!size) {
            size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+=size) {
            const arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
    
};
console.log(_.chunk([1,2,3,4,5],2));

const hello = _.pad('hello', 9);
console.log(hello.length)

// Do not write or modify code below this line.
module.exports = _;