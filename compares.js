function compare(){

//Contestant Number 1
    let score1 = Number(document.getElementById("score1").value);
    let Score1 = score1 * 0.20

    let score2 = Number(document.getElementById("score2").value);
    let Score2 = score2 * 0.30

    let score3 = Number(document.getElementById("score3").value);
    let Score3 = score3 * 0.50

    let result1 = Score1 + Score2 + Score3
    // console.log(result1)

//Contestant Number2
    let score4 = Number(document.getElementById("score4").value);
    let Score4 = score4 * 0.20

    let score5 = Number(document.getElementById("score5").value);
    let Score5 = score5 * 0.30

    let score6 = Number(document.getElementById("score6").value);
    let Score6 = score6 * 0.50

    let result2 = Score4 + Score5 + Score6
    // console.log(result2)

//Contestnat Number3
    let score7 = Number(document.getElementById("score7").value);
    let Score7 = score7 * 0.20

    let score8 = Number(document.getElementById("score8").value);
    let Score8 = score8 * 0.30

    let score9 = Number(document.getElementById("score9").value);
    let Score9 = score9 * 0.50


    let result3 = Score7 + Score8 + Score9
    // console.log(result3)

//Ranking
    if (result1 > result2 && result1 > result3) {
        console.log("Winner🏆: Contestant Number 1 With An Average Score Of", result1,"Percent");

        if (result2 < result1 && result2 > result3){
            console.log("Second Runner Up🥈: Contestant Number 2 With An Average Score Of", result2,"Percent");
            
                if (result3 < result1 && result3 < result2){
            console.log("Third Runner Up🥉: Contestant Number 3 With An Average Score Of", result3,"Percent");
            }
        }
        else if (result3 > result2 && result3 < result1){
            console.log("Second Runner Up🥈: Contestant Number 3 With An Average Score Of", result3,"Percent");

                if (result2 < result1 && result2 < result3){
            console.log("Third Runner Up🥉: Contestant Number 2 With An Average Score Of", result2,"Percent");
            }
            
        }
         
    }
    else if (result2 > result1 && result2 > result3) {
        console.log("Winner🏆: Contestant Number 2 With An Average Score Of", result2,"Percent");

        if (result1 < result2 && result1 > result3){
            console.log("Second Runner Up🥈: Contestant Number 1 With An Average Score Of", result1,"Percent");

            if (result3 < result1 && result3 < result2){
            console.log("Third Runner Up🥉: Contestant Number 3 With An Average Score Of", result3,"Percent");
            }
        }
        else if (result3 < result2 && result3 > result1){
            console.log("Second Runner Up🥈: Contestant Number 3 With An Average Score Of", result3,"Percent");

            if (result1 < result2 && result1 < result3){
            console.log("Third Runner Up🥉: Contestant Number 1 With An Average Score Of", result1,"Percent");
            }
        }
        
    } 
    else if (result3 > result1 && result3 > result2) {
        console.log("Winner🏆: Contestant Number 3 With An Average Score Of", result3);

        if (result1 < result3 && result1 > result2){
            console.log("Second Runner Up🥈: Contestant Number 1 With An Average Score Of", result1);

            if (result2 < result1 && result2 < result3){
            console.log("Third Runner Up🥉: Contestant Number 3 With An Average Score Of", result2);
            }
        }
        if (result2 < result3 && result2 > result1){
            console.log("Second Runner Up🥈: Contestant Number 2 With An Average Score Of", result2);

            if (result1 < result2 && result1 < result3){
            console.log("Third Runner Up🥉: Contestant Number 1 With An Average Score Of", result1);
            }
        }
    } 
    
        
    
    
}