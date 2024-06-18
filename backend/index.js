// Import Express which runs our HTTP server
const express = require("express");
// Import Cors so that we can call this server from any other origin
const cors = require("cors");
// Import Axios for making HTTP requests
const { default: axios} = require("axios");

// Following lines of code calls server from any origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Creates a Post Endpoint for "authenticate"
app.post("/authenticate", async (req, res) => {
  // Takes a username from request body...
  const { username } = req.body;
  // and returns a user with a username and password

  try {
    // r = response
    const r = await axios.put(
        // This request fetches the user with the following username or creates one 
        // from scratch. If the user is created, the respective password will be 
        // saved to their account.
        'https://api.chatengine.io/users/',
        // Passes in required data that endpoint needs
        { username: username, secret: username, first_name: username },
        // Private key allows to create/destroy users
        { headers: { "private-key": "28f3d598-8d03-4eba-bae4-1c1ee115f1d3" } }
    );
    // Assuming API call goes through, the response from this API call will
    // return the status of API call and data within it
    return res.status(r.status).json(r.data)
  } catch(e) {
    // Returns error id data specified is incorrect
    return res.status(error.response.status).json(error.response.data)
  }
});

// Run the app on Port 3001
app.listen(3001);