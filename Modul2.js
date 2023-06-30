document.addEventListener('DOMContentLoaded', function () {
    var bildfalsch1 = document.getElementById("bildfalsch1");
    var bildfalsch2 = document.getElementById("bildfalsch2");
    var bildrichtig = document.getElementById("bildrichtig");
    var result1 = document.getElementById('result1');

    bildfalsch1.addEventListener("click", bildfalsch)
    bildfalsch2.addEventListener("click", bildfalsch)

    bildrichtig.addEventListener("click", function () {
        bildrichtig.style.border = "2px solid green"
        result1.style.color = 'green'
        result1.innerHTML = '';
        result1.innerHTML = 'Richtig!';
        bildfalsch1.removeEventListener("click", bildfalsch);
        bildfalsch2.removeEventListener("click", bildfalsch);
    })
    function bildfalsch() {
        this.style.border = "2px solid red"
        result1.style.color = 'red'
        result1.innerHTML = '';
        result1.innerHTML = 'Falsch! Versuche es noch einmal.';
    }

    var q2Answer = document.querySelectorAll('input[name="q2"]');
    var q3Answer = document.querySelectorAll('input[name="q3"]');
    var q4Answer = document.querySelectorAll('input[name="q4"]');
    var q5Answer = document.querySelectorAll('input[name="q5"]');
    //22222222222222222222222222222222222
    for (var j = 0; j < q2Answer.length; j++) {
        q2Answer[j].addEventListener('change', function () {
            var result2 = document.getElementById('result2');
            result2.innerHTML = '';

            if (this.value === 'a') {
                result2.style.color = 'green'
                result2.innerHTML = 'Rot ist korrekt, denn die Farbe ist exzentrisch, dynamisch und lebendig. Rot wird zudem als besonders leidenschaftlich und anziehend wahrgenommen.';
            } else {
                result2.style.color = 'red'
                result2.innerHTML = 'Blau ist inkorrekt, denn die Farbe ist konzentrisch, d.h. stark in sich gekehrt. Blau wird zudem als ernsthaft, treu und unnahbar wahrgenommen.';
            }
        });
    }
    //3333333333333333333333333333333333333333
    for (var j = 0; j < q3Answer.length; j++) {
        q3Answer[j].addEventListener('change', function () {
            var result3 = document.getElementById('result3');
            result3.innerHTML = '';

            if (this.value === 'b') {
                result3.style.color = 'green'
                result3.innerHTML = 'Gelb ist korrekt. Die Farbe ist dank seiner positiven, verheißungsvollen Kraft besonders warm und auffallend, wird jedoch oft als beißend grell und schrill wahrgenommen. Die expansive Energie verleiht der Farbe zusätzlich einen Charakter von Leichtsinnigkeit.	';
            } else {
                result3.style.color = 'red'
                result3.innerHTML = 'Orange ist inkorrekt. Zwar ist die Farbe durch seinen Anteil von Gelb andere Farben verdrängen und ist extravertiert, doch der Rotanteil scheint Orange eine kraftvolle Ernsthaftigkeit zu verleihen, sodass die Energie zielgerichteter und die Farbe bodenständiger wirkt.';
            }
        });
    }
//44444444444444444444444444444444444
    for (var j = 0; j < q4Answer.length; j++) {
        q4Answer[j].addEventListener('change', function () {
            var result4 = document.getElementById('result4');
            result4.innerHTML = '';

            if (this.value === 'b') {
                result4.style.color = 'green'
                result4.innerHTML = 'Grün ist korrekt. Die Farbe gilt als Mischung aus dem konzentrischen Blau und dem exzentrischen Gelb als beruhigendste Farbe. Die Farbe ist lebendig in seiner satten Selbstzufriedenheit, kann aber auf Dauer langweilig wirken.';
            } else {
                result4.style.color = 'red'
                result4.innerHTML = ' Braun ist inkorrekt. Die Mischfarbe zweiter Ordnung ist herb, nicht lieblich oder süßlich. Der Charakter der Farbe ist stumpfsinnig, stur und steht für Spießertum und die Ablehnung von Erneuerung, aber bodenständig.';
            }
        });
    }
//5555555555555555555555555555555555555555
    for (var j = 0; j < q5Answer.length; j++) {
        q5Answer[j].addEventListener('change', function () {
            var result5 = document.getElementById('result5');
            result5.innerHTML = '';

            if (this.value === 'a') {
                result5.style.color = 'green'
                result5.innerHTML = 'Grau ist korrekt. Die Nichtfarbe trägt keinerlei Lebendigkeit und wird daher als neutral und nüchtern beschrieben. Ihre Fähigkeit, sich in den Hintergrund zu schieben, wird aber auch als edle Zurückhaltung wahrgenommen.';
            } else {
                result5.style.color = 'red'
                result5.innerHTML = 'Weiß ist inkorrekt. Zwar ist die Nichtfarbe bereit, sich allem hinzugeben und wird als unberührt und leer beschrieben, jedoch ist Weiß energiereich und wird als über den Dingen stehend beschrieben.';
            }
        });
    }
        var blau = document.getElementById("blau1");
        var grau = document.getElementById("grau1");
        var gelb = document.getElementById("gelb1");
        var result6 = document.getElementById('result6');
    
        blau.addEventListener("click", falsch)
        grau.addEventListener("click", falsch)
    
        gelb.addEventListener("click", function () {
            gelb.style.border = "2px solid green"
            result6.style.color = 'green'
            result6.innerHTML = '';
            result6.innerHTML = 'Richtig!';
            blau.removeEventListener("click", falsch);
            grau.removeEventListener("click", falsch);
        })
        function falsch() {
            this.style.border = "2px solid red"
            result6.style.color = 'red'
            result6.innerHTML = '';
            result6.innerHTML = 'Falsch! Versuche es noch einmal.';
        }

        var grün = document.getElementById("grün1");
        var rot = document.getElementById("rot1");
        var violett = document.getElementById("violett1");
        var result7 = document.getElementById('result7');
    
        grün.addEventListener("click", falsch2)
        rot.addEventListener("click", falsch2)
    
        violett.addEventListener("click", function () {
            violett.style.border = "2px solid green"
            result7.style.color = 'green'
            result7.innerHTML = '';
            result7.innerHTML = 'Richtig!';
            blau.removeEventListener("click", falsch2);
            grau.removeEventListener("click", falsch2);
        })
        function falsch2() {
            this.style.border = "2px solid red"
            result7.style.color = 'red'
            result7.innerHTML = '';
            result7.innerHTML = 'Falsch! Versuche es noch einmal.';
        }

        var rot2 = document.getElementById("rot2");
        var braun = document.getElementById("braun1");
        var blau2 = document.getElementById("blau2");
        var result8 = document.getElementById('result8');
    
        braun.addEventListener("click", falsch3)
        blau2.addEventListener("click", falsch3)
    
        rot2.addEventListener("click", function () {
            rot2.style.border = "2px solid green"
            result8.style.color = 'green'
            result8.innerHTML = '';
            result8.innerHTML = 'Richtig!';
            blau.removeEventListener("click", falsch3);
            grau.removeEventListener("click", falsch3);
        })
        function falsch3() {
            this.style.border = "2px solid red"
            result8.style.color = 'red'
            result8.innerHTML = '';
            result8.innerHTML = 'Falsch! Versuche es noch einmal.';
        }
})