let res = [];

function log(value) {
    res.push(value);
    console.log(value);
}

function log2(value) {
    
};

function logResStr() {
    let res2 = JSON.stringify(res);
    res2 = JSON.parse(res2).sort().join("");
    console.log(res2);

}

function logRes() {
    
    console.log('res2');

}

function getStr1() {
    return 11 + "ee";
}

function getNumber() {
    return 11;
}

function getBool1() {
    return 2;
}

function getBool2() {
    return 2;
}

function getNumber2() {
    return 2;
}

function getNumber3() {
    return 2;
}

function getNumber4() {
    return 2;
}

function getNumberCD() {
    return 2;
}

function len(str) {
    return str.length;
}

function toInt(str) {
    return parseInt(str);
}

function getNumber5() {
    return 50;
}

function getNumber6() {
    return 50;
}

function getNumber7() {
    return 50;
}

function getBool7() {
    return true;
}

function getBool8() {
    return true;
}

function getBool9() {
    return true;
}

function getBool10() {
    return true;
}

function getBool11() {
    return true;
}
function getBool12() {
    return true;
}
function getBool13() {
    return true;
}
function getBool14() {
    return true;
}
function getBool15() {
    return true;
}

function getBool16() {
    return true;
}

function getBool17() {
    return true;
}

function getNumberE() {
    return true;
}

function getNumberF() {
    return true;
}

function getNumberOffset() {
    return true;
}

function log2(value) {

};

let a = 1;
if(a > getNumber()) {
    let a = getNumber3();
    log('this is a number');
} else {
    a = getNumber4();

    for(var i = getNumber2() || getNumber() && getNumber3(), j = 22; i < 10, j > 2; i++, --j) {
        log(i) || log(i + "i__");
        if(getNumber3() > 10) {
            a = a + "999";
        } else {
            a = toInt(a);
        }
    }
    log(i);
    log(j);
    log(a + getNumber3() + getStr1());
}


let b = '23';
while(len(b) < 10 && getBool1()) {
    if(4 >= 3) {
        b = b + 1;
        log(b);
    };
    b += 11;
}
logRes();


//-----------------------------------

