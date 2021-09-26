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
router.get("/", async (req, res) => {
  try {
    const tagData = Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(tagData);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagData = tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tagData) {
      res.status(404).json({ message: "Not found with this id" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create a new tag
router.post("/", (req, res) => {
  tag
    .create({
      tag_name: req.body.tag_name,
    })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  tag
    .update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: { id: req.params.id },
      }
    )
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json({ message: "Not found with this id" });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  try {
    const tagData = tag.destroy({
      where: { id: req.params.id },
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
