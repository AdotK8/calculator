let a = []; //first argument variable
let b = []; //second argument variable
let operator; //operator variable 
let temp = [];
let x;
let numA;
let numB;


const one = document.querySelector('#one');const two = document.querySelector('#two');const three = document.querySelector('#three');const four = document.querySelector('#four');const five = document.querySelector('#five');const six = document.querySelector('#six');const seven = document.querySelector('#seven');const eight = document.querySelector('#eight');const nine = document.querySelector('#nine');const zero = document.querySelector('#zero');const clear = document.querySelector('#clear');const del = document.querySelector('#delete');const divide = document.querySelector('#divide');const times = document.querySelector('#times');const minus = document.querySelector('#minus');const equals = document.querySelector('#equals');const plus = document.querySelector('#plus');
const displayTop = document.getElementById('equationDisplay');
const displayBottom = document.getElementById('answerDisplay');







getInput()

plus.addEventListener('click', () => {
    displayTop.insertAdjacentHTML("beforeend", "+");

    if (!a.length === true) {
        updateA(); 
        operator = '+';

    } else if (x && !temp.length === true) {
        x = undefined;
        operator = '+';
    }

    else {
        updateB ();
        operation () 
        operator = '+'
        } 
    }
);

minus.addEventListener('click', () => {
    displayTop.insertAdjacentHTML("beforeend", "-");

    if (!a.length === true) {
        updateA(); 
        operator = '-';

    } else if (x && !temp.length === true) {
        x = undefined;
        operator = '-';
    } else {
        updateB ();
        operation () 
        operator = '-'
        }
});

times.addEventListener('click', () => {
    displayTop.insertAdjacentHTML("beforeend", "x");

    if (!a.length === true) {
        updateA(); 
        operator = 'x';

    } else if (x && !temp.length === true) {
        x = undefined;
        operator = 'x';
    } else {
        updateB ();
        operation () 
        operator = 'x'
        }
});

divide.addEventListener('click', () => {
    displayTop.insertAdjacentHTML("beforeend", "&#247");

    if (!a.length === true) {
        updateA(); 
        operator = '/';

    } else if (x && !temp.length === true) {
        x = undefined;
        operator = '/';
    } else {
        updateB ();
        operation () 
        operator = '/'
        }
})

del.addEventListener('click', () => {
    temp.pop();

})

clear.addEventListener('click', () => {
    operator = undefined;
    a=[];
    b=[];
    temp = [];
    x = undefined;
    displayBottom.innerHTML = '';
    displayTop.innerHTML = '';
} )


function operation () {
    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case 'x':
            multiply();
            break;
        case '/':
            over();
            break;
    }
}

equals.addEventListener('click', () => {
    if (b = []) {
        updateB ()
    }
    operation();
    operator = undefined;
    }
)

function getInput() { //takes user input and store in temp array 

    one.addEventListener('click', () => {
        temp.push(1);
        displayTop.insertAdjacentHTML("beforeend", 1);


    });
    two.addEventListener('click', () => {
        temp.push(2)
        displayTop.insertAdjacentHTML("beforeend", 2)
    });
    three.addEventListener('click', () => {
        temp.push(3)
        displayTop.insertAdjacentHTML("beforeend", 3)
    });
    four.addEventListener('click', () => {
        temp.push(4)
        displayTop.insertAdjacentHTML("beforeend", 4)
    });
    five.addEventListener('click', () => {
        temp.push(5)
        displayTop.insertAdjacentHTML("beforeend", 5)
    });
    six.addEventListener('click', () => {
        temp.push(6)
        displayTop.insertAdjacentHTML("beforeend", 6)
    });
    seven.addEventListener('click', () => {
        temp.push(7)
        displayTop.insertAdjacentHTML("beforeend", 7)
    });
    eight.addEventListener('click', () => {
        temp.push(8)
        displayTop.insertAdjacentHTML("beforeend", 8)
    });
    nine.addEventListener('click', () => {
        temp.push(9)
        displayTop.insertAdjacentHTML("beforeend", 9)
    });
    zero.addEventListener('click', () => {
        temp.push(0)
        displayTop.insertAdjacentHTML("beforeend", 0)
    });
}
function updateA () {//sets temp array to A variable, and then resets temp array to zilch 
    a.push(...temp);
    temp=[];
}
function updateB () { //sets b to equal to temp array 
    b.push(...temp);
    temp=[];
}

function add () {
  numA = parseInt(a.toString().replaceAll(',',''));
  numB = parseInt(b.toString().replaceAll(',',''));
  x = numA + numB;
  displayBottom.innerHTML = x;
  a = Array.from(String(x), Number)
  b = [];
  
}

function subtract () {
    numA = parseInt(a.toString().replaceAll(',',''));
    numB = parseInt(b.toString().replaceAll(',',''));
    x = numA - numB;
    displayBottom.innerHTML = x;
    a = Array.from(String(x), Number)
    b = [];
    
  }

function multiply () {
    numA = parseInt(a.toString().replaceAll(',',''));
    numB = parseInt(b.toString().replaceAll(',',''));
    x = numA * numB;
    displayBottom.innerHTML = x;
    a = Array.from(String(x), Number)
    b = [];
  }

function over () {
    numA = parseInt(a.toString().replaceAll(',',''));
    numB = parseInt(b.toString().replaceAll(',',''));
    x = numA / numB;
    displayBottom.innerHTML = x;
    a = Array.from(String(x), Number)
    b = [];
  }




















