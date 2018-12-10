const express = require("express");
const Article = require("../models/article_schema");

const router = express.Router();

//Get all of the data from the database
router.get('/articles', (req, res, next) => {
  Article
    .find()
    .sort({date: -1})
    .exec()
    .then(articles => {
      if (articles.length < 1) {
        let errorMsg = `articles not found!`
        return res.status(409).json(errorMsg);
      } else {
        return res.status(200).json(articles);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Post some data to the database
router.post('/article', (req, res, next) => {
  let newArticle = new Article({
    title: req.body.title,
    body: req.body.body
  });
  return newArticle
    .save()
    .then(article => {return res.status(200).json(article)})
    .catch(err => {
      return res.status(500).json(err);
    });
});

//Delete some data from the database
router.delete('/article/:id', (req, res, next) => {
  let articleId = req.params.id;
  Article
    .deleteOne({_id: articleId})
    .exec()
    .then(article => {return res.status(200).json({success: true})})
    .catch(err => {return res.status(500).json(err)});
});



module.exports = router;