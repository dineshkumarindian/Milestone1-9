
const VShapedSequence = (arr) => {
    console.log(arr.length - 2);
    let store = [];
    let answer = [];
    let sequenceLength = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] == arr[i + 2]) {
            store = arr.slice(i, i + 3);
            answer.push(store);
            store = [];
            sequenceLength = sequenceLength + 1;
        }

    }
    console.log(sequenceLength + "VShaped in this Sequence.." + answer);
}
VShapedSequence([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]);
VShapedSequence([1, 7, 1, 7, 1, 7, 1]);

isAnagrams = (text1, text2) => {     //String Anagrams problem
    let a = text1.toLowerCase();
    let b = text2.toLowerCase();
    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    console.log(a);
    console.log(b);
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(isAnagrams('Mary', 'Army'));

//The output is ..true