const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }

  next();
};

module.exports = validate;
