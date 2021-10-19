// Assignment Live Match

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {

    }
}

var overs = prompt("Enter Overs....");
var teamA;
var teamB;
var batTeamScore = 0;
var ballTeamScore = 0;
var shorts = 0

var coin;

if (!Number(overs)) {
    console.log("Invalid Overs ");
}
else {
    teamA = prompt("Enter Team A Name");
    teamB = prompt("Enter Team B Name")
    coin = prompt("Toss Selection 0 / 1")
    console.log("Match Overs : " + overs);
    sleepFor(2000);
    console.log(teamA + " VS " + teamB);
    sleepFor(2000);
  
    if (Number(coin) <= 1) {
        
      
          
            if (Number(Math.round(Math.random() * 1)) == 1) {
                console.log(teamA + " Won the Toss Decide batting First Team A")
                console.log(teamB + " Lost the Toss Decide balling First Team B")
            }
            else  {
                console.log(teamB + " Won the Toss Decide batting First Team B")
                console.log(teamA + " Lost the Toss Decide balling First Team A")
            }
            for (var i = 1; i <= overs; i++) {
                console.log("Over Start ===============", i);
                for (var j = 1; j <= i * 6; j++) {
                    if (j > 6) {
                        break;
                    }
                    shorts = Number(Math.round(Math.random() * 6))
                    if (shorts === 0) {
                        console.log("Dot Ball " + 0);
                    }
                    else if (shorts === 1) {
                        sleepFor(1000);
                        console.log("Single Run " + shorts);
                        batTeamScore += shorts;
                    }
                    else if (shorts === 2) {
                        sleepFor(1000);
                        console.log("Double Run " + shorts);
                        batTeamScore += shorts;
                    }
                    else if (shorts === 3) {
                        sleepFor(1000);
                        console.log("Triple Run " + shorts);
                        batTeamScore += shorts;
                    }
                    else if (shorts === 4) {
                        sleepFor(1000);
                        console.log("Four " + shorts);
                        batTeamScore += shorts;
                    }
                    else if (shorts === 5) {
                        sleepFor(1000);
                        console.log("Dot Ball " + 0);
                    }
                    else if (shorts === 6) {
                        sleepFor(1000);
                        console.log("Beautifull Six " + shorts);
                        batTeamScore += shorts;
                    }
                    else {
                        console.log("Error Shorts" + shorts);
                    }
        
                }
            }
            console.log("Batting Team Score =======" + batTeamScore)
            console.log("Second Team Batting Start")
            shorts =  shorts = 0;
            for (var i = 1; i <= overs; i++) {
                console.log("Over Start ===============", i);
                for (var j = 1; j <= i * 6; j++) {
                    if (j > 6) {
                        break;
                    }
                    shorts = Number(Math.round(Math.random() * 6))
                    if (shorts === 0) {
                       
                        console.log("Dot Ball " + 0);
                    }
                    else if (shorts === 1) {
                        sleepFor(1000);
                        console.log("Single Run " + shorts);
                        ballTeamScore += shorts;
                    }
                    else if (shorts === 2) {
                        sleepFor(1000);
                        console.log("Double Run " + shorts);
                        ballTeamScore += shorts;
                    }
                    else if (shorts === 3) {
                        sleepFor(1000);
                        console.log("Triple Run " + shorts);
                        ballTeamScore += shorts;
                    }
                    else if (shorts === 4) {
                        sleepFor(1000);
                        console.log("Four " + shorts);
                        ballTeamScore += shorts;
                    }
                    else if (shorts === 5) {
                        sleepFor(1000);
                        console.log("Dot Ball " + 0);
                    }
                    else if (shorts === 6) {
                        sleepFor(1000);
                        console.log("Beautifull Six " + shorts);
                        ballTeamScore += shorts;
                    }
                    else {
                        console.log("Error Shorts" + shorts);
                    }
        
                }
            }
            console.log("Balling Team Score =======" + ballTeamScore)

            if(ballTeamScore == batTeamScore){
                console.log("Match Draw");
            }
            else if(batTeamScore > ballTeamScore)
            {
                console.log("Winner Team A")
            }
            else{
                console.log("Winner Team B")
            }
          
        
       
    }
    else {
        console.log("Error Toss Allow Numeric Value");
    }



  
}



