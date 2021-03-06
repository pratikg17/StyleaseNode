
module.exports = {
  sort: function(req, res) {
      function callback(err, data) {
          Config.GlobalCallback(err, data, res);
      }
      if (req.body) {
          ConfigTwo.sort(req.body, callback);
      } else {
          res.json({
              value: false,
              data: "Invalid call"
          });
      }
  },

  save: function(req, res) {
    if (req.body) {
      ConfigTwo.saveData(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },

  getOne: function(req, res) {

    if (req.body) {
      ConfigTwo.getOne(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },

  delete: function(req, res) {
    if (req.body) {
      ConfigTwo.deleteData(req.body, res.callback);
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
      ConfigTwo.getAll(req.body, res.callback);
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },

  getLimited: function(req, res) {
    if (req.body) {
      if (req.body.pagenumber && req.body.pagenumber !== "" && req.body.pagesize && req.body.pagesize !== "") {
        ConfigTwo.getLimited(req.body, res.callback);
      } else {
        res.json({
          value: false,
          data: "Please provide parameters"
        });
      }
    } else {
      res.json({
        value: false,
        data: "Invalid Request"
      });
    }
  },

  /* make the API call */
  // facebook:getFbData('1745055379070800', '/me/friends', function(data){
  //     console.log(data);
  // })


};
