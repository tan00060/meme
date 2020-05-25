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
            let fiveStars = document.getElementById("fiveStars")
            let threeStars = document.getElementById("threeStars")

            displayLoser.style.display = "none";
            displayWinner.style.display = "block";
            title.textContent = "grats on your brandon";

            rolling.textContent = "reroll"

            fiveStars.style.display = "block";
            threeStars.style.display = "none";

            
        }else{
            console.log(app.whatIRolled)
            console.log("sad");

            let random = Math.floor(Math.random() * 361);

            let displayLoser = document.getElementById('loser')
            let displayWinner = document.getElementById('winner')
            let title = document.getElementById('title')
            let rolling = document.getElementById('rolling');
            let fiveStars = document.getElementById("fiveStars")
            let threeStars = document.getElementById("threeStars")

            displayLoser.style.transform = `rotateZ(${random}deg)`

            


            title.textContent = "womp womp womp on your yuki";
            displayLoser.style.display = "block";
            displayWinner.style.display = "none";

            rolling.textContent = "reroll"

            fiveStars.style.display = "none";
            threeStars.style.display = "block";

        };

    }
};

document.addEventListener('DOMContentLoaded', app.init);
  
