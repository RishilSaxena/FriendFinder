
var userData = require("../data/users");

module.exports = function(app){
    app.get("api/users", function(req, res){
        res.json(userData);
    })

    app.post("api/users", function(req, res){
        let smallestDifference = 1000;
        let bestfriend;
        userData.forEach(function(e){
            let difference = 0;
            for(let i = 0; i<10; i++){
                difference += e.stats[i] - req.stats[i];
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