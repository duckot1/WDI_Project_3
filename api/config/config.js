module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost:27017/clubmate',
  secret: process.env.SECRET || 'gosh this is so secret... shhh...'
};
