const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// example code
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

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  const categoryData = await category.findAll({
    include: [{ model: Product },
  })
  res.status(200).json(categoryData);
  } catch (err) {
  res.status(500).json(categoryData);
  }
});






});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
