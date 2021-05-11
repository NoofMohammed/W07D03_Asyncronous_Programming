const fs = require("fs");
const axios = require("axios");

const appendToFile = (data) => {
  fs.appendFile("data.txt", "data to append", (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
};
appendToFile();

const copyFile = (fileName) => {
  function callback(err) {
    if (err) throw err;
    console.log("source.txt was copied to destination.txt");
  }
  fs.copyFile(fileName, "copy_of_data.txt", callback);
};
copyFile("data.txt");

const newPost = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  userId: 1,
});

const createPost = (post) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", post)

    .then(function (response) {
      console.log("createPost", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
createPost(newPost);

const newPost2 = JSON.stringify({
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (id, data) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    .then(function (response) {
      console.log("updatePost", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

updatePost(1, newPost2);

const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};
getUsers();

const saveUsers = async () => {
  const users = await getUsers();
  console.log(users);

  fs.writeFile("users.txt", JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
};
saveUsers();
