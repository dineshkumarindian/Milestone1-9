/*pattern problem

* * * * * 
* * * * * 
* * * * * */

const row = 3;
let column = 5;
let output = "";
for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        output += "*" + " ";
    }
    output += "\n";
}
console.log(output);

/* Hollow rectangle
* * * * * 
*       *
* * * * * */


for (let j = 1; j <= row; j++) {
    for (let k = 1; k <= column; k++) {
        if (j == 1 || j == row) {
            output += "*" + " ";
        }
        else if (k == 1 || k == column) {
            output += "*";
        }
        else {
            output += " ";
        }

    }
    output += "\n";
}
console.log(output);
/* half pyramid
*
**
***
****
*****  */

const length = 5;
let output = "";
for (let i = 0; i < length; i++) {
    for (let j = 0; j <= i; j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);

/* inverted half pyramid
*****
****
***
**
*  */
const length = 5;
let output = "";
for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);

/* Hollow inverted Half Pyramid
*****
*  *
* *
**
*  */
const length = 6;
let n = length;
let output = "";

for (let i = 0; i < length; i++) {
    for (let j = 0; j < n; j++) {

        if (i == 0) {
            output += "*";
        }
        else if (j == 0 || j == n - 1) {
            output += "*";
        }
        else {
            output += " ";
        }
    }
    n = n - 1;
    output += "\n";
}

console.log(output);

/* Full pyramid
      * 
     * * 
    * * * 
   * * * * 
  * * * * * 
 * * * * * * */
const length = 6;
let n = len - 1;
let pattern = "";
for (let i = 0; i < length; i++) {
    for (let j = len - i; j > 1; j--) {
        pattern += " ";
    }
    for (let k = 0; k <= i; k++) {
        pattern += "*" + " ";
    }
    pattern += "\n";
}
console.log(pattern);


/* inverted full pyramid
* * * * * * 
 * * * * * 
  * * * * 
   * * * 
    * * 
     *  */
const length = 6;
let n = length - 1;
let pattern = "";
for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
        pattern += " ";
    }
    for (let k = i; k < length; k++) {
        pattern += "*" + " ";
    }
    pattern += "\n";
}
console.log(pattern);


/* hollow full pyramid
     * 
    * * 
   *   * 
  *     * 
 *       * 
* * * * * * 
*/
const length = 6;
let n = length - 1;
let pattern = "";

for (let i = 0; i < length; i++) {
    for (let j = length - i; j >= 1; j--) {
        pattern += " ";
    }
    for (let k = 0; k <= i; k++) {
        if (i == 0 || i == length - 1) {
            pattern += "*" + " ";
        }
        else if (k == 0 || k == i) {
            pattern += "*" + " ";
        }
        else {
            pattern += "  ";
        }
    }

    pattern += "\n";
}

console.log(pattern);
