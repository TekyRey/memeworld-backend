const pool = require("../../config/database");
module.exports = {
  //posts service

  createNotification: (data, callback) => {
    pool.query(`insert into notifications SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getNotifications: (callback) => {
    pool.query(`select * from notifications`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getNotificationById: (id, callback) => {
    pool.query(
      `select * from notifications where id =?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateNotification: (data, callback) => {
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

    queryValuesArray.push(data.id); // adds categoryid at the end

    pool.query(
      `UPDATE notifications SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deleteNotification: (data, callback) => {
    pool.query(
      `delete from notifications where id = ?`,
      [data.id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },



};
