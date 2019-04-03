import models from "../../database/models";
import jwt from "jsonwebtoken";
import env from "../../config/enviroment";

class Auth {
  static async socialAuth(req, res){
    const {id, name, email} = req.user._json;
    const payload = {email: email};

    try {
      await models.User.findOrCreate(
        {where: {profileID: id || req.user.id},
          defaults: {
            username: name,
            email: email
          }
        }
      );
      const token = jwt.sign(payload, env.appSecretKey);
      res.status(201).send({
        success: "True",
        message: "You have successfully Sign up!",
        token: `${token}`
      });

    } catch (e) {
      res.status(500).send({
        success: "False",
        message: "Something went wrong!"
      });
    }
  }
}
export default Auth;