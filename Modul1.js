document.addEventListener('DOMContentLoaded', function() {
    var q1Answer = document.querySelectorAll('input[name="q1"]');
    var q2Answer = document.querySelectorAll('input[name="q2"]');
    var q3Answer = document.querySelectorAll('input[name="q3"]');
    var q4Answer = document.querySelectorAll('input[name="q4"]');
    var q5Answer = document.querySelectorAll('input[name="q5"]');
    var q6Answer = document.querySelectorAll('input[name="q6"]');
    
    for (var i = 0; i < q1Answer.length; i++) {
      q1Answer[i].addEventListener('change', function() {
        var result1 = document.getElementById('result1');
        result1.innerHTML = '';
        
        if (this.value === 'a') {
            result1.style.color = 'green'
          result1.innerHTML = 'Richtig!';
        } else {
            result1.style.color = 'red'
          result1.innerHTML = 'Falsch!';
        }
      });
    }
    
    for (var j = 0; j < q2Answer.length; j++) {
      q2Answer[j].addEventListener('change', function() {
        var result2 = document.getElementById('result2');
        result2.innerHTML = '';
        
        if (this.value === 'b') {
            result2.style.color = 'green'
          result2.innerHTML = 'Richtig!';
        } else {
            result2.style.color = 'red'
          result2.innerHTML = 'Falsch!';
        }
      });
    }

    for (var j = 0; j < q3Answer.length; j++) {
        q3Answer[j].addEventListener('change', function() {
          var result3 = document.getElementById('result3');
          result3.innerHTML = '';
          
          if (this.value === 'b') {
            result3.style.color = 'green'
            result3.innerHTML = 'Richtig!';
          } else {
            result3.style.color = 'red'
            result3.innerHTML = 'Falsch!';
          }
        });
      }
    
      for (var j = 0; j < q4Answer.length; j++) {
        q4Answer[j].addEventListener('change', function() {
          var result4 = document.getElementById('result4');
          result4.innerHTML = '';
          
          if (this.value === 'c') {
            result4.style.color = 'green'
            result4.innerHTML = 'Richtig!';
          } else {
            result4.style.color = 'red'
            result4.innerHTML = 'Falsch!';
          }
        });
      }

      for (var j = 0; j < q5Answer.length; j++) {
        q5Answer[j].addEventListener('change', function() {
          var result5 = document.getElementById('result5');
          result5.innerHTML = '';
          
          if (this.value === 'b') {
            result5.style.color = 'green'
            result5.innerHTML = 'Richtig!';
          } else {
            result5.style.color = 'red'
            result5.innerHTML = 'Falsch!';
          }
        });
      }
    

  });