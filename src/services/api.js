import axios from "axios";

const url = "https://backend1-api.vercel.app";



export const addproduct =async (productdata)=>{
    console.log(productdata);
 return await axios.post(`https://backend1-api.vercel.app/shoes`,productdata);
 }
export const addsignup =async (signupdata)=>{
    console.log(signupdata);
 return await axios.post(`${url}/signup`,signupdata);
 }
 export const addcheckout =async (checkouttdata)=>{
  console.log(checkouttdata);
return await axios.post(`${url}/checkout`,checkouttdata);
}



export const getshoes= async ()=>{
return await axios.get(`https://backend1-api.vercel.app/viewproducts`)
}

export const deleteShoe = async (productId) => {
  return await axios.delete(`${url}/viewproducts/${productId}`);
};






