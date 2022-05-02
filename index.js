// write js code here corresponding to index.html
// You should add submit event on the form

var form = document.querySelector('#masaiForm');

var matchArr = JSON.parse(localStorage.getItem('schedule')) || [];

form.addEventListener('submit', function(event) {
   event.preventDefault();

   var matchData = {
      matchNum: form.matchNum.value,
      teamA: form.teamA.value,
      teamB: form.teamB.value,
      date: form.date.value,
      venue: form.venue.value
   }
   displayData(matchData);
})

function displayData(data) {
   matchArr.push(data);
   localStorage.setItem('schedule', JSON.stringify(matchArr));
}