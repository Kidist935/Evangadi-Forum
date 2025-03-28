const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')


async function authMiddleware (req, res, next){

const authHeader= req.headers.authorization;

if(!authHeader || !authHeader.startsWith('Bearer ')){

return res.status(StatusCodes.UNAUTHORIZED).json({message:"Authentication invalid"})
}
const token = authHeader.split(' ')[1]


try {
    const {username, userid} = jwt.verify(token, process.env.JWT_SECRET)
    // create request object
    req.user = { username, userid }
   next()

} catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({message:"Authentication invalid"}) 
}

}
module.exports = authMiddleware