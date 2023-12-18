import axios from "axios";

const url = "https://backend1-api.vercel.app";



export const addproduct = async (productdata) => {
  try {
    console.log("Product Data:", productdata);
    const response = await axios.post(`${url}/shoes`, productdata);
    console.log("Response:", response.data);
    return response.data;  // You might want to return some data if needed
  } catch (error) {
    console.error("Error adding product:", error.message);
    throw error;  // Rethrow the error to propagate it to the calling function/component
  }
};

export const addsignup =async (signupdata)=>{
    console.log(signupdata);
 return await axios.post(`${url}/signup`,signupdata);
 }
 export const addcheckout =async (checkouttdata)=>{
  console.log(checkouttdata);
return await axios.post(`${url}/checkout`,checkouttdata);
}



export const getshoes= async ()=>{
return await axios.get(`${url}/viewproducts`)
}

export const deleteShoe = async (productId) => {
  return await axios.delete(`${url}/viewproducts/${productId}`);
};






