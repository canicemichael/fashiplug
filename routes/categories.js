const { Category } = require("../models/category");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  console.log(res.method);
  res.status(200).send(categoryList);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });
  category = await category.save();

  if (!category) return res.status(404).send("the category cannot be created!");

  res.status(200).json(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res
      .status(404)
      .json({ message: "the category with the given ID was not found" });
  }

  res.status(200).json(category);
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    },
    {
      new: true,
    }
  );

  if (!category)
    return res
      .status(404)
      .json({ success: false, message: "category not found" });

  res.status(200).json(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  if (!category)
    return res
      .status(404)
      .json({ success: false, message: "category not found" });

  res
    .status(200)
    .json({ success: true, message: "the category has been removed" });
});

module.exports = router;
