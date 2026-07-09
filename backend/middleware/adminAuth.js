import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
  try {
    console.log("Headers:",req.headers);

    const token = req.headers.token;

    console.log("Received Token:",token);
    console.log("Type:", typeof token);

    if (!token) {
      return res.json({success:false, message:"Not token received"}); 
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log("Decoded:",decoded);

    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({success:false,message:"Not Authorised "}); 
    }
    next()
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message});
    
  }
};
export default adminAuth;