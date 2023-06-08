import axios from "axios";

const urluser='http://localhost:3001';
let token = localStorage.getItem('token')

// const config = {
//     headers: {
//         "Content-type": "application/json",
//          "authorization": `Bearer ${token}`,
//     },
// }; 
const config = {
    headers: { "Authorization": `Bearer ${token}` }
  };
export const getAllCourseAPI = async(count)=>{
    console.log(token)
    return await axios.post(`${urluser}/course/getall`, count,{ headers: {"Authorization" : `Bearer ${token}`}})
}
export const createCourseAPI = async(courseObject)=>{
    return await axios.post(`${urluser}/course/create`,courseObject, { headers: {"Authorization" : `Bearer ${token}`}})
}
export const assignCourseAPI = async(assignObject)=>{
    return await axios.post(`${urluser}/course/assign`,assignObject, { headers: {"Authorization" : `Bearer ${token}`}})
}
export const registerInstructorAPI = async(registerInstructoreObject)=>{
    return await axios.post(`${urluser}/users/registerInstructors`,registerInstructoreObject, { headers: {"Authorization" : `Bearer ${token}`}})
}
export const loginAPI = async(loginBody)=>{
    return await axios.post(`${urluser}/login`,loginBody)
}
export const getLectureAPI = async(body)=>{
    return await axios.post(`${urluser}/course/getlecture`,body,{ headers: {"Authorization" : `Bearer ${token}`}})
}
export const createUserAPI = async(body)=>{
    return await axios.post(`${urluser}/users/registerAdmin`,body)
}