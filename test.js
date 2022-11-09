// var now = new Date();
// var daysOfYear = [];
// for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
//     daysOfYear.push(new Date(d));
// }
// console.log(daysOfYear)

// now.setDate(now.getDate() + 7);

// console.log(now);
function formatDate(date){

  var dd = date.getDate();
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear();
  if(dd<10) {dd='0'+dd}
  if(mm<10) {mm='0'+mm}
  date = mm+'/'+dd+'/'+yyyy;
  return date
}

function Last7Days () {
  var result = [];
  for (var i=0; i<7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push( formatDate(d) )
  }

  return(result.join(','));
}

console.log(Last7Days())