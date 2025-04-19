import jwt from 'jsonwebtoken'

function authMiddleware (req, res, next){
    const token = req.headers.authorization

    if(!token) {return res.status(401).json({msg:"No token provided"})}

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){ return res.status(401).json({msg:"Invalid Token Login Again"})}
        req.userId = decoded.id
        next()
    }
    )
}

export default authMiddleware;