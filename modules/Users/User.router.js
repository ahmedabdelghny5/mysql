const userRouter = require('./User.contoller');

const router = require('express').Router();



router.get('/getalluser',userRouter.getAllUser);
router.get('/AlluserwithProduct',userRouter.getAllWithProduct)
router.post('/adduser',userRouter.addUser);
router.delete('/deleteuser',userRouter.deleteUser);
router.put('/updateuser',userRouter.updateUser);
router.get('/searchuser',userRouter.searchUser);
router.get('/serachById',userRouter.serachById)





module.exports = router