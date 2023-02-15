const Course = require('../models/Course');
const User = require('../models/User');

exports.getHomePage = async (req, res) => {
  const courses = await Course.find().sort('-createdDate').limit(2);
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.countDocuments({ role: 'student' });
  const totalTeachers = await User.countDocuments({ role: 'teacher' });

  res.status(200).render('index', {
    pageName: 'index',
    courses,
    totalCourses,
    totalStudents,
    totalTeachers,
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    pageName: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    pageName: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    pageName: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    pageName: 'contact',
  });
};
