document.addEventListener('DOMContentLoaded', function() {
    var q1Answer = document.querySelectorAll('input[name="q1"]');
    var q2Answer = document.querySelectorAll('input[name="q2"]');
    
    for (var i = 0; i < q1Answer.length; i++) {
      q1Answer[i].addEventListener('change', function() {
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
      q2Answer[j].addEventListener('change', function() {
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
    } })