# PostCraft

PostCraft is a Next.js application that displays a list of posts fetched from an external API. It uses Next.js caching to improve performance and reduce the number of API requests. The application also allows users to add and update posts through a user-friendly interface.

## Features

- Fetches posts from the JSONPlaceholder API.
- Caches posts using Next.js caching to enhance performance.
- Displays posts using a responsive UI with Tailwind CSS.
- Includes a login form that uses Redux for state management.
- Provides a profile page with user information and logout functionality.
- **Add/Update Posts**: Users can add new posts or update existing ones using a simple form interface.

## Prerequisites

- Node.js and npm installed on your machine.

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

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Add/Update Posts

- Navigate to the "Add Post" page to create a new post. You will be prompted to enter a title and body for the post.
- To update an existing post, navigate to the "Edit Post" page. You can modify the title and body of the post and save your changes.
- The application uses toast notifications to provide feedback on the success or failure of post operations.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

Then, start the production server:

```bash
npm start
```

## Project Structure

- `pages/`: Contains the Next.js pages, including the home, login, profile, and add/update post pages.
- `components/`: Contains reusable React components like `Header`, `Footer`, `LoginForm`, `PostCard`, and `PostForm`.
- `store/`: Contains Redux setup files, including slices and the store configuration.
- `public/`: Contains static assets like images.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing global state.
- **Redux-Persist**: A library for persisting Redux state across page reloads.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Toastify**: A library for displaying toast notifications.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.