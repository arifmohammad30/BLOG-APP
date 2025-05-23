require('dotenv').config(); 

const express = require("express");
const app = express();

const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const path = require("path");


const PORT = process.env.PORT || 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// 3. Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 2. Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));


const cors = require("cors");
const helmet = require("helmet");
app.use(cors());
app.use(helmet());


let posts = [
  {
    id: uuidv4(),
    title: "Learning Journey",
    username: "arif",
    content:
      "I've been on an incredible learning journey with web development. Every day brings new challenges and insights that help me grow as a developer. The more I learn, the more I realize how vast this field truly is.",
    category: "Technology",
    imageUrl:"/images/learning.jpg",
      
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: "Career Growth",
    username: "john",
    content:
      "Excited to share that I've been selected for a new position as Senior Developer! The interview process was challenging but rewarding. Looking forward to this new chapter in my professional journey and the opportunity to work on more complex projects.",
    category: "Career",
    imageUrl:"/images/workk.jpg",
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: "New Beginnings",
    username: "rick",
    content:
      "After months of searching and interviewing, I finally landed my dream job at a tech startup! The company culture is amazing, and I'll be working with cutting-edge technologies. Can't wait to start this new chapter and share my experiences along the way.",
    category: "Personal",
    imageUrl:"/images/new.jpg",
    createdAt: new Date().toISOString(),
  },
];

// Routes
app.get("/", (req, res) => {

  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { title, username, content, category, imageUrl } = req.body;
  let id = uuidv4();
  let createdAt = new Date().toISOString();

  if (!imageUrl || imageUrl.trim() === "") {
    imageUrl =
      "/images/learning.jpg";
  }

  posts.push({ id, title, username, content, category, imageUrl, createdAt });

  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let { title, content, category, imageUrl } = req.body;
  let post = posts.find((post) => post.id === id);

  post.title = title;
  post.content = content;
  post.category = category;

  if (imageUrl && imageUrl.trim() !== "") {
    post.imageUrl = imageUrl;
  }

  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/posts");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
