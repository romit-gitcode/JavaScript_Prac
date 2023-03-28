const match_color = (a1, a2) => {
    let cell1 = a1.split("");
    let cell2 = a2.split("");
    if (+cell1[0] == +cell1[1] && +cell2[0] == +cell2[1]) {
        console.log("Color Matched");
    }
    else if ((+cell1[0] - +cell1[1]) % 2 == 0 && (+cell2[0] - +cell2[1]) % 2 != 0) {
        console.log("Color Mismatched");
    }
    else {
        console.log("Color Matched");
    }
}

const a1 = "11";
const a2 = "84";
match_color(a1, a2)