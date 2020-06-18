function difference() {
    var x = document.getElementById('age1')
    var y = document.getElementById('age2')
    var z = x.value - y.value;
    document.getElementById('result').innerHTML = ("Die Differenz ist: " + z )
}
