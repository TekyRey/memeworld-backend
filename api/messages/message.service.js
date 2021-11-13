const pool = require("../../config/database");
module.exports = {
  //posts service

  createMessage: (data, callback) => {
    pool.query(`insert into messaging SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getmessaging: (callback) => {
    pool.query(`select * from messaging`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getFollowerById: (id, callback) => {
    pool.query(
      `select * from messaging where user_id =?`,
      [user_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateFollower: (data, callback) => {
    // get the query keys present in the data object
    const queryKeysArray = Object.keys(data);

    // get the query values present in the data object
    const queryValuesArray = Object.values(data);

    // form update query string from queryKeysArray
    let queryString = "";
    queryKeysArray.map((item) => (queryString += item + "= ?,"));

    // add where clause to query string(after removing the trailing comma)
    queryString = queryString.replace(/,\s*$/, "");
    queryString = `${queryString} WHERE user_id = ? `;

    queryValuesArray.push(data.id); // adds categoryid at the end

    pool.query(
      `UPDATE messaging SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deleteFollower: (data, callback) => {
    pool.query(
      `delete from messaging where user_id = ?`,
      [data.user_id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },



};
