const pool = require("../../config/database");
module.exports = {
  createCategory: (data, callback) => {
    pool.query(`insert into meme_categories SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getCategories: (callback) => {
    pool.query(`select * from meme_categories`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getCategoryById: (id, callback) => {
    pool.query(
      `select * from meme_categories where id =?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateCategory: (data, callback) => {
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
      `UPDATE meme_categories SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deleteCategory: (data, callback) => {
    pool.query(
      `delete from meme_categories where id = ?`,
      [data.id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

  //posts service

  createPost: (data, callback) => {
    pool.query(`insert into posts SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getPosts: (callback) => {
    pool.query(`select * from posts`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getPostById: (id, callback) => {
    pool.query(
      `select * from posts where id =?`,
      [id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updatePost: (data, callback) => {
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
      `UPDATE posts SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deletePost: (data, callback) => {
    pool.query(
      `delete from posts where id = ?`,
      [data.id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

   //posts likes service

   createPostLike: (data, callback) => {
    pool.query(`insert into post_likes SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getPostLikes: (callback) => {
    pool.query(`select * from post_likes`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getPostLikeByUserId: (user_id, callback) => {
    pool.query(
      `select * from post_likes where user_id =?`,
      [user_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updatePostLike: (data, callback) => {
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
      `UPDATE post_likes SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deletePostLike: (data, callback) => {
    pool.query(
      `delete from post_likes where user_id = ?`,
      [data.user_id],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      }
    );
  },

   //posts favorites service

   createPostFavorite: (data, callback) => {
    pool.query(`insert into post_favorites SET ?`, data, (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getPostFavorites: (callback) => {
    pool.query(`select * from post_favorites`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getPostFavoriteByUserId: (user_id, callback) => {
    pool.query(
      `select * from post_favorites where user_id =?`,
      [user_id],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updatePostFavorite: (data, callback) => {
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
      `UPDATE post_favorites SET ${queryString}`,
      queryValuesArray,
      (error, results) => {
        if (error) {
          callback(error);
        }

        return callback(null, results);
      }
    );
  },

  deletePostFavorite: (data, callback) => {
    pool.query(
      `delete from post_favorites where user_id = ?`,
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
