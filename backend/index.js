//backend/index.js
import cookieParser from 'cookie-parser';
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.route.js";
import employeeCodeRoutes from './routes/employeeCode.routes.js';
import scheduleRoutes from './routes/schedule.routes.js';

dotenv.config();

// Check required environment variables
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
}

// Debug environment variables
console.log('Environment check:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('CLIENT_URL:', process.env.CLIENT_URL);
console.log('PORT:', process.env.PORT);

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://www.samoguru.run.place', 'https://samoguru.run.place']
    : 'http://localhost:3000',
  credentials: true, // для cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(cookieParser());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'SamoGuru API Server is running' });
});

//ДОБАВИТИ ДЛЯ ГРАФІКУ

// Підключення маршрутів для працівників
app.use('/api/users', userRoutes);

app.use('/api/employee-codes', employeeCodeRoutes);
app.use('/api/schedule', scheduleRoutes); // <-- Add this line

// Register routes
app.use("/api/auth", authRoutes);

// Handle API 404s (should be after all API routes)
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

if (process.env.NODE_ENV === 'production') {
  // Check if Next.js build exists
  const nextBuildPath = path.join(__dirname, '../.next/server/app');
  const nextStaticPath = path.join(__dirname, '../.next/static');
  const indexPath = path.join(nextBuildPath, 'index.html');
  
  // Check if the build files exist
  try {
    const fs = await import('fs');
    if (fs.existsSync(nextBuildPath) && fs.existsSync(indexPath)) {
      // Serve static files from Next.js build
      app.use(express.static(nextStaticPath));
      app.use(express.static(nextBuildPath));
      
      // For all other requests, serve the Next.js app
      app.get('*', (req, res) => {
        res.sendFile(indexPath);
      });
    } else {
      // Коментуємо цей блок, щоб уникнути конфлікту з API маршрутами
      app.get('*', (req, res) => {
        if (!req.path.startsWith('/api/')) {
          res.send(`
            <!DOCTYPE html>
            <html>
            <head>
              <title>SamoGuru - API Server</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .container { max-width: 600px; margin: 0 auto; }
                .api-info { background: #f5f5f5; padding: 20px; border-radius: 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>🚀 Сервер СамоГуру</h1>
                <p>Функції реєстрації та API справно праюють!</p>
                <div class="api-info">
                  <h3>Достуні API Endpoints:</h3>
                  <ul>
                    <li><strong>POST</strong> /api/auth/signup - Реєстрація</li>
                    <li><strong>POST</strong> /api/auth/login - Вхід</li>
                    <li><strong>POST</strong> /api/auth/logout - Вихід</li>
                    <li><strong>POST</strong> /api/auth/verify-email - Емейл верификація</li>
                    <li><strong>POST</strong> /api/auth/forgot-password - Скидання пароля</li>
                    <li><strong>POST</strong> /api/auth/reset-password/:token - Відновлення пароля</li>
                    <li><strong>GET</strong> /api/auth/check-auth - Перевірка аутинтифікації</li>
                  </ul>
                </div>
                <p><em>Клієнтська сторона додатку працює на наступному домені: www.samoguru.run.place </em></p>
              </div>
            </body>
            </html>
          `);
        }
      });
    }
  } catch (error) {
    console.error('Error checking Next.js build:', error);
    // Fallback response
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api/')) {
        res.send('SamoGuru API Server is running. Frontend is being built.');
      }
    });
  }
}

app.listen(PORT, () => {
  console.log("Server starting on port:", PORT);
  connectDB();
  console.log("Server is running on port:", PORT);
});

console.log('Registered routes:');
console.log('/api/employee-codes');
console.log('/api/auth');