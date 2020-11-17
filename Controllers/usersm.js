const asyncHandler = require("../helpers/asyncHandler");
const errorHandler = require("../helpers/errorHandler");
const UsermSchema = require("../Models/Usersm");
const MessageSchema = require("../Models/Messages");
exports.user = asyncHandler(async (req, res, next) => {
  const { name, password } = req.body;
  let users = await UsermSchema.findOne({ name });

  if (users === null) {
    users = await UsermSchema.create({ name, password });

    res.status(200).json({ success: true, data: "User created" });
  } else {
    users = await UsermSchema.findOne({ name, password }).select("+password");
    if (users === null) {
      return next(new errorHandler("Wrong password", 404));
    }
    res.status(200).json({ success: true, data: "Logged in" });
  }
});

exports.addMessage = asyncHandler(async (req, res, next) => {
  const user = await UsermSchema.findOne({ name: req.body.name });
  if (!user) {
    return next(new errorHandler("User does not exist", 401));
  }

  await MessageSchema.create({
    name: req.body.name,
    message: req.body.message,
  });
  res.status(200).json({ success: true });
});

exports.getMessages = asyncHandler(async (req, res, next) => {
  const messages = await MessageSchema.find()
    .select("+name")
    .select("+message")
    .select("-_id");

  if (!messages) {
    return next(new errorHandler("No messages", 400));
  }
  res.status(200).json({ success: true, data: messages });
});
