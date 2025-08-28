# Environment Setup Guide for CityLeaf Farms

This guide explains how to set up the environment variables for both local development and Vercel deployment.

## Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=
PORT=3000
ENV=dev
```

### 3. Run the Application
For development:
```bash
npm run dev
```

For production build:
```bash
npm run build
npm start
```

## Vercel Deployment Setup

### 1. Environment Variables in Vercel
When deploying to Vercel, you need to set the following environment variables in your Vercel project dashboard:

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: 3000 (Vercel will automatically assign a port)
- `ENV`: production (this tells the app to export instead of listening)

### 2. Vercel Configuration
The application is already configured to work with Vercel:
- When `ENV=production`, the app exports the Express instance instead of starting a server
- Vercel will automatically handle the serverless function deployment

### 3. Deployment Commands
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

## Environment Variables Reference

### MONGODB_URI
- **Purpose**: MongoDB database connection string
- **Local**: Use the connection string from your `.env` file
- **Vercel**: Set the same connection string in Vercel dashboard

### PORT
- **Purpose**: Server port number
- **Local**: 3000 (or any available port)
- **Vercel**: Vercel automatically assigns a port

### ENV
- **Purpose**: Environment mode detection
- **Local**: `dev` - starts local server
- **Vercel**: `production` - exports app for serverless deployment

## Security Notes

1. **Never commit sensitive data**: The `.env` file is in `.gitignore` to prevent accidental commits
2. **Vercel security**: Use Vercel's environment variable system for production secrets
3. **MongoDB access**: Ensure your MongoDB Atlas cluster allows connections from both local IP and Vercel's IP ranges

## Troubleshooting

### Local Development Issues
- Ensure MongoDB is running if using local database
- Check that all environment variables are set correctly
- Verify port 3000 is available

### Vercel Deployment Issues
- Double-check environment variables in Vercel dashboard
- Ensure MongoDB Atlas allows connections from Vercel's IP addresses
- Check Vercel deployment logs for specific errors
