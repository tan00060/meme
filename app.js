const app = {

    whatIRolled: [],

    init: () => {
        document.getElementById('rolling').addEventListener('click', app.getCucked);   
    },

    hello: () => {
        console.log("hello")
    },

    test: () => {
        app.whatIRolled = Math.floor(Math.random() * 101);
        console.log(app.whatIRolled)
    },

    getCucked: () => {
        app.test();

        if(app.whatIRolled < 5){
            console.log(app.whatIRolled)
            console.log("hello")

            let title = document.getElementById('title')
            let displayLoser = document.getElementById('loser')
            let displayWinner = document.getElementById('winner')
            let rolling = document.getElementById('rolling');

            displayLoser.style.display = "none";
            displayWinner.style.display = "block";
            title.style.display = "none";

            rolling.textContent = "reroll"



        }else{
            console.log(app.whatIRolled)
            console.log("sad");

            let displayLoser = document.getElementById('loser')
            let displayWinner = document.getElementById('winner')
            let title = document.getElementById('title')
            let rolling = document.getElementById('rolling');


            displayLoser.style.display = "block";
            displayWinner.style.display = "none";
            title.style.display = "none";

            rolling.textContent = "reroll"


        };

    }
};

document.addEventListener('DOMContentLoaded', app.init);
  
