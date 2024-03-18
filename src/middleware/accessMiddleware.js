module.exports = (req, res, next) => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 8 && hour < 23) {
    next();
  } else {
    res.status(403).json({ message: 'Acesso permitido apenas entre 08:00 e 17:00.' });
  }
};
