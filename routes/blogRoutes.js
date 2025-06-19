const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const multer = require('multer');
const path = require('path');

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Get all blogs
router.get('/', blogController.getAllBlogs);

// Get a single blog by ID
router.get('/:id', blogController.getBlogById);

// Create a new blog (with image upload)
router.post('/', upload.single('image'), blogController.createBlog);

// Update a blog (with image upload)
router.put('/:id', upload.single('image'), blogController.updateBlog);

// Delete a blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
