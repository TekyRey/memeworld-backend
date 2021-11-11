const { verify } = require("jsonwebtoken");

// function checkToken(permissions) {
//   return (req, res, next) => {
//     let token = req.get("authorization");
//     if (token) {
//       token = token.slice(7);
//       verify(token, process.env.SECRET, (err, decoded) => {
//         if (err) {
//           return res.status(401).json({
//             errorCode: 401,
//             errorMessage: "Invalid token",  
//             // permission: permissions,
//             // token: token,
//           });
//         }

//         const {
//           result: { permission_level },
//         } = decoded;

//         if (!permissions.includes(permission_level)) {
//           return res.status(403).json({
//             errorCode: 403,
//             errorMessage: "operation is forbidden",
//           });
//         }

//         next();
//       });
//     } else {
//       return res.status(401).json({
//         errorCode: 401,
//         message: "Unauthorized",
//       });
//     }
//   };
// }

function verifyToken() {
  return (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            errorCode: 401,
            errorMessage: "Invalid token",
          });
        }
        next();
      });
    } else {
      return res.status(401).json({
        errorCode: 401,
        message: "Unauthorized",
      });
    }
  };
}

module.exports = { verifyToken };

// module.exports = {
//   checkToken: (req, res, next) => {
//     let token = req.get("authorization");
//     if (token) {
//       token = token.slice(7);
//       verify(token, process.env.SECRET, (err, decoded) => {
//         if (err) {
//           return res.status(401).json({
//             errorCode: 401,
//             errorMessage: "Invalid token",
//             // role: role,
//           });
//         }
//         // req.decoded = decoded;
//         next();
//       });
//     } else {
//       return res.status(401).json({
//         errorCode: 401,
//         message: "Unauthorized",
//       });
//     }
//   },

//   checkIfAdmin: (req, res, next) => {},
// };
