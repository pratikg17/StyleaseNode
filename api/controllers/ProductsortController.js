var request = require('request');
module.exports = {

  save: function(req, res) {
    if (req.body) {
      Productsort.saveData(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },
  getOne: function(req, res) {

    if (req.body) {
      Productsort.getOne(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },

  delete: function(req, res) {
    if (req.body) {
      console.log(req.body);
      Productsort.deleteData(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },

  getAll: function(req, res) {
    function callback(err, data) {
      Global.response(err, data, res);
    }
    if (req.body) {
      Productsort.getAll(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },
  getLimited: function(req, res) {
      function callback(err, data) {
          Global.response(err, data, res);
      }
      if (req.body) {
          if (req.body.pagesize && req.body.pagenumber) {
              Productsort.getLimited(req.body, res.callback);
          } else {
              res.json({
                  value: false,
                  data: "Invalid Params"
              });
          }
      } else {
          res.json({
              value: false,
              data: "Invalid Request"
          });
      }
  },

};
