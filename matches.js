// write js code here corresponding to matches.html

var tbody = document.querySelector('tbody');

var matchArr = JSON.parse(localStorage.getItem('schedule'));

displayData(matchArr);

function filterByVenue() {
   var venue = document.querySelector('#filterVenue').value;

   if(venue=='none') {
      displayData('matchArr');
   }
   if(venue=='Mumbai') {
      var temp = matchArr.filter(function(el) {
         return el.venue == 'Mumbai';
      })
      displayData(temp);
   }
   if(venue=='Banglore') {
      var temp = matchArr.filter(function(el) {
         return el.venue == 'Banglore';
      })
      displayData(temp);
   }
   if(venue=='Hyderabad') {
      var temp = matchArr.filter(function(el) {
         return el.venue == 'Hyderabad';
      })
      displayData(temp);
   }
   if(venue=='Delhi') {
      var temp = matchArr.filter(function(el) {
         return el.venue == 'Delhi';
      })
      displayData(temp);
   }
   if(venue=='Pune') {
      var temp = matchArr.filter(function(el) {
         return el.venue == 'Pune';
      })
      displayData(temp);
   }
}

var favArr = JSON.parse(localStorage.getItem('favourites')) || [];

function displayData(data) {

   tbody.innerHTML = '';

   data.forEach(function(el) {

      var tr = document.createElement('tr');

      var td1 = document.createElement('td');
      td1.innerText = el.matchNum;

      var td2 = document.createElement('td');
      td2.innerText = el.teamA;

      var td3 = document.createElement('td');
      td3.innerText = el.teamB;

      var td4 = document.createElement('td');
      td4.innerText = el.date;

      var td5 = document.createElement('td');
      td5.innerText = el.venue;

      var td6 = document.createElement('td');
      td6.innerText = 'Favourite';
      td6.style.color = 'green';
      td6.style.fontWeight = 'bold';
      td6.style.cursor = 'pointer';
      td6.addEventListener('click', function() {
         addToFav(el);
      })

      tr.append(td1, td2, td3, td4, td5, td6);
      tbody.append(tr);
   })
}

function addToFav(el) {
   
   favArr.push(el);
   localStorage.setItem('favourites', JSON.stringify(favArr));
}