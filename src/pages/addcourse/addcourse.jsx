import React,{useState} from 'react'
import "./addcourse.css"
import { createCourseAPI } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';

const Addcourse = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("sdadsa", inputs);
    let createCource = await createCourseAPI(
      inputs
    )
    if(createCource.data.statusCode === 200){
      alert("Course Created")
      navigate('/admin')
    }
    if(createCource.data.statusCode ===403){
      alert("Invalid User")
      navigate("/")
  }
    // const saveproduct = await saveProductApi(inputs);
    // alert(inputs);
  };
  return (
    <div>
      <div className="box">
        <div className="form">
        <div className="formbody">
            <div className="body1">
              <table style={{ display: "grid", gap: "8vh" }}>
                <thead>Courese Name:</thead>
                <thead>Level:</thead>
                  <thead>Description:</thead>
                <thead>Upload Image:</thead>
              </table>
            </div>
            <div className="body2">
              <form onSubmit={handleSubmit} className="productform">
              <label>
                  <input
                    type="text"
                    name="coursename"
                    placeholder="Course Name"
                    value={inputs.coursename}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="Level"
                    name="level"
                    value={inputs.level}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="file"
                    placeholder="Image"
                    name="image"
                    accept='image/*'
                    value={inputs.image}
                    onChange={handleChange}
                  />

                </label>
                <div
                  className="button"
                  style={{ display: "grid", justifyContent: "end" }}
                >
                  <input type="submit" className="submitButton" />
                </div>
              </form>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Addcourse
