// signupController.js
import  user  from '../model/user.js';



const signup = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  try {
    // Check if user already exists
    
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new user({ email, password });
    console.log(req.body)
    await newUser.save();

    // Handle successful signup, e.g., generate a token
    const token = generateToken(newUser);

    res.status(201).json({ message: 'Signup successful', token });
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUser = async (req,res) => {

    try{

        const users=await user.find();
        res.json(users)
        res.end();
    }
    catch(err){

    }

}

export {signup,getUser};
