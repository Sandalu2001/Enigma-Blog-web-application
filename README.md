# Enigma Blog Web Application

Enigma Blog is a web application built using Node.js, Express.js, and EJS. It serves as a platform for users to share and publish blog posts. The application uses MongoDB Atlas as the database for storing blog data and is deployed using Heroku.
https://intense-mesa-98816.herokuapp.com/posts/The%20Evolution%20and%20Impact%20of%20Vehicles

## Features

- **Blog Post Management**: Users can create, edit, and delete blog posts.
- **User Authentication**: User registration and login functionality is implemented to ensure secure access to blog post management.
- **Node.js**: The application is built using Node.js, a server-side JavaScript runtime environment.
- **Express.js**: Express.js is utilized as the web application framework to handle routing and server-side logic.
- **EJS**: The application uses EJS (Embedded JavaScript) as the templating engine for generating dynamic HTML content.
- **MongoDB Atlas**: MongoDB Atlas, a cloud-based NoSQL database service, is used to store and manage blog post data.
- **Heroku**: The application is deployed to Heroku, a cloud platform, to make it accessible online.

## Future Plans

In the future, we plan to add multi-user support to the Enigma Blog application. Currently, anyone can upload and manage blog contents. With the upcoming update, we aim to introduce user roles and permissions, allowing for more controlled access and enhanced collaboration among multiple users.

## Setup Instructions

To run the Enigma Blog web application locally, follow these steps:

1. Clone the repository using `https://github.com/Sandalu2001/Enigma-Blog-web-application.git`.
2. Navigate to the project directory: `cd enigma-blog`.
3. Install the required dependencies by running `npm install`.
4. Set up a MongoDB Atlas database and obtain the connection URI.
5. Create a `.env` file in the project root directory and add the following line, replacing `<mongo-uri>` with your MongoDB Atlas connection URI:

   ```plaintext
   MONGODB_URI=<mongo-uri>
   ```

6. Run the application using `npm start`.
7. Access the Enigma Blog application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue in this repository.

## Contact

If you have any questions or need further assistance, please feel free to contact me at [sandalusankaja2001@gmail.com].
