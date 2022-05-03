function howMany() {

    var item = document.getElementById('item').value;
    var x = 25;
    var y = document.getElementById("inputNo").value;
    var z = y / x;
    var rounded = Math.round(z * 100) / 100;

    document.getElementById('result').innerHTML =
    item + " is equal to about " + rounded + " Laps in Jaron's Living Room!";
}
