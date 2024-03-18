module.exports = (req, res, next) => {
  const now = new Date();
  const hour = now.getHours();
  console.log(now)
  console.log(hour)

  if (hour >= 8 && hour < 0) {
    next();
  } else {
    res.status(403).json({ message: 'Acesso permitido apenas entre 08:00 e 17:00.' });
  }
};
