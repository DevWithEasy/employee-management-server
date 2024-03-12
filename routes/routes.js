const authRouter = require("./authRoute")
const sectionRouter = require('./sectionRoute')
const employeeRouter = require('./employeeRoute')
const attendanceRouter = require('./attendaceRoute')

const routes = [
  {
    path: "/api/auth",
    handler : authRouter
  },
  {
    path: "/api/section",
    handler : sectionRouter
  },
  {
    path: "/api/employee",
    handler : employeeRouter
  },
  {
    path: "/api/attendance",
    handler : attendanceRouter
  },
  {
    path: "/",
    handler : (req, res) =>{
      res.send("Alhamdulillah.Server is ready !")
    }
  }
]

const applyRoutes = (app)=>{
  routes.map(r=>{
    if(r.path === "/"){
      app.get(r.path,r.handler)
    }else{
      app.use(r.path,r.handler)
    }
  })
}

module.exports = applyRoutes