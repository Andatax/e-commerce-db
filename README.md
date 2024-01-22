# E-Commerce Database manager

## Description

The E-Commerce Backend is a robust backend solution for an internet retail company's e-commerce website. This application is built using the latest technologies to ensure competitive capabilities against other e-commerce companies. It features a functional Express.js API and leverages Sequelize to interact with a MySQL database. The application allows for seamless database connection, creation of a development database with test data, synchronization of Sequelize models with the MySQL database, and successful testing of CRUD operations via API routes.

## Table of Contents

| Section                       | Description                    |
| ----------------------------- | ------------------------------ |
| [Installation](#installation) | Instructions for installation. |
| [Usage](#usage)               | How to use the application.    |
| [License](#license)           | License information.           |
| [Contributing](#contributing) | Guidelines for contributing.   |
| [Questions](#questions)       | Contact details for questions. |

## Installation

To get started with the README Generator App, follow these steps:

1. **Clone the project repository to your local storage:**

   ```
   git clone <https://github.com/Andatax/e-commerce-db>
   ```

   <br/>

2. **Open your terminal and navigate to the cloned project directory:**

   ```
   cd <project_directory>
   ```

3. **Set up the environment variables by creating a file (e.g., `.env`) and adding the following information:**
   DB_NAME=<your_database_name>
   DB_USER=<your_mysql_username>
   DB_PW=<your_mysql_password>

4. **Initialize your project and install the required dependencies:**

   ```
   npm init -y
   npm install sequelize mysql2 dotenv express
   ```

5. **Run schema using mysql CLI and seed commands to create a development database with test data:**

   ```
   npm run seed

   ```

6. **Start the server and sync Sequelize models with the MySQL database:**

```
npm start

```

   <br/>

## Usage

1. **Open Insomnia Core and test the API routes:**

- Categories: `/api/categories`
- Products: `/api/products`
- Tags: `/api/tags`

2. **View formatted JSON data for each route in Insomnia Core.**

3. **Test API POST, PUT, and DELETE routes for creating, updating, and deleting data in the database.**

4. **Link to walkthrough video.**

[Walkthrough Video](https://drive.google.com/file/d/1q2CdGET-UrusWM6p9sV6QXkq-NuDUW8V/view)

## License

This project is licensed under the MIT license.

## Contributing

Feel free to contribute by submitting pull requests or reporting issues.

## Tests

To test the application, follow the steps outlined in the [Installation](#installation) section. Additionally, use Insomnia Core to thoroughly test the API routes.

## Questions

For any additional questions, you can reach me at: [andatax](https://github.com/andatax)  
Email: abraham.mendez1011@gmail.com
