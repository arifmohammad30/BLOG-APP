Blog Hub
Share your thoughts with the world

Overview
Blog Hub is a simple blog post application built using Express.js REST APIs and EJS templating engine for views. It allows users to view, create, edit, and delete blog posts. This app focuses on text-based content sharing with image hosting support.

Features
View a list of blog posts categorized by topics

Read detailed blog posts

Create new blog posts

Edit existing posts

Delete posts

Add image.

Server-rendered views using EJS

Technologies Used
Node.js

Express.js (REST API)

EJS (Embedded JavaScript templating)

Body-parser (for parsing form data)

Nodemon (for development server auto-reload)

Installation & Setup
Clone the repository


git clone https://github.com/arifmohammad30/BLOG-APP.git
cd BLOG-APP
Install dependencies


npm install
Run the app


npm start
Access in browser

Open http://localhost:3000 to see the blog.

Folder Structure
csharp
Copy
Edit
BLOG-APP/
├── public/          # Static files (CSS, images)
├── routes/          # Express route handlers
├── views/           # EJS templates
├── index.js           # Main Express app
├── package.json
└── README.md
Usage
Navigate to the home page to see a list of all blog posts.

Click View to read the full post.

Use Create New Blog Post to add new content.

Edit or delete posts via their respective buttons.

Future Improvements


Implement user authentication.

Enhance UI with better styling and responsive design.

Add search and filtering of blog posts.

Use a database like MongoDB or PostgreSQL instead of in-memory or JSON file storage.

Author
Arif Mohammad


