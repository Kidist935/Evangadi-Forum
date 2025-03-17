function pQuestion(req, res){
    res.send("new question")
}
function gQuestion(req, res){
    res.send("all question")
}


function sQuestion(req, res){
    
    const qId = req.params.question_id;
    // call mysql using qId and send the result with res.send
    res.send(`single question : ${qId}`);
}


// export as an object
module.exports ={pQuestion, gQuestion, sQuestion}