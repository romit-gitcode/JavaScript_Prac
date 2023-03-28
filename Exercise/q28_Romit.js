function dictionary(string, dict) {
    if (string === "") return true
    let str = ""
    for (const val of dict) {
        var index = string.indexOf(val)
        // console.log(index)
        if (index === 0) {
            str = val
            break
        }
    }
    if (str !== "") {
        return dictionary(string.slice(index + str.length), dict)
    }
    else return false
}

console.log(dictionary('catsandog', ["cats", "dog", "sand", "and", "cat"]))


