
module.exports = exports = {};

// 
exports.ncalls = function (n, callback) {
  var errs = []
    , args = []
    , count = 0
    , call = function (err, arg) {
        count += 1;
        errs.push(err);
        args.push(arg);

        if (count >= n) {
          callback(errs, args);
        }
    };

    return call;
}