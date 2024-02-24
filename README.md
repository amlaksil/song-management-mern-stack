# Song Manager App

The Song Manager App is a comprehensive full-stack application that allows users to manage song data efficiently. It provides an intuitive user interface for creating, updating, and deleting songs, as well as powerful statistics and analysis features.

## Key Features

- Create and store songs with information such as title, artist, album, and genre.
- Update song details or modify individual fields as needed.
- Delete songs from the database.
- Retrieve a list of all songs recorded in the database.
- Get statistics on the total number of songs, artists, albums, and genres.
- Explore the number of songs in each genre.
- Discover the number of songs and albums for each artist.
- Analyze the number of songs in each album.
- Seed sample song data for testing purposes.

## Technologies Used

- **Backend:**
  - Express.js - Fast and minimalist web framework for Node.js.
  - MongoDB - NoSQL database for storing song data.
  - Mongoose - Object Data Modeling (ODM) library for MongoDB.
  - Docker - Containerization platform for packaging the backend.

- **Frontend (Songify):**
  - React - JavaScript library for building user interfaces.
  - Axios - Promise-based HTTP client for making API requests.

## Installation

Follow these steps to install and run the `Song Manager App`:

1. Clone the repository to your local machine.
```
git clone https://github.com/amlaksil/song-manager-app.git
```
2. Navigate to the project directory: 
```
cd song-manager-app
```
3. Install the dependencies:
```
npm install
```
4. Install Docker Compose: a tool that allows you to define and manage multi-container Docker applications.
```
sudo apt-get install docker-compose
```
6. Build and run the Docker containers for the app:
```
docker-compose up -d
```
This command will build the two processes, `api` and `mongo_db`, defined in `docker-compose.yml` file and run them in the background
7. Navigate to the songify directory and start the app:
```
cd songify && npm start
```

## Development

- If you'd like to contribute to the project, feel free to fork the repository and submit pull requests with your changes.
- Make sure to follow the coding style and conventions used in the existing codebase.

## Troubleshooting

- If you encounter any issues or have questions, please open an issue on the project's GitHub repository (https://github.com/amlaksil/song-manager-app/issues).

## Author

- [Silamlak Desye](https://www.linkedin.com/in/silamlakdesye)

Feel free to connect with me on LinkedIn for any questions, collaboration opportunities, or to learn more about my professional background.

## License

This project is licensed under the [MIT License](https://mit-license.org/amlaksil). See the [LICENSE](LICENSE) file for more details.
