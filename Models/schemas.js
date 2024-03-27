import mongoose from "mongoose";



const mentorSchema=mongoose.Schema({


MentorName:String,
Mail:String,
skill:String,
students:[{
   type:mongoose.Schema.Types.ObjectId,
   ref:'students'
}]
})

const StudentSchema=mongoose.Schema({

    
    StudentName:String,
    Mail:String,
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Mentors'
     }
    
    })


 export const mentor=mongoose.model('Mentors',mentorSchema)
export const student=mongoose.model('students',StudentSchema)
