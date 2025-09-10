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

// Register API routes
app.use("/api/auth", authRoutes);
app.use('/api/employee-codes', employeeCodeRoutes);
app.use('/api/schedule', scheduleRoutes);

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
      // Fallback HTML when build files don't exist
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
                .endpoint { margin: 8px 0; }
                .method { font-weight: bold; color: #2563eb; }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>🚀 Сервер СамоГуру</h1>
                <p>API сервер працює та готовий обробляти запити!</p>
                <div class="api-info">
                  <h3>Доступні API Endpoints:</h3>
                  
                  <h4>🔐 Аутентифікація (/api/auth)</h4>
                  <div class="endpoint"><span class="method">POST</span> /api/auth/signup - Реєстрація</div>
                  <div class="endpoint"><span class="method">POST</span> /api/auth/login - Вхід</div>
                  <div class="endpoint"><span class="method">POST</span> /api/auth/logout - Вихід</div>
                  <div class="endpoint"><span class="method">POST</span> /api/auth/verify-email - Верифікація email</div>
                  <div class="endpoint"><span class="method">POST</span> /api/auth/forgot-password - Скидання пароля</div>
                  <div class="endpoint"><span class="method">POST</span> /api/auth/reset-password/:token - Відновлення пароля</div>
                  <div class="endpoint"><span class="method">GET</span> /api/auth/check-auth - Перевірка аутентифікації</div>
                  
                  <h4>👥 Коди працівників (/api/employee-codes)</h4>
                  <div class="endpoint"><span class="method">GET</span> /api/employee-codes/all - Отримати всі коди (admin)</div>
                  <div class="endpoint"><span class="method">POST</span> /api/employee-codes/add - Додати код (admin)</div>
                  <div class="endpoint"><span class="method">DELETE</span> /api/employee-codes/:id - Видалити код (admin)</div>
                  
                  <h4>📅 Розклади (/api/schedule)</h4>
                  <div class="endpoint"><span class="method">POST</span> /api/schedule/create - Створити розклад (admin)</div>
                  <div class="endpoint"><span class="method">GET</span> /api/schedule/all - Отримати всі розклади (admin)</div>
                  <div class="endpoint"><span class="method">GET</span> /api/schedule/my-current - Мій поточний розклад</div>
                  <div class="endpoint"><span class="method">GET</span> /api/schedule/employees/:role - Працівники по ролі (admin)</div>
                  <div class="endpoint"><span class="method">PUT</span> /api/schedule/:id - Оновити розклад (admin)</div>
                  <div class="endpoint"><span class="method">POST</span> /api/schedule/:id/publish - Опублікувати розклад (admin)</div>
                  <div class="endpoint"><span class="method">DELETE</span> /api/schedule/:id - Видалити розклад (admin)</div>
                </div>
                <p><em>Клієнтська сторона додатку: <a href="https://www.samoguru.run.place" target="_blank">www.samoguru.run.place</a></em></p>
                <p><small>Версія API: 2.0 | Включає систему управління розкладами</small></p>
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
console.log('✓ /api/auth - Authentication routes');
console.log('✓ /api/employee-codes - Employee codes management');
console.log('✓ /api/schedule - Schedule management system');