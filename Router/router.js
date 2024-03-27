import Express  from "express";
import { assignMentor, assignStudents, createMentor,createStudent,editMentor,getAll, getAllStudent, getMentorwithStudents, getPreviousMentor } from "../Controller/controller.js";


const router=Express.Router()
router.post('/createMentor',createMentor)
router.post('/createStudent',createStudent)
router.get('/getAll',getAll)
router.put('/editMentor/:id',editMentor)
router.get('/getStudent',getAllStudent)
router.put('/assignStudents/:mentorId',assignStudents)
router.put('/assignMentor/:studentId',assignMentor)
router.get('/getMentorwithStudents/:id',getMentorwithStudents)
router.get('/getPreviousMentor/:id',getPreviousMentor)
export default router;