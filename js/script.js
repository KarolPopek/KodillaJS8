
var n = prompt("Podaj wysokość choinki: ");

function rysujChoinke() {
  var gwiazdka = '';
  for ( var k = 0 ; k < n; k++) {
    for ( var i = k; i <= k; i++ ) {
      gwiazdka += "*";
      console.log(gwiazdka);
    }
  }
}
rysujChoinke();
