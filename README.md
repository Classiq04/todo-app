# TODO-APP

A full-stack, containerized to-do application built as a learning project for my DevOps journey. This project demonstrates key concepts like containerization, multi-container applications, and basic CI/CD principles.

This repository contains a simple to-do application consisting of a React frontend and a Node.js/Express backend. The primary purpose of this project is not the application itself, but the infrastructure surrounding it. It serves as a personal sandbox for learning and practicing DevOps skills.

### 🚀 Technology Stack
The application is built using the following technologies:

# Frontend:

* React: A popular JavaScript library for building user interfaces.
* Nginx: A high-performance web server used to serve the static React application.

# Backend:

  * Node.js: A JavaScript runtime environment.
  * Express: A minimal and flexible Node.js web application framework.

# DevOps & Infrastructure:

  * Docker: For containerizing both the frontend and backend services.
  * Docker Compose: To define and run the multi-container application with a single command.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# 💻 How to Run the Project

This project is designed to be easy to set up using Docker. You don't need to install Node.js or React on your local machine.

1.  Clone the repository:

    bash ..........
    git clone [your-repository-url]
    cd todo-app
    
2.  Start the application:
    Use Docker Compose to build and run the containers. The `--build` flag is included to ensure the images are built from your local source code.

    bash ..........
    docker-compose up --build
    
3.  Access the application:
    Open your web browser and navigate to `http://localhost`. The React frontend will be served by Nginx, and it will automatically communicate with the backend.


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# 🤔 What I Learned

This project was a significant part of my learning journey. It allowed me to gain hands-on experience with the following concepts:

  * Containerization: I learned how to write a `Dockerfile` for both a Node.js application and a React application, including multi-stage builds for production optimization.
  * Multi-Container Applications**: I learned to use `docker-compose.yml` to orchestrate multiple services (frontend, backend) that need to communicate with each other.
  * Networking in Docker: I learned how Docker Compose handles internal networking between containers, allowing services to communicate by their names (e.g., `http://server:3001`).
  * Debugging: A major part of this project was troubleshooting environment-specific issues, such as the `failed to connect to dbus` error, which led me to explore and implement Docker's rootless mode. This taught me a lot about problem-solving and persistence.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
### 🤝 Contribution

This is a personal project, but feel free to open an issue or submit a pull request if you have any suggestions or find any
