module.exports = (req, res, next) => {
  const timezone = "America/Sao_Paulo";
  const now = new Date().toLocaleString("en-US", { timeZone: timezone });
  const hour = new Date(now).getHours();

  if (hour >= 8 && hour < 17) {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Acesso permitido apenas entre 08:00 e 17:00." });
  }
};
