const userModal = require("../modal/userModal");
const userController = {
  getall: async (req, res) => {
    try {
      let data = await userModal.find();
      res.status(200).json({ message: "sucsess", data });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addproduct: async (req, res) => {
    try {
      const check = await userModal.findOne({ email: req.body.email });
      if (check) {
        return res.status(200).json({ message: "failure" });
      } else {
        await userModal.create({
          name: req.body.name,
          email: req.body.email,
          address: req.body.address,
          age: req.body.age,
        });
        let data = await userModal.find();
        return res.status(200).json({ message: "sucsess", data });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteproduct: async (req, res) => {
    const { userIds } = req.body;
    try {
      const result = await userModal.deleteMany({ _id: { $in: userIds } });
      if (result.deletedCount === 0) {
        return res
          .status(400)
          .json({ message: "Không tìm thấy bất kỳ User nào." });
      }
      const data = await userModal.find();
      return res.status(200).json({ message: "Xóa thành công.", data });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Đã có lỗi xảy ra. Vui lòng thử lại sau." });
    }
  },
  updateproduct: async (req, res) => {
    try {
        const check = await userModal.findOne({ email: req.body.email });
        if (check) {
          return res.status(200).json({ message: "failure" });
        }else{
            const name = req.body.name;
            const email = req.body.email;
            const address = req.body.address;
            const age = req.body.age;
      
            const update = await userModal.updateOne(
              { _id: req.params.id },
              {
                name,
                email,
                address,
                age,
              }
            );
            let data = await userModal.find();
            res.status(200).json({ message: "sucsess", data });
        }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  searchproduct: async (req, res) => {
    try {
      let data = await userModal.find();
      var title = req.query.searchbyname;
      var dataa = data.filter(function (item) {
        return item.name.toLowerCase().indexOf(title.toLowerCase()) !== -1;
      });

      res.status(200).json(dataa);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
