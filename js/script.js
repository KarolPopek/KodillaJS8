
var n = prompt("Podaj wysokość choinki: ");

function rysujChoinke() { 
  for ( var k = 0 ; k <= n; k++) {
    var gwiazdka = '';
    for ( var i = n; i <= k*2-1; i++ ) {
      gwiazdka += "*";
      console.log(gwiazdka);
    }
  }
}
rysujChoinke();
