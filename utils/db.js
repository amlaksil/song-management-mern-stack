const mongoose = require('mongoose');

class Database {
  constructor() {
    this.host = process.env.DB_HOST || 'localhost';
    this.port = process.env.DB_PORT || 27017;
    this.database = process.env.DB_DATABASE || 'songs-db';
    this.url = `mongodb://${this.host}:${this.port}/${this.database}`;
    this.status = false;
    this.songSchema = null;
    this.connect(); // Automatically connect when instance is created
  }

  connect() {
    // Connect to MongoDB
    mongoose
      .connect(this.url)
      .then(() => {
        this.status = true;
      })
      .catch((err) => console.error('Failed to connect to MongoDB', err));
  }

  defineSongModel() {
    this.songSchema = new mongoose.Schema({
      title: String,
      artist: String,
      album: String,
      genre: String,
    });
    return mongoose.model('Song', this.songSchema);
  }
}

module.exports = new Database();
