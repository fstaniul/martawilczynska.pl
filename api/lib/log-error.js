module.exports = async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
