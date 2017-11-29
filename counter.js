document.addEventListener('DOMContentLoaded', function() {

  let sugarEl = document.getElementById('sugar');
  let lemonEl = document.getElementById('lemon');
  let chocolateEl = document.getElementById('chocolate');

  let chocolate = Cookies.get('chocolate') || 0;
  chocolateEl.querySelector(".count").innerHTML = chocolate;

  let lemon = Cookies.get('lemon') || 0;
  lemonEl.querySelector(".count").innerHTML = lemon;

  let sugar = Cookies.get('sugar') || 0;
  sugarEl.querySelector('.count').innerHTML = sugar;

  sugarEl.addEventListener('click', function(e){
    if (e.target.classList == 'plus') {
      sugar++;
      sugarEl.querySelector(".count").innerHTML = sugar;
      Cookies.set('sugar', sugar);
    } else if (e.target.classList == 'minus') {
      sugar--;
      sugarEl.querySelector(".count").innerHTML = sugar;
      Cookies.set('sugar', sugar);
    }
  })

  lemonEl.addEventListener('click', function(e){
    if (e.target.classList == 'plus') {
      lemon++;
      lemonEl.querySelector(".count").innerHTML = lemon;
      Cookies.set('lemon', lemon);
    } else if (e.target.classList == 'minus') {
      lemon--;
      lemonEl.querySelector(".count").innerHTML = lemon;
      Cookies.set('lemon', lemon);
    }
  })

  chocolateEl.addEventListener('click', function(e){
    if (e.target.classList == 'plus') {
      chocolate++;
      chocolateEl.querySelector(".count").innerHTML = chocolate;
      Cookies.set('chocolate', chocolate);
    } else if (e.target.classList == 'minus') {
      chocolate--;
      chocolateEl.querySelector(".count").innerHTML = chocolate;
      Cookies.set('chocolate', chocolate);
    }
  })

  document.querySelector('footer h2').addEventListener('click', function() {
    Cookies.expire('chocolate');
    Cookies.expire('lemon');
    Cookies.expire('sugar');

    chocolate = 0;
    lemon = 0;
    sugar = 0;

    chocolateEl.querySelector(".count").innerHTML = chocolate;
    lemonEl.querySelector(".count").innerHTML = lemon;
    sugarEl.querySelector(".count").innerHTML = sugar;
  })

});
