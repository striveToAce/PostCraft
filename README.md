# PostCraft

PostCraft is a Next.js application that displays a list of posts fetched from an external API. It uses Redis for caching to improve performance and reduce the number of API requests.

## Features

- Fetches posts from the JSONPlaceholder API.
- Caches posts in Redis for 2 minutes to enhance performance.
- Displays posts using a responsive UI with Tailwind CSS.
- Includes a login form that uses Redux for state management.
- Provides a profile page with user information and logout functionality.

## Prerequisites

- Node.js and npm installed on your machine.
- A running Redis server (local or cloud-based).

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/postcraft.git
   cd postcraft
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Ensure your Redis server is running. You can start a local Redis server with:

   ```bash
   redis-server
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production

To build the application for production, run:
