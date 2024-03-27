import { mentor, student } from "../Models/schemas.js";


export const createMentor=async(req,res)=>{

try {

  const Teachmentor=new mentor(req.body)

    await Teachmentor.save()

  res.status(200).json({msg:'mentor created successfully',data:Teachmentor})  
} catch (error) {
    console.log(error);
}


}
//
export const createStudent=async(req,res)=>{
try {
const newStudent=await new student(req.body)
await newStudent.save()


res.status(200).json({
  msg:"students created successfully",data:newStudent
})
} catch (error) {
  console.log(error);
}



}


//


export const getAll=async(req,res)=>{
  
try {
  const all=await mentor.find()

res.status(200).json({msg:"data fetched successfully",data:all})
} catch (error) {
  console.log(error);
}
}

//

export const editMentor=async(req,res)=>{
  try {
    const Id=req.params.id
   const{MentorName,Mail,skill}=req.body
    console.log(Id);
const updated=await mentor.updateOne({_id:Id},{MentorName,Mail,skill})
const Udata=await mentor.findById(Id)
    res.status(200).json({msg:"updated successfully",data:updated,updated_data:Udata})
  } catch (error) {
    console.log(error);
  }



}
//

export const getAllStudent=async(req,res)=>{
  try {
    const AllStudents=await student.find()
    res.status(200).json({msg:"All students fetched successfully",data:AllStudents})
  } catch (error) {
    console.log(error);
  }
}

// assign students to mentor

export const assignStudents=async(req,res)=>{
try {
const mentorID=req.params.mentorId
  console.log(mentorID)
  const{students}=req.body

const updateMentor=await mentor.updateOne({_id:mentorID},{students})  
res.status(200).json({data:updateMentor})
} catch (error) {
  console.log(error);
}
}

//
export const assignMentor=async(req,res)=>{
  try {
  const studentID=req.params.studentId
    console.log(studentID)
    const{mentor}=req.body
  
  const updateMentor=await student.updateOne({_id:studentID},{mentor})  
  res.status(200).json({msg:"mentor assigned successfully",data:updateMentor})
  } catch (error) {
    console.log(error);
  }
  }

 //
 
 export const getMentorwithStudents=async(req,res)=>{
try {
const id=req.params.id  
const getData=await mentor.findById(id).populate("students")
res.status(200).json({
  msg:'fetched successfully',
  data:getData
})
} catch (error) {
  console.log(error);
}
}

//


export const getPreviousMentor=async(req,res)=>{
  try {
    const id=req.params.id
const Data=await student.findById(id).populate("mentor")
console.log(Data);
res.status(200).json({msg:"fetched successfully",data:Data})
  } catch (error) {
    console.log(error);
  }
}