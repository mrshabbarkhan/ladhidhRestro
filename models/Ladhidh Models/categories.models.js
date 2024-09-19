const { mongoose } = require("mongoose");

const Category = new mongoose.Schema(
  {
    cat_id: {
      type: String,
      required: [true, "please enter a category id"],
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", Category);

// outer.post('/add-product', async (req, res) => {
//   try {
//     const { name, categoryId, price } = req.body;

//     // Find the category by ID
//     const category = await Category.findById(categoryId);
//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     // Create a new product with the category reference
//     const newProduct = new Product({
//       name,
//       category: category._id, // Reference the category's ObjectId
//       price,
//     });

//     // Save the new product to the database
//     await newProduct.save();

//     res.status(201).json({ message: 'Product created successfully', product: newProduct });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'An error occurred while creating the product' });
//   }
// });

// module.exports = router;
