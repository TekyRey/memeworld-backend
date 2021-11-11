const pool = require("../../config/database");
module.exports = {
  createUser: (data, callback) => {
    pool.query(`insert into users SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getUsers: (callback) => {
    pool.query(`select * from users`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getUserByUserId: (id, callback) => {
    pool.query(
      `select * from users where id =?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateUser: (data, callback) => {
    // get the query keys present in the data object
    const queryKeysArray = Object.keys(data);

    // get the query values present in the data object
    const queryValuesArray = Object.values(data);

    // form update query string from queryKeysArray
    let queryString = "";
    queryKeysArray.map((item) => (queryString += item + "= ?,"));

    // add where clause to query string(after removing the trailing comma)
    queryString = queryString.replace(/,\s*$/, "");
    queryString = `${queryString} WHERE id = ? `;

    queryValuesArray.push(data.id); // adds employeenumber at the end

    pool.query(
      `UPDATE users SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deleteUser: (data, callback) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

  getUserByEmail: (email, callback) => {
    pool.query(
      `select * from users where email =?`,
      [email],
      (error, results) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },

 
};
