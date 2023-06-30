document.addEventListener('DOMContentLoaded', function () {
    var q1Answer = document.querySelectorAll('input[name="q1"]');
    var q2Answer = document.querySelectorAll('input[name="q2"]');
    var q3Answer = document.querySelectorAll('input[name="q3"]');
    var q6Answer = document.querySelectorAll('input[name="q6"]');
    //1111111111111111111111111111111111
    for (var i = 0; i < q1Answer.length; i++) {
        q1Answer[i].addEventListener('change', function () {
            var result1 = document.getElementById('result1');
            result1.innerHTML = '';

            if (this.value === 'c') {
                result1.style.color = 'green'
                result1.innerHTML = 'Richtig!';
            } else {
                result1.style.color = 'red'
                result1.innerHTML = 'Falsch! Versuche es noch einmal.';
            }
        });
    }
    //22222222222222222222222222222222222
    for (var j = 0; j < q2Answer.length; j++) {
        q2Answer[j].addEventListener('change', function () {
            var result2 = document.getElementById('result2');
            result2.innerHTML = '';

            if (this.value === 'a') {
                result2.style.color = 'green'
                result2.innerHTML = 'Richtig!';
            } else {
                result2.style.color = 'red'
                result2.innerHTML = 'Falsch! Versuche es noch einmal.';
            }
        });
    }
    //333333333333333333333333333333333333
    for (var j = 0; j < q3Answer.length; j++) {
        q3Answer[j].addEventListener('change', function () {
            var result3 = document.getElementById('result3');
            result3.innerHTML = '';

            if (this.value === 'b') {
                result3.style.color = 'green'
                result3.innerHTML = 'Richtig!';
            } else {
                result3.style.color = 'red'
                result3.innerHTML = 'Falsch! Versuche es noch einmal.';
            }
        });
    }
    //4444444444444444444444444444444444444444
    var wort1 = document.getElementById("violett");
    var wort2 = document.getElementById("gelb");
    var result4 = document.getElementById('result4');

    wort1.addEventListener('input', checkWords);
    wort2.addEventListener('input', checkWords);

    function checkWords() {
        result4.innerHTML = '';
        console.log(wort1.value, wort2.value);
        if (wort1.value == "3" && wort2.value == "") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
            console.log(wort1.value, wort2.value);
        }

        else if (wort1.value == "" && wort2.value == "1") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
            console.log(wort1.value, wort2.value);
        }
        else if (wort1.value != "3" && wort2.value == "") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
            console.log(wort1.value, wort2.value);
        }
        else if (wort1.value == "" && wort2.value != "1") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
            console.log(wort1.value, wort2.value);
        }
        else if (wort1.value == "3" && wort2.value == "1") {
            result4.style.color = 'green';
            result4.innerHTML = 'Richtig!';
            console.log(wort1.value, wort2.value);
        } else {
            console.log(wort1.value, wort2.value);
            console.log("wort1.value, wort2.value");
            result4.style.color = 'red';
            result4.innerHTML = 'Falsch! Versuche es noch einmal.';

        }
    }
    //555555555555555555555555555555555555555555
    var wort3 = document.getElementById("blau");
    var wort4 = document.getElementById("orange");
    var result5 = document.getElementById('result5');

    wort3.addEventListener('input', checkWords2);
    wort4.addEventListener('input', checkWords2);

    function checkWords2() {
        result5.innerHTML = '';
        if (wort3.value == "2" && wort4.value == "") {
            result5.style.color = 'white';
            result5.innerHTML = '.';
        }

        else if (wort3.value == "" && wort4.value == "1") {
            result5.style.color = 'white';
            result5.innerHTML = '.';
        }
        else if (wort3.value != "3" && wort4.value == "") {
            result5.style.color = 'white';
            result5.innerHTML = '.';
        }
        else if (wort3.value == "" && wort4.value != "1") {
            result5.style.color = 'white';
            result5.innerHTML = '.';
        }
        else if (wort3.value == "2" && wort4.value == "1") {
            result5.style.color = 'green';
            result5.innerHTML = 'Richtig!';
        } else {
            result5.style.color = 'red';
            result5.innerHTML = 'Falsch! Versuche es noch einmal.';
        }
    }
    //66666666666666666666666666666666666666666666666
    for (var j = 0; j < q6Answer.length; j++) {
        q6Answer[j].addEventListener('change', function () {
            var antworten = document.querySelectorAll('input[name="q6"]:checked');
            var result6 = document.getElementById('result6');
            result5.innerHTML = '';

            if (antworten.length === 3) {
                result6.style.color = 'green'
                result6.innerHTML = 'Richtig! Alle Auswahlmöglichkeiten sind korrekt.';
            }
        });
    }



    var verhältnis = document.getElementById("Verhältnis");
    var kontraste = document.getElementById("Kontraste");
    var result0 = document.getElementById('result0');

    verhältnis.addEventListener('change', checkWords3);
    kontraste.addEventListener('change', checkWords3);

    function checkWords3() {
        result0.innerHTML = '';
        if (verhältnis.value == "Verhältnis" && kontraste.value == "") {
            result0.style.color = 'white';
            result0.innerHTML = '.';
        }

        else if (verhältnis.value == "" && kontraste.value == "Kontraste") {
            result0.style.color = 'white';
            result0.innerHTML = '.';
        }
        else if (verhältnis.value != "Verhältnis" && kontraste.value == "") {
            result0.style.color = 'white';
            result0.innerHTML = '.';
        }
        else if (verhältnis.value == "" && kontraste.value != "Kontraste") {
            result0.style.color = 'white';
            result0.innerHTML = '.';
        }
        else if (verhältnis.value == "Verhältnis" && kontraste.value != "Kontraste") {
            result0.style.color = 'black';
            result0.innerHTML = 'Die erste Lücke stimmt schon mal. Die Zweite ist allerdings falsch.';
        }
        else if (verhältnis.value != "Verhältnis" && kontraste.value == "Kontraste") {
            result0.style.color = 'black';
            result0.innerHTML = 'Die zweite Lücke stimmt schon mal. Die Erste ist allerdings falsch.';
        }
        else if (verhältnis.value == "Verhältnis" && kontraste.value == "Kontraste" ) {
            result0.style.color = 'green';
            result0.innerHTML = 'Richtig!';
        } else {
            result0.style.color = 'red';
            result0.innerHTML = 'Beide lücken sind leider falsch. Versuche es noch einmal.';

        }
    }

});