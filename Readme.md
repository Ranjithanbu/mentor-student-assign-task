## Mentor student assigning task 

this task is about assigning students to  mentor ,i have done this using node-js and express and mongodb database   


#### create a new mentor 


to create a new mentor we have to make post call to this URL
`https://mentor-student-assign-task.onrender.com/api/createMentor`

and pass the payload like this format  
`{

"MentorName":"anything",
"Mail":"something@gmail.com",
"skill":"html&css"

}`

#### API for  create a new student

have to make post call for below API 

`https://mentor-student-assign-task.onrender.com/api/createStudent`

and pass the payload like this format  

`{
"StudentName":"anythiing",
"Mail":"something@gmail.com"

}`


#### get all  mentor

to get all mentor we have to make get call to this API `https://mentor-student-assign-task.onrender.com/api/getAll`

#### API for get all students

to get all mentor we have to make get call to this API

`https://mentor-student-assign-task.onrender.com/api/getStudent`


#### API for assigning student to mentor

we have to make put call for this API

`https://mentor-student-assign-task.onrender.com/api/assignStudents/mentor-ID`

we  can pass mentor id in dynamic manner at mentor-ID end point
##### example


`https://mentor-student-assign-task.onrender.com/api/assignStudents/65f66de39be148352c4482d6`

and we have to pass the student ID as a payload through the body in json format like this

`{
    "students":["65f65c817d24b3703f2be5e2","65f65e9a80ab49a9e9e1b025"]
}`


#### API for all students for a particular mentor

we have to make a get call to this API
`https://mentor-student-assign-task.onrender.com/api/getMentorwithStudents/Mentor Id`

we can pass dynamic Mentor id for example
`https://mentor-student-assign-task.onrender.com/api/getMentorwithStudents/65f66de39be148352c4482d6` 



#### API for assigning mentor for particular student

we have to make put call for this API

`https://mentor-student-assign-task.onrender.com/api/assignMentor/student ID

we  can pass students id in dynamic manner at student-Id end point

`https://mentor-student-assign-task.onrender.com/api/assignMentor/65f65e9a80ab49a9e9e1b025`

and we have to pass the mentor ID as a payload through the body in json format like this

`{
    "mentor":"65f66de39be148352c4482d6"
}`


#### API for Previously assigned mentor for particular student 

`https://mentor-student-assign-task.onrender.com/api/getPreviousMentor/student-Id`

we  can pass students id in dynamic manner at student-Id end point

`https://mentor-student-assign-task.onrender.com/api/getPreviousMentor/65f65bfc7d24b3703f2be5d8`

