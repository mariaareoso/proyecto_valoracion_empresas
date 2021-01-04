const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function validateAuth (req, res, next){
  try{
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, JWT_SECRET);
    console.log(decodedToken);
    const { id, name } = decodedToken;
    
    req.auth = { id, name };
    next();
  }catch(error) {
    console.log(error);
    res.status(401);
    res.send('Tienes que estar loggeado');
  }
}

module.exports = validateAuth;