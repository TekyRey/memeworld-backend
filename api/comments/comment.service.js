const pool = require("../../config/database");
module.exports = {
 
  //Comments service

  createComment: (data, callback) => {
    pool.query(`insert into comments SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getComments: (callback) => {
    pool.query(`select * from comments`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getCommentById: (id, callback) => {
    pool.query(
      `select * from comments where id =?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateComment: (data, callback) => {
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
      `UPDATE comments SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deleteComment: (data, callback) => {
    pool.query(
      `delete from comments where id = ?`,
      [data.id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

   //Comments likes service
   createCommentLike: (data, callback) => {
    pool.query(`insert into comment_likes SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getCommentLikes: (callback) => {
    pool.query(`select * from comment_likes`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getCommentLikeByUserId: (user_id, callback) => {
    pool.query(
      `select * from comment_likes where user_id =?`,
      [user_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateCommentLike: (data, callback) => {
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
      `UPDATE comment_likes SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deleteCommentLike: (data, callback) => {
    pool.query(
      `delete from comment_likes where user_id = ?`,
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
