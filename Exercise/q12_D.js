function addBorder(picture) {
    let maxLength = 0;
    for (let i = 0; i < picture.length; i++) {
        maxLength = Math.max(picture[i].length, maxLength)
    }
    maxLength += 2
    picture.unshift("*".repeat(maxLength))
    for (let i = 1; i < picture.length; i++) {
        let diff = maxLength - picture[i].length
        console.log(diff)
        if (diff % 2 === 0) picture[i] = "*".repeat(diff / 2) + picture[i] + "*".repeat(diff / 2)
        else {
            diff -= 1
            picture[i] = ("*".repeat(diff / 2) + picture[i] + "*".repeat(diff / 2)) + "*"
        }
    }
    picture.push("*".repeat(maxLength))
    return picture
}

console.log(addBorder(["absc", "defld", "l"]))