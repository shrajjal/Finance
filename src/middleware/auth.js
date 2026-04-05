
const jwt = require("jsonwebtoken");

module.exports = (roles=[]) => (req,res,next)=>{
 const token = req.headers.authorization;
 if(!token) return res.status(401).send("No token");

 try{
  const user = jwt.verify(token, process.env.JWT_SECRET);
  if(roles.length && !roles.includes(user.role)) return res.status(403).send("Forbidden");
  req.user = user;
  next();
 }catch(e){
  res.status(401).send("Invalid token");
 }
};
