# Devcamper API

Backend API for a bootcamp directory. Contains routes for creating bootcamps, courses, and reviews.\
Techstack: **Docker, MongoDB, Node, Express, Cloudinary**\
For documentation with sample requests, visit the [Devcamper Postman Doc](https://documenter.getpostman.com/view/8923145/SVtVVTzd?version=latest)

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

### Run App

```bash
# Install dependencies
npm install

# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

### Database Seeder

Seeds the database with users, bootcamps, courses and reviews with sample data from the "\_data" folder

```bash
# Destroys all data
node seeder -d

# Imports all data
node seeder -i
```

### Docker Setup

```bash
# To run locally:
docker-compose up -d

# To run in production (builds image and then launches container from image):
docker build -t devcamper .
docker container run -p 3030:5000 devcamper
```
