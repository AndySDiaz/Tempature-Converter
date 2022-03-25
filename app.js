function askName() {
    var name = prompt("What is your name?")
    return name
}
function askTemp() {
    var temp =prompt("What is the tempature?")
    return temp
}
function convertftoc(celsius) {
    var convertftoc =((celsius - 32)*5)/9
    return convertftocs
}
function convertctof(far) {
    var convertctof =((far *9)/5)+32
    return convertctof
}
function type (temp) {
    var type=prompt("Ask of they want to convert from F to C, or from C to F?")
    if (type=="F"){
        alert(`${temp}fahrenheit is ${convertftoc(temp)} celsius`)
    }else if (type=="C") {
        alert(`${temp}celsius is ${convertctof(temp)} fahrenheit`)
    }else{
        exit
    }
}

alert (`Hello ${askName()}!`)
var tempature =askTemp()
type(tempature)
