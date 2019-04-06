module.exports = async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.throw(err);
  }
};
