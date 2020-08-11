

module.exports = (app) => {

  app.post('/user/login', async (req, res) => {
    console.log(res);
    // const email = req.body.user.email;
    // const password = req.body.user.password;
    // try {
    //   const authServiceInstance = new AuthService();
    //   const { user, token } = await authServiceInstance.Login(email, password);
    //   return res.status(200).json({ user, token }).end();
    // } catch(e) {
    //   return res.json(e).status(500).end();
    // }
  })
};
