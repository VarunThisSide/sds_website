const Blog = require('../models/blog');
const path = require('path');
const fs = require('fs');

// Get all blog posts
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single blog post by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new blog post
exports.createBlog = async (req, res) => {
  let imageUrl = '';
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    imageUrl: imageUrl
  });
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
  try {
    let updateData = req.body;
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
