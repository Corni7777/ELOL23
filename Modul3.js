document.addEventListener('DOMContentLoaded', function () {
    var q1Answer = document.querySelectorAll('input[name="q1"]');
    var q2Answer = document.querySelectorAll('input[name="q2"]');

    for (var i = 0; i < q1Answer.length; i++) {
        q1Answer[i].addEventListener('change', function () {
            var result1 = document.getElementById('result1');
            result1.innerHTML = '';

            if (this.value === 'd') {
                result1.style.color = 'green'
                result1.innerHTML = 'Blau und Grün ist richtig. Blau symbolisiert die Frische, während Grün für die biologische Herkunft steht.';
                var bildElement = document.getElementById("bild1");
                bildElement.src = "Bilder/Joghurt_sat.png";
                bildElement.style.marginTop = '-233px'
            } else {
                result1.style.color = 'red'
                result1.innerHTML = 'Falsch! Versuche es noch einmal.';
            }
        });
    }

    for (var j = 0; j < q2Answer.length; j++) {
        q2Answer[j].addEventListener('change', function () {
            var result2 = document.getElementById('result2');
            result2.innerHTML = '';

            if (this.value === 'c') {
                var bildElement = document.getElementById("bild2");
                bildElement.src = "Bilder/Sale_sat.png";

                result2.style.color = 'green'
                result2.innerHTML = 'Orange ist richtig. Orange vereint die positiven Eigenschaften von Rot und Gelb. Es erregt somit Aufmerksamkeit, ohne instabil zu wirken. Falls dir zuerst Rot und Gelb in den Sinn gekommen sind ist das allerdings nicht schlimm, da man diese beiden ebenfalls gut nutzen könnte.';
            } else {
                result2.style.color = 'red'
                result2.innerHTML = 'Falsch! Versuche es noch einmal.';
            }
        });
    }



/////////////////////////////////////////////Lückentext

    var blauen = document.getElementById("blauen");
    var Blau = document.getElementById("Blau");
    var result3 = document.getElementById('result3');

    blauen.addEventListener('change', checkWords);
    Blau.addEventListener('change', checkWords);

    function checkWords() {
        result3.innerHTML = '';
        if (blauen.value == "blauen" && Blau.value == "") {
            result3.style.color = 'white';
            result3.innerHTML = '.';
        }

        else if (blauen.value == "" && Blau.value == "blau") {
            result3.style.color = 'white';
            result3.innerHTML = '.';
        }
        else if (blauen.value != "blauen" && Blau.value == "") {
            result3.style.color = 'white';
            result3.innerHTML = '.';
        }
        else if (blauen.value == "" && Blau.value != "blau") {
            result3.style.color = 'white';
            result3.innerHTML = '.';
        }
        else if (blauen.value == "blauen" && Blau.value != "blau") {
            result3.style.color = 'black';
            result3.innerHTML = 'Die erste Lücke stimmt schon mal. Die Zweite ist allerdings falsch.';
        }
        else if (blauen.value != "blauen" && Blau.value == "blau") {
            result3.style.color = 'black';
            result3.innerHTML = 'Die zweite Lücke stimmt schon mal. Die Erste ist allerdings falsch.';
        }
        else if (blauen.value == "blauen" && Blau.value == "blau" ) {
            result3.style.color = 'green';
            result3.innerHTML = 'Richtig!';
        } else {
            result3.style.color = 'red';
            result3.innerHTML = 'Beide lücken sind leider falsch. Versuche es noch einmal.';

        }
    }



    var druck = document.getElementById("Druck");
    var blut = document.getElementById("Blut");
    var result4 = document.getElementById('result4');

    druck.addEventListener('change', checkWords2);
    blut.addEventListener('change', checkWords2);

    function checkWords2() {
        result4.innerHTML = '';
        if (druck.value == "druck" && blut.value == "") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
        }

        else if (druck.value == "" && blut.value == "Blut") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
        }
        else if (druck.value != "druck" && blut.value == "") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
        }
        else if (druck.value == "" && blut.value != "Blut") {
            result4.style.color = 'white';
            result4.innerHTML = '.';
        }
        else if (druck.value == "druck" && blut.value != "Blut") {
            result4.style.color = 'black';
            result4.innerHTML = 'Die erste Lücke stimmt schon mal. Die Zweite ist allerdings falsch.';
        }
        else if (druck.value != "druck" && blut.value == "Blut") {
            result4.style.color = 'black';
            result4.innerHTML = 'Die zweite Lücke stimmt schon mal. Die Erste ist allerdings falsch.';
        }
        else if (druck.value == "druck" && blut.value == "Blut" ) {
            result4.style.color = 'green';
            result4.innerHTML = 'Richtig!';
        } else {
            result4.style.color = 'red';
            result4.innerHTML = 'Beide lücken sind leider falsch. Versuche es noch einmal.';

        }
    }



    var orangene = document.getElementById("orangene");
    var result5 = document.getElementById('result5');

    orangene.addEventListener('change', checkWords3);

    function checkWords3() {
        result5.innerHTML = '';
        if (orangene.value == "") {
            result5.style.color = 'white';
            result5.innerHTML = '.';
        }
        else if (orangene.value == "orangene") {
            result5.style.color = 'green';
            result5.innerHTML = 'Richtig!';
        } else {
            result5.style.color = 'red';
            result5.innerHTML = 'Falsch. Versuche es noch einmal.';

        }
    }

})