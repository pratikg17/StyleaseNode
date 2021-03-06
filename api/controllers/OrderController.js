var request = require('request');
module.exports = {
  generateExcel: function (req, res) {
        Order.generateExcel(res);
    },
    save: function (req, res) {
        if (req.body) {
            if (req.session.user) {
                console.log("userss", req.session.user._id);
                req.body.user = req.session.user._id;
            } else {
                req.body.user = null;
            }
            Order.saveData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },
    getOne: function (req, res) {

        if (req.body) {
            Order.getOne(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },

    getOrderByUser: function (req, res) {
        if (req.body) {
            if (req.session.user) {
                req.body.user = req.session.user._id;
                console.log("req", req.body.user);
                Order.getOrderByUser(req.body, res.callback);
            } else {
                res.json({
                    value: false,
                    data: "User not logged in"
                });
            }
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },

    getOrderById: function (req, res) {
        if (req.body) {
            Order.getOrderById(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },

    delete: function (req, res) {
        if (req.body) {
            console.log(req.body);
            Order.deleteData(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },

    getAll: function (req, res) {
        function callback(err, data) {
            Global.response(err, data, res);
        }
        if (req.body) {
            Order.getAll(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },
    getLimited: function (req, res) {
        function callback(err, data) {
            Global.response(err, data, res);
        }
        if (req.body) {
            if (req.body.pagesize && req.body.pagenumber) {
                Order.getLimited(req.body, res.callback);
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
    getLimitedByUser: function (req, res) {
        function callback(err, data) {
            Global.response(err, data, res);
        }
        if (req.body) {
            if (req.body.pagesize && req.body.pagenumber) {
                if (req.session.user) {
                    req.body.user = req.session.user._id;
                    Order.getLimitedByUser(req.body, res.callback);
                } else {
                    res.json({
                        value: false,
                        data: "User Not logged in"
                    });
                }

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

    getAllDetails: function (req, res) {
        function callback(err, data) {
            Global.response(err, data, res);
        }
        if (req.body) {
            Order.getAllDetails(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },



    getPickupreminder: function (req, res) {
        if (req.body) {
            Order.getPickupreminder(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    },

};