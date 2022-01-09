
let a = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];//problem 1
let storeValue = [];
let output = [];
let lengthValue = 0;
let value1 = 0, value2 = 0, value3 = 0;
for (const i = 0; i <= a.length - 2; i++) {
    value1 = a[i];
    value2 = a[i + 1];
    value3 = a[i + 2];
    if (value1 == value3 && value2 != value1) {
        storeValue.push(value1);
        storeValue.push(value2);
        storeValue.push(value3);
        output.push(arr);
        storeValue = [];
        lengthValue = lengthValue + 1;
    }

}
console.log(lengthValue + " The V shaped in this sequence...");
console.log(output);
// the output is... 3 V-Shaped in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]  

let b = [1, 7, 1, 7, 1, 7, 1];//probelm 2 
let storeValue = [];
let output1 = [];
let SeqLength = 0;
let num1 = 0, num2 = 0, num3 = 0;
// console.log(b.length - 2);
for (let i = 0; i < b.length - 2; i++) {
    num1 = b[i];
    num2 = b[i + 1];
    num3 = b[i + 2];

    if (num1 == num3 && num2 != num1) {
        storeValue.push(num1);
        storeValue.push(num2);
        storeValue.push(num3);
        output1.push(brr);
        storeValue = [];
        length = length + 1;
    }
}
console.log(leng + " The V shaped in this  sequence.. ");
console.log(output1);

//   5 V-Shaped (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]


function isPositiveDominant(arr) { //problem 3

    let out = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            out = true;

            for (let j = i + 1; j < arr.length - 1; j++) {
                if (arr[i] > 0) {
                    if (arr[i] == arr[j]) {
                        out = false;
                    }
                }
            }

        }
    }
    return out;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
console.log(isPositiveDominant([5, 99, 832, -3, -4]));
console.log(isPositiveDominant([5, 0]));
console.log(isPositiveDominant([0, -4, -1]));


