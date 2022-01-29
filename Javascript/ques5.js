const SortArray = function (...input) {
    this.originalArray = [];
}

SortArray.prototype.getSortedArray = function () {

    const sortCallback = (a, b) => {        // callback function to sort array of objects based on age
        return a.age - b.age;
    }

    let a = [];

    for (let item of this.originalArray) {
        a.push(item);
    }

    var sortMyArray = (a) => {             // private function to sort the array

        if (a.length === 0) {
            return [];
        }

        if (a[0].constructor === Object) {   // to sort object array
            a.sort(sortCallback);
        }
        else {                              // to sort my normal array
            a.sort();
        }
        return a;
    }

    let sortedArray = sortMyArray(a);
    return sortedArray;
}

SortArray.prototype.takeEntry = function (num) {               // taking input to the array
    this.originalArray.push(num)
}

const SortObjectArray = function () {                     // extending the SortArray
    SortArray.call(this, []);
}

SortObjectArray.prototype = Object.create(SortArray.prototype);   // Inheriting the properties and methods of parent constructor function to child constructor function


const myArr = new SortArray();                     // my normal array
myArr.takeEntry(3);
myArr.takeEntry(7);
myArr.takeEntry(2);
myArr.takeEntry(1);

const objArr = new SortObjectArray();                 // my object array
objArr.takeEntry({ age: 20, "name": "abc" });
objArr.takeEntry({ age: 25, "name": "efg" });
objArr.takeEntry({ age: 10, "name": "hij" });
objArr.takeEntry({ age: 15, "name": "klm" });



let sortMyArr = myArr.getSortedArray();            // get method returns sorted array
let sortMyObj = objArr.getSortedArray()             // ge method returns sorted array of objects
console.log(sortMyArr);
console.log(sortMyObj);


console.log(myArr)



