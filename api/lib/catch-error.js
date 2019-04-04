module.exports = function catchError(promise) {
  return promise.then(result => [null, result], err => [err]);
};
