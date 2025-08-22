export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Підтвердіть вашу пошту - СамоГуру</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
  <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="background-color: rgba(255, 255, 255, 0.1); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <span style="font-size: 36px;">🎯</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px;">Підтвердіть вашу пошту</p>
  </div>
  
  <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Вітаємо в команді!</h2>
      <p style="color: #6b7280; font-size: 16px; margin: 0;">Дякуємо за реєстрацію на платформі СамоГуру</p>
    </div>

    <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0; border: 2px dashed #d1d5db;">
      <p style="color: #374151; font-size: 16px; margin: 0 0 20px 0; font-weight: 500;">Ваш код підтвердження:</p>
      <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <span style="font-size: 36px; font-weight: 800; letter-spacing: 8px; font-family: 'Courier New', monospace;">{verificationCode}</span>
      </div>
      <p style="color: #6b7280; font-size: 14px; margin: 20px 0 0 0;">Введіть цей код на сторінці верифікації</p>
    </div>

    <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 0 8px 8px 0; margin: 30px 0;">
      <div style="display: flex; align-items: center;">
        <span style="font-size: 20px; margin-right: 12px;">⏰</span>
        <div>
          <p style="color: #92400e; font-weight: 600; margin: 0 0 4px 0; font-size: 14px;">Важливо!</p>
          <p style="color: #b45309; margin: 0; font-size: 14px;">Код дійсний протягом 1 годину з міркувань безпеки</p>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin: 40px 0 30px 0;">
      <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
        <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">Якщо ви не створювали обліковий запис, просто проігноруйте цей лист</p>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 14px; margin: 0; font-weight: 500;">З найкращими побажаннями,</p>
          <p style="color: #6366f1; font-size: 16px; margin: 8px 0 0 0; font-weight: 600;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 30px; padding: 20px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 11px; margin: 0;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Пароль успішно скинуто - СамоГуру</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="background-color: rgba(255, 255, 255, 0.1); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <span style="font-size: 36px;">✅</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px;">Пароль успішно скинуто</p>
  </div>
  
  <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="background-color: #d1fae5; width: 100px; height: 100px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
        <div style="background-color: #10b981; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; font-size: 30px; font-weight: bold;">✓</div>
      </div>
      <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Готово!</h2>
      <p style="color: #6b7280; font-size: 16px; margin: 0;">Ваш пароль було успішно змінено</p>
    </div>

    <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; border-radius: 0 8px 8px 0; margin: 30px 0;">
      <div style="display: flex; align-items: center;">
        <span style="font-size: 20px; margin-right: 12px;">🔒</span>
        <div>
          <p style="color: #dc2626; font-weight: 600; margin: 0 0 4px 0; font-size: 14px;">Безпека</p>
          <p style="color: #ef4444; margin: 0; font-size: 14px;">Якщо ви не ініціювали скидання пароля, негайно зверніться до служби підтримки</p>
        </div>
      </div>
    </div>

    <div style="background-color: #f0f9ff; padding: 24px; border-radius: 8px; border: 1px solid #bae6fd; margin: 30px 0;">
      <h3 style="color: #0369a1; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">Рекомендації з безпеки:</h3>
      <ul style="color: #0284c7; margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 8px;">Використовуйте надійний, унікальний пароль</li>
        <li style="margin-bottom: 8px;">Увімкніть двофакторну автентифікацію, якщо доступно</li>
        <li style="margin-bottom: 0;">Уникайте використання одного пароля на кількох сайтах</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 40px 0 30px 0;">
      <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
        <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">Дякуємо за допомогу у забезпеченні безпеки вашого облікового запису</p>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 14px; margin: 0; font-weight: 500;">З найкращими побажаннями,</p>
          <p style="color: #10b981; font-size: 16px; margin: 8px 0 0 0; font-weight: 600;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 30px; padding: 20px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 11px; margin: 0;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Скидання пароля - СамоГуру</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
  <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="background-color: rgba(255, 255, 255, 0.1); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <span style="font-size: 36px;">🔑</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px;">Скидання пароля</p>
  </div>
  
  <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Забули пароль?</h2>
      <p style="color: #6b7280; font-size: 16px; margin: 0;">Не хвилюйтеся, ми допоможемо вам його відновити</p>
    </div>

    <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 0 8px 8px 0; margin: 30px 0;">
      <p style="color: #92400e; margin: 0; font-size: 14px;">Ми отримали запит на скидання вашого пароля. Якщо ви не робили цього запиту, просто проігноруйте цей лист.</p>
    </div>

    <div style="text-align: center; margin: 40px 0;">
      <p style="color: #374151; font-size: 16px; margin: 0 0 24px 0;">Щоб скинути пароль, натисніть кнопку нижче:</p>
      <div style="margin: 30px 0;">
        <a href="{resetURL}" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); transition: all 0.2s;">
          🔑 Скинути пароль
        </a>
      </div>
      <p style="color: #6b7280; font-size: 12px; margin: 20px 0 0 0;">Або скопіюйте це посилання у ваш браузер:</p>
      <p style="color: #6366f1; font-size: 12px; word-break: break-all; background-color: #f3f4f6; padding: 8px; border-radius: 4px; margin: 8px 0;">{resetURL}</p>
    </div>

    <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 16px; border-radius: 0 8px 8px 0; margin: 30px 0;">
      <div style="display: flex; align-items: center;">
        <span style="font-size: 20px; margin-right: 12px;">⏰</span>
        <div>
          <p style="color: #dc2626; font-weight: 600; margin: 0 0 4px 0; font-size: 14px;">Термін дії</p>
          <p style="color: #ef4444; margin: 0; font-size: 14px;">Це посилання буде дійсним протягом 1 години з міркувань безпеки</p>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin: 40px 0 30px 0;">
      <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 14px; margin: 0; font-weight: 500;">З найкращими побажаннями,</p>
          <p style="color: #f59e0b; font-size: 16px; margin: 8px 0 0 0; font-weight: 600;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 30px; padding: 20px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 11px; margin: 0;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`;

// Welcome email for new employees
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ласкаво просимо до СамоГуру!</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
  <div style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="background-color: rgba(255, 255, 255, 0.1); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <span style="font-size: 36px;">🎉</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px;">Ласкаво просимо до команди!</p>
  </div>
  
  <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Вітаємо, {employeeName}!</h2>
      <p style="color: #6b7280; font-size: 16px; margin: 0;">Ви успішно приєдналися до команди СамоГуру як <strong style="color: #8b5cf6;">{role}</strong></p>
    </div>

    <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: 12px; padding: 30px; margin: 30px 0;">
      <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; text-align: center;">Ваші дані для входу:</h3>
      <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #d1d5db;">
        <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px;"><strong>Email:</strong> {email}</p>
        <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px;"><strong>Роль:</strong> {role}</p>
        <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>Дата початку роботи:</strong> {startDate}</p>
      </div>
    </div>

    <div style="background-color: #eff6ff; padding: 24px; border-radius: 8px; border: 1px solid #bfdbfe; margin: 30px 0;">
      <h3 style="color: #1d4ed8; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">Перші кроки:</h3>
      <ul style="color: #1e40af; margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 0;">Зверніться до свого керівника/адміністратора з повідомленням про успішну реєстрацію</li>
        <li style="margin-bottom: 8px;">Увійдіть до системи та заповніть свій профіль</li>
        <li style="margin-bottom: 8px;">Ознайомтеся з правилами та процедурами</li>
        <li style="margin-bottom: 8px;">Перегляньте свій розклад роботи</li>
      </ul>
    </div>

    <div style="text-align: center; margin: 40px 0;">
      <a href="{loginURL}" style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        🚀 Увійти до системи
      </a>
    </div>

    <div style="text-align: center; margin: 40px 0 30px 0;">
      <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
        <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">Ми раді бачити вас у нашій команді!</p>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <p style="color: #374151; font-size: 14px; margin: 0; font-weight: 500;">З найкращими побажаннями,</p>
          <p style="color: #8b5cf6; font-size: 16px; margin: 8px 0 0 0; font-weight: 600;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 30px; padding: 20px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 11px; margin: 0;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`;