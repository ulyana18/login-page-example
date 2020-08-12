var AuthService = require('../services/authservice');

module.exports = (app) => {

  app.post('/user/signup', async (req, res) => {
    console.log(req.body);
    const name = req.body.user.name;
    const email = req.body.user.email;
    const password = req.body.user.password;
    try {
      const authServiceInstance = new AuthService();
      const { user, token } = await authServiceInstance.SignUp(name, email, password);
      // return res.status(200).json({ user, token }).end();
    } catch(e) {
      return res.json(e).status(500).end();
    }
  })
};
