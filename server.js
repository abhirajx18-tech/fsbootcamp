import express from 'express'


const app = express()

const port = 4000

app.use(express.json())



// app.get('/', (req,res)=>{
//     res.send("<h1>Welcome to Backend...</h1>")
// })




// app.get('/about', (req,res)=>{
//     res.send('<h1>This is About Page</h1>')
// })





// let students = [
//     {
//         name:'Ankit',
//         age:27

//     },
//     {
//         name:'Rahul',
//         age:23
//     },
//     {
//         name:'Priya',
//         age:40
//     }
// ]


let students = ['ankit', 'Rahul', 'Priya']

 
app.get('/getStudents', (req,res)=>{
    res.json({
        data:students,
        success:true,
        message: 'data fetched successfully'
    })
})


  app.post('/createStudent', (req,res)=>{
            const name = req.body.name
            students.push(name)

            console.log(students)

            res.json({
                success:true,
                message:'data create successfully',
                students
            })
  })


app.put('/updatestudent',(req,res)=>{
    const {name,newName} = req.body
    let index = students.indexOf(name)
    students[index] = newName
    res.json({
        success:true,
        message:'data updated successfully',
        students
    })
})    
 app.delete('/deleteStudent',(req,res)=>{
    const {name} = req.body
    let index = students.indexOf(name)
    students.splice(index,1)
    res.json({
        success:true,
        message:'data deleted successfully',
        students
    })
 })

// API 1 'page/job'

// API 2 'page/contact'
 

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})