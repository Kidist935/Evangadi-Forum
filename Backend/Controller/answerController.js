function retrieveAnswer(req, res){

    const quID= req.params.question_id;
    // call mysql using qId and send the result with res.send
    res.send(`specific answer: ${quID}`);
}

function submitAnswer(req,res){
    res.send("submit answer")
}


// export as an object
module.exports ={retrieveAnswer, submitAnswer }