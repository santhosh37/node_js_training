const userSchema = require("./../models/user");

const userController = {};

userController.list = async (request, response) => {
  const users = await userSchema.find();

  return response.json({
    statusCode: 200,
    UserList: users,
  });
};

userController.create = async (request, response) => {
  try {
    const user = await userSchema.create(request.body);
    return userController.list(request, response);
  } catch (error) {
    console.log("error.statusCode: ", error.statusCode);
    return response.json({
      statusCode: error ? error.statusCode : 500,
      message: error ? error.message : "Internal server error",
    });
  }
};

module.exports = userController;
