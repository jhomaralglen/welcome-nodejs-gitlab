require('dotenv').config();
module.exports = function(app) {
  /**
   * API routes
   */
  app.get('/', function(req, res) {
      res.json({
        message: `Welcome to Your App! Environment: ${process.env.ENVIRONMENT} -> Version: ${process.env.VERSION} -> Location: ${process.env.LOCATION} -> Update GitLab: 001`
      })
  });
  
  /**
   * Health Check route 
   * */  
  app.get('/health', function(req, res) {
    res.json({
      status: 'Healthy'
    })
});
};
