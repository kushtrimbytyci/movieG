const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler");
const asyncHandler = require("../helpers/asyncHandler");
const UserSchema = require("../Models/Users");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new errorHandler("Not authorized to access this route", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await UserSchema.findById(decoded.id);
    next();
  } catch (err) {
    return next(new errorHandler("Not authorized to access this route", 401));
  }
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      next(
        new errorHandler(
          `User role "${req.user.role}" not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
