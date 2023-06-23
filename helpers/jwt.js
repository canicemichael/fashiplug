const { expressjwt: jwt } = require("express-jwt");

function authJwt() {
  const secret = "secret";
  const api = process.env.API_URL;
  return jwt({
    secret,
    algorithms: ["HS256"],
    // isRevoked: isTokenRevoked, //this is for admin operations, it is turned on when only admin can mmake requests
  }).unless({
    //here we add all the apis we want to exclude from the jwtAuthentication
    path: [
      { url: /\/public\/uploads(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
      `${api}/users/login`,
      `${api}/users/register`,
    ],
  });
}

// Example implementation of isRevoked function
async function isTokenRevoked(req, payload) {
  // Retrieve the token ID or any other identifier from the payload
  const tokenId = await payload.payload.isAdmin;

  // Check if the token is revoked based on your own logic
  const isRevoked = !tokenId;
  console.log("isRevoked ", isRevoked);

  // Call the done function to indicate the revocation status
  // Pass `null` as the first parameter if no error occurred
  // Pass `true` as the second parameter if the token is revoked
  // Pass `false` as the second parameter if the token is not revoked
  return isRevoked;
}

module.exports = { authJwt };
