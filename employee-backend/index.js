// steps to generate json-server

// 1.import json-server
const jsonServer=require('json-server')

// 2. create our own server to run json file

const empServer=jsonServer.create()

// 3. generate a middleware to use in json server
const middleware=jsonServer.defaults()

// 4.set up path for db.json

const router=jsonServer.router("db.json")

// 5.set up port for server
const port=3000

//6. use middleware and router in server
empServer.use(middleware)
empServer.use(router)

// 7. server listen/run to request
empServer.listen(port,()=>{
    console.log("employee portal server started at port no:"+port);
})
