Blog Hub
Share your thoughts with the world

Overview
Blog Hub is a simple blog post application built using Express.js REST APIs and EJS templating engine for views. It allows users to view, create, edit, and delete blog posts. This app focuses on text-based content sharing without image hosting support.

Features
View a list of blog posts categorized by topics

Read detailed blog posts

Create new blog posts

Edit existing posts

Delete posts

Server-rendered views using EJS

Technologies Used
Node.js

Express.js (REST API)

EJS (Embedded JavaScript templating)

Body-parser (for parsing form data)

Nodemon (for development server auto-reload)

Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/blog-hub.git
cd blog-hub
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm start
Access in browser

Open http://localhost:3000 to see the blog.

Folder Structure
csharp
Copy
Edit
blog-hub/
├── public/          # Static files (CSS, JS if any)
├── routes/          # Express route handlers
├── views/           # EJS templates
├── app.js           # Main Express app
├── package.json
└── README.md
Usage
Navigate to the home page to see a list of all blog posts.

Click View to read the full post.

Use Create New Blog Post to add new content.

Edit or delete posts via their respective buttons.

Future Improvements
Add image upload support with file storage or cloud hosting.

Implement user authentication.

Enhance UI with better styling and responsive design.

Add search and filtering of blog posts.

Use a database like MongoDB or PostgreSQL instead of in-memory or JSON file storage.

Author
Arif Mohammad


