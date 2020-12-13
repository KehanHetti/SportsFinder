
var results = document.getElementById("results");
for(sport of sports){
    results.innerHTML += `
    <div>
      <a href = "sport.html?sportName=${sport.name}">
        <h1>${sport.name}</h1>
        <img src = "${sport.image}"/>
      </a>
    </div>
  `;
}