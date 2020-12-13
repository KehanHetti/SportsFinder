var searchBar = document.getElementById("searchBar");
var results = document.getElementById("results");
var searchContainer = document.getElementById("searchContainer");
searchBar.addEventListener("keyup", function () {
  var matchingSports = [];
  results.innerHTML = "";
  /*
  for (x = 0; x < sports.length; x++) {
    if (sports[x].toLowerCase().includes(searchBar.value.toLowerCase())) {
      matchingSports.push(sports[x]);
    }
  }
  */
  for (const sport of sports) {
    if (sport.name.toLowerCase().includes(searchBar.value.toLowerCase())) {
      matchingSports.push(sport);
    }
  }
  if (matchingSports.length > 5) {
    matchingSports.splice(5);
  }

  /*
<a href="sport.html?sportName=Basketball">Basketball</a>
<a href="sport.html?sportName=Soccer">Soccer</a>
*/

  for (const sport of matchingSports) {
    results.innerHTML += `<li class = "suggestion"><a href ="sport.html?sportName=${sport.name}">${sport.name}</a></li>`;
  }
  if(matchingSports.length > 0){
    searchContainer.classList.add("hasResults");
  }
  else{
    searchContainer.classList.remove("hasResults")
  }

  // Take the list of matchingSports, loop through them and add them to the page via the "results" element.
});
//looping sports Now we are finding a single sport and we must match the sports if the sports match then we make another array
