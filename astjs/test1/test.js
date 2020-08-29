let res = [];

function log(value) {
    res.push(value);
    console.log(value);
}

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


let c = getNumberCD();
let d = 20;
let e = getNumberE();
let f = getNumberF();
c += (1 + 2) * (4 / 2) + 5 - 6 + getNumberOffset();

if(c <  getNumber5()) {
    d = d + 2;
    c = c + 2;
    e = e + e + 3;
    f = f + f + 3;
    log(d);
    log(c);
    log(e);
    log(f);
    if(c < getNumber6() && getBool9()) {
        let d = -100;
        d = d + 3;
        c -= 1;
         e = c + e + 3;
         f = c + f + 3;
         f = f + f + 3 + --d;
        log(d);
        log(c);
        log(e);
        log(f);
        if(c < getNumber7() && getBool7()) {
            c = c * 2;
            e = e + d + 3;
            d = d + 30;
            f = f + d + 3;
            f = f + f + 3 + --d;
            log(d);
            log(c);
            log(e);
            log(f);
        } else {
             d = d - 3;
             e =  e + 13;
             f = f + f + 3 + --d;
             f = f + f + 3 + --d;
             c = 1;
            log(d);
            log(c);
            log(e);
            log(f);
            let f = -900;
            if(getBool16()) {
                 d = d - 3;
                 e =  e + 13;
                 f = f + f + 3 + --d;
                 f = f + f + 3 + --d;
                 c = 1;
                log(d);
                log(c);
                log(e);
                log(f);
            } else {
                c += 1.5;
                e = e + e + 0.3;
                f = f + f + 3 + --e;
                log(d);
                log(c);
                log(e);
                log(f);
                let c, d = 20;
                let e = 300;
                let f = 40;
                if(getBool17) {
                    c += 1.5;
                    e = e + e + 0.3;
                    f = f + f + 3 + --e;
                    log(d);
                    log(c);
                    log(e);
                    log(f);
                } else {
                     d = d - 3;
                     e =  e + 13;
                     f = f + f + 3 + --d;
                     f = f + f + 3 + --d;
                     log(d);
                     log(c);
                     log(e);
                     log(f);
                }
            }
        }
    } else {
        c += 1.5;
        e = e + e + 0.3;
        f = f + f + 3 + --e;
        log(d);
        log(c);
        log(e);
        log(f);
    }
} else if(getBool10()) {
    c = c + 10;
    let a = 10;
    while((getBool11() || getBool12()) && (getBool13() || getBool14()) && a > 0) {
        if(getBool15()) {
            c = c + 1.55;
            e = e + ++c;
            f = c - 3 + --d;
            log(d);
            log(c);
            log(e);
            log(f);
        }
        a--;
    }
}
logRes();