// routes/users.js або routes/employees.js

const express = require('express');
const router = express.Router();

// GET /users/role/:role - Отримати користувачів за роллю
router.get('/role/:role', async (req, res) => {
  try {
    const { role } = req.params;
    
    // Валідація ролі
    const validRoles = ['admin', 'manager', 'waiter', 'cook', 'bartender'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ 
        error: 'Невірна роль користувача' 
      });
    }

    // Пошук користувачів за роллю
    const users = await User.find({ role: role }).select('-password');
    
    res.status(200).json({
      success: true,
      users: users,
      count: users.length
    });
    
  } catch (error) {
    console.error('Помилка отримання користувачів за роллю:', error);
    res.status(500).json({ 
      error: 'Внутрішня помилка сервера' 
    });
  }
});

// POST /users - Створити нового користувача
router.post('/', async (req, res) => {
  try {
    const { name, email, role, phone, password } = req.body;
    
    // Валідація обов'язкових полів
    if (!name || !email || !role || !password) {
      return res.status(400).json({
        error: 'Всі обов\'язкові поля повинні бути заповнені'
      });
    }

    // Перевірка чи користувач вже існує
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        error: 'Користувач з таким email вже існує'
      });
    }

    // Хешування паролю
    const hashedPassword = await bcrypt.hash(password, 10);

    // Створення нового користувача
    const newUser = new User({
      name,
      email,
      role,
      phone,
      password: hashedPassword
    });

    await newUser.save();

    // Повернення користувача без паролю
    const userResponse = newUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      user: userResponse,
      message: 'Користувач успішно створений'
    });

  } catch (error) {
    console.error('Помилка створення користувача:', error);
    res.status(500).json({
      error: 'Внутрішня помилка сервера'
    });
  }
});

// PUT /users/:id - Оновити користувача
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Видалити пароль з оновлень якщо він не хешований
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id, 
      updates, 
      { new: true, select: '-password' }
    );

    if (!updatedUser) {
      return res.status(404).json({
        error: 'Користувача не знайдено'
      });
    }

    res.status(200).json({
      success: true,
      user: updatedUser,
      message: 'Користувач успішно оновлений'
    });

  } catch (error) {
    console.error('Помилка оновлення користувача:', error);
    res.status(500).json({
      error: 'Внутрішня помилка сервера'
    });
  }
});

// DELETE /users/:id - Видалити користувача
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        error: 'Користувача не знайдено'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Користувач успішно видалений'
    });

  } catch (error) {
    console.error('Помилка видалення користувача:', error);
    res.status(500).json({
      error: 'Внутрішня помилка сервера'
    });
  }
});

// GET /users - Отримати всіх користувачів
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    
    let query = {};
    
    // Пошук за ім'ям або email
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } }
        ]
      };
    }

    const users = await User.find(query)
      .select('-password')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.status(200).json({
      success: true,
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });

  } catch (error) {
    console.error('Помилка отримання користувачів:', error);
    res.status(500).json({
      error: 'Внутрішня помилка сервера'
    });
  }
});

// GET /users/:id - Отримати конкретного користувача
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select('-password');

    if (!user) {
      return res.status(404).json({
        error: 'Користувача не знайдено'
      });
    }

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    console.error('Помилка отримання користувача:', error);
    res.status(500).json({
      error: 'Внутрішня помилка сервера'
    });
  }
});

module.exports = router;