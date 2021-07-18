
var userData = require("../data/users");

module.exports = function(app){
    app.get("/api/users", function(req, res){
        res.json(userData);
    })

    app.post("/api/users", function(req, res){
        console.log("Posting");
        console.log(req.body);
        let smallestDifference = 1000;
        let bestfriend;
        userData.forEach(function(e){
            let difference = 0;
            for(let i = 0; i<10; i++){
                difference += Math.abs(parseInt(e.score[i]) - parseInt(req.body.score[i]));
            }
            if(difference < smallestDifference){
                smallestDifference = difference;
                bestfriend = e;
            }
        })
        userData.push(req.body);
        res.json(bestfriend);
    })
    
}