const gamePlace = document.querySelector(".game-area");
axios({
    method: 'get',
    url: 'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=55f4d880-d819-11ec-8752-8b921028c070&season_id=1243&league_id=281&date_from=2021-02-17&date_to=2021-02-25',
  })
    .then(function (response) {
        console.log(response.data.data);
        response.data.data.forEach(element => {
            gamePlace.innerHTML+=`<div class="game">
            <div class="home">
                <span>${element.home_team.name}</span><img src="${element.home_team.logo}">
            </div>
            <div class="score">
                <span>${element.stats.ft_score}</span>
            </div>
            <div class="away">
                <img src="${element.away_team.logo}"><span>${element.away_team.name}</span>
            </div>
        </div>`
        });
    });