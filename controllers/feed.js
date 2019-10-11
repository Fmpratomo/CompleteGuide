exports.getPosts = (req, res, next) => {
  this.state = [];
  res.status(200).json({
    post: [
      {
          _id: '1',
        title: "First Post",
        content: "This is the First Post",
        imageUrl: "images/Fahmi.png",
        creator : {
          name: 'fahmi'
        },
        createdAt : new Date()
      }
    ]
  });
  
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
