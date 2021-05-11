const fs = require("fs");
const axios = require("axios");

const appendToFile = (data) => {
    fs.appendFile('data.txt', 'data to append', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
  };
  appendToFile()

  const copyFile = (fileName) => {
    function callback(err) {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      }
      fs.copyFile(fileName, 'copy_of_data.txt', callback);
    
  };
  copyFile("data.txt")

  const newPost = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    userId: 1,
  });

  
  
  const createPost = (post) => {
    axios.post('https://jsonplaceholder.typicode.com/posts',(res)=>{

    })
  };
  createPost(newPost)