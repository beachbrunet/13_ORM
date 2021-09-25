const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint --example code below
// router.get('/', async (req, res) => {
//   try {
//     const driverData = await Driver.findAll({
//       include: [{ model: License }, { model: Car }],
//     });
//     res.status(200).json(driverData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// find all tags
// be sure to include its associated Product data
router.get("/", (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(tagData);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", (req, res) => {
  try {
    const tagData = await tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: "Not found with this id" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", (req, res) => {
res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});







// update a tag's name by its `id` value
router.put("/:id", (req, res) => {





});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  try {
    const catagoryData = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!categoryData) {
      res.status(404).json({ message: "Not found with this id" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});





});

module.exports = router;
