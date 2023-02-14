const Category = require('../models/Category');

exports.createOneCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

// exports.getAllCategories = async (req, res) => {
//     try {
//       const categories = await Category.find();
  
//       res.status(200).render('categories', {
//         categories,
//         pageName: 'categories',
//       });
//     } catch (error) {
//       res.status(400).json({
//         status: 'fail',
//         error,
//       });
//     }
//   };
