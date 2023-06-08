import React ,{useState , useEffect}from 'react'
import { getLectureAPI } from '../../services/api'
import { useNavigate } from 'react-router-dom'
const Instructor = () => {
    const [courseList , setcourseList] = useState()
    useEffect(()=>{
        getLecture()
    },[])
    const navigate = useNavigate()
    const getLecture = async()=>{
        let userdata = localStorage.getItem("name")
        const getAllLecture = await getLectureAPI({name:userdata})
        if(getAllLecture.data.statusCode ===200){
            setcourseList(getAllLecture.data.message)
        }
        if(getAllLecture.data.statusCode ===403){
          alert("Invalid User")
          navigate("/")
      }
    }
  return (
    <div>
        <div className="backround">

      <div className="tableArea">
        <div className="admintext">INSTRUCTOR PANEL</div>
        
        {console.log(courseList)}
        <div className="tablecontainer">
          <table>
            <tr>
              <th>Course Name</th>
              <th>Date </th>
            </tr>
            {courseList?.length > 0
              ? courseList.map((data, i) => (
                  <tr>
                    <td>{data.coursename}</td>
                    {data.batches.map((datefield,i)=>(
                        <td>{datefield.date}</td>
                    ))}
                  </tr>
                ))
              : "no Data"}
          </table>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor
