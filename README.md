# Todo Application with Next.js and MongoDB

A modern, full-stack Todo application built with Next.js, TypeScript, and MongoDB. This application provides a clean, responsive interface for managing your daily tasks with real-time updates and persistent storage.

## Features

- **Full CRUD Operations**: Create, Read, Update, and Delete todos
- **Type Safety**: Built with TypeScript for better development experience
- **Responsive Design**: Works on both desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface built with Tailwind CSS
- **API Routes**: Built-in API endpoints for todo management
- **MongoDB Integration**: Persistent data storage using MongoDB

## Prerequisites

- Node.js 18.0.0 or later
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-nextjs.git
   cd todo-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the application**

## Project Structure

```
todo-nextjs/
├── app/                    # App directory
│   ├── api/                # API routes
│   │   └── todos/          # Todo API endpoints
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── lib/                    # Utility functions
│   └── mongodb.ts          # MongoDB connection
├── models/                 # Database models
│   └── Todo.ts             # Todo model
├── public/                 # Static files
└── ...
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run test:db` - Test database connection

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Code linting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
