var Task = require("../models/task");


module.exports = {
    // This method handles retrieving Tasks from the db
    index: function(req, res) {
      var query;
      if (req.query) {
        query = req.query;
      }
      else {
        query = req.params.id ? { _id: req.params.id } : {};
      }
      Task.find(query)
        .then(function(doc) {
          res.json(doc);
        }).catch(function(err) {
          res.json(err);
        });
    },
    // This method handles creating new Tasks
    create: function(req, res) {
      Task.create(req.body).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
    },
    // This method handles updating Tasks
    update: function(req, res) {
      Task.update({
        _id: req.params.id
      },
        req.body
      ).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
    },
    // This method handles deleting Tasks
    destroy: function(req, res) {
      Task.remove({
        _id: req.params.id
      }).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
    }
  };