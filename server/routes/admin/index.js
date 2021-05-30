
module.exports = app => {
    const express = require('express')

    // 使用了express.Router
    const router = express.Router({
      mergeParams:true
    })
      // 引入了Catefory文件

     const authMiddleware = require('../../midddleware/auth')
     const resourceMiddleware= require('../../midddleware/resource') 

    router.post('/', async (req, res) => {
      // 异步请求,调用了Catefory文件的create
      const items = await req.Model.create(req.body)
      // 调用了res.send方法,这个方法的作用应该是访问接口时给的值
      res.send(items)
    })

    router.get('/',async(req,res) => {
      // const items = await req.Model.find().populate('parent').limit(10)
      // res.send(items)
      const queryOptions = {}
      if(req.Model.modelName == 'Category'){
        queryOptions.populate = 'parent'
      }
      const items = await req.Model.find().setOptions(queryOptions)
      res.send(items)

    })

    router.get('/:id',async(req,res) => {
      const model = await req.Model.findById(req.params.id)
      res.send(model)
    })

    router.put('/:id',async(req,res) => {
      const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
      res.send(model)
    })

    router.delete('/:id',async(req,res) => {
       await req.Model.findByIdAndDelete(req.params.id)
      res.send({
        qqq: true
      })
    })
    // 路由路径+子路由组合
    app.use('/admin/api/rest/:resource',resourceMiddleware(), router)

    app.post('/admin/api/login',async (req,res) => {
      const {username,password} = req.body
      const user  = await AdminUser.findOne({username}).select('+password')
      assert(user,422,'用户名不存在')
     

      const isValid = require('bcrypt').compareSync(password,user.password)
      if(!isValid){
        return res.status(422).send({
          message: '密码错误'
        })
      }
      const token = jwt.sign({ id: user._id}, app.get('secret'))
      res.send({token})
    })

    const multer= require('multer')
    const upload= multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'), async (req,res) => {
      res.send(`http://localhost:3001/uploads/${req.file.filename}`)
    })
    app.use(async (err,req,res,next)=>{
      res.status(err.statusCode || 505).send({
        message: err.message
      })
      })
  }

