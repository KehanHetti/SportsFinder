var sportName = location.search.split("=")[1]; // location.search will be something like "?sportName=Soccer"
var currentSport = sports.find((sport) => sport.name === sportName);
var results = document.getElementById("results");
results.innerHTML = `
  <div>
    <h1>${currentSport.name}</h1>
    <img src = "${currentSport.image}"/>
    <h2>Video introduction</h2>
    <iframe 
      class = "video" 
      width="621" 
      height="350" 
      src="https://www.youtube.com/embed/${currentSport.video}" 
      frameborder="0" 
      allow="
        accelerometer; 
        autoplay; 
        clipboard-write;
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
      allowfullscreen>
     </iframe>
  </div>
  <div class ="maps">
    <div>
      <h2>Clubs near you</h2>
      <iframe
        width="500"
        height="350"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyC56VOhvAQlQRR-yUHG-1IEnIehAUXPkUU
        &q=${sportName}+Teams" allowfullscreen>
      </iframe>
    </div>
    <div>
      <h2>Equipments stores near you</h2>
      <iframe
        width="500"
        height="350"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyC56VOhvAQlQRR-yUHG-1IEnIehAUXPkUU
        &q=${sportName}+Equipment+Stores" allowfullscreen>
      </iframe>
    </div>
  </div>
`;
