import axios from "axios";

// const url='https://horizon-backend-nn8o.onrender.com';

export const getProducts = async ()=>{
    try{
        const product = await axios.get("/products");
        return product.data;
      }catch(err){
        console.log(err)
      }
}

export const getUsers = async ()=>{
    try{
        const product = await axios.get("/user");
        return product.data;
      }catch(err){
        console.log(err)
      }
}

export const postUsers = async ( { email, password })=>{

    try {
      
        const res = await axios.post("/user/signup", { email, password });
         console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
      }


}

