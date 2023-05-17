const router = require("express").Router();
const userController =  require("../controller/userController")

router.get('/getall',userController.getall)
router.post('/adduser',userController.addproduct)
router.delete('/deleteuser',userController.deleteproduct)
router.patch('/updateuser/:id',userController.updateproduct)
router.get('/search',userController.searchproduct)
module.exports = router