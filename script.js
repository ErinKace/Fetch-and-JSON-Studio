// TODO: add code here
window.addEventListener('load', function(event) {

   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(jsonResponse) {
            let astronautContainer = document.getElementById('container');
            let astronautList = "";
    
            for(astronaut in jsonResponse) {
                let newAstronaut = jsonResponse[astronaut];
                let AstronautHTML =`<div class="astronaut"
                    <div class="bio">
                        <h3>${newAstronaut['firstName']} ${newAstronaut['lastName']}</h3>
                        <ul>
                        <li>Hours in space: ${newAstronaut['hoursInSpace']}</li>
                        <li class="activeStatus">Active: ${newAstronaut['active']}</li>
                        <li>Skills: ${newAstronaut['skills'].join(", ")}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${newAstronaut['picture']}">
                </div>`
                // if (newAstronaut['active']) {
                //     document.getElementsByClassName('activeStatus').style.color="green";
                // }
                astronautList += AstronautHTML;

            }
            astronautContainer.innerHTML = astronautList;
        });
    });
});