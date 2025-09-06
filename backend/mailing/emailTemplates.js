export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Підтвердіть вашу пошту - СамоГуру</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
  <!-- Header -->
  <div style="background: #ffffff; padding: 40px 20px; text-align: center; border-radius: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    <!-- Logo container -->
    <div style="margin-bottom: 20px;">
      <span style="font-size: 32px;">СамоГуру</span>
    </div>
    
    <p style="color: #f97316; margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Підтвердіть вашу пошту</p>
  </div>
  
  <!-- Main content -->
  <div style="background-color: white; padding: 40px; border-radius: 16px; margin-top: 20px;">
    <!-- Welcome section -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Вітаємо!</h2>
      <p style="color: #6b7280; font-size: 16px; margin: 0;">Дякуємо за реєстрацію на платформі СамоГуру</p>
    </div>

    <!-- Verification code section -->
    <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 32px; text-align: center; margin: 32px 0;">
      <p style="color: #374151; font-size: 16px; margin: 0 0 24px 0;">Ваш код підтвердження:</p>
      
      <!-- Code display -->
      <div style="background: #ffffff; border: 1px solid #f97316; color: #f97316; padding: 24px; border-radius: 8px; margin: 24px 0;">
        <span style="font-size: 32px; font-weight: 600; letter-spacing: 8px;">{verificationCode}</span>
      </div>
      
      <p style="color: #6b7280; font-size: 14px; margin: 24px 0 0 0;">Введіть цей код на сторінці верифікації</p>
    </div>

    <!-- Warning section -->
    <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 16px; border-radius: 4px; margin: 32px 0;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="color: #f97316;">⏰</div>
        <div>
          <p style="color: #f97316; font-weight: 600; margin: 0 0 4px 0; font-size: 14px;">Важливо!</p>
          <p style="color: #9a3412; margin: 0; font-size: 14px;">Код дійсний протягом <strong>1 години</strong></p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; padding-top: 32px; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 14px; margin: 0;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`








export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Скидання пароля - СамоГуру</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
  <!-- Header -->
  <div style="background: #ffffff; padding: 40px 20px; text-align: center; border-radius: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    <!-- Logo container -->
    <div style="margin-bottom: 20px;">
      <span style="font-size: 32px;">СамоГуру</span>
    </div>
    
    <p style="color: #f97316; margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Скидання пароля</p>
  </div>
  
  <!-- Main content -->
  <div style="background-color: white; padding: 40px; border-radius: 16px; margin-top: 20px;">
    <!-- Header section -->
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="background: #fff7ed; border: 1px solid #f97316; color: #f97316; width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 24px auto;">
        <span style="font-size: 32px;">🔑</span>
      </div>
      <h2 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 16px 0;">Забули пароль?</h2>
      <p style="color: #6b7280; font-size: 18px; margin: 0; font-weight: 500;">Не хвилюйтеся, ми допоможемо вам його відновити</p>
    </div>

    <!-- Info section -->
    <div style="background: #fff7ed; border: 1px solid #f97316; border-radius: 8px; padding: 24px; margin: 32px 0;">
      <p style="color: #9a3412; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">Ми отримали запит на скидання вашого пароля. Якщо ви не робили цього запиту, просто проігноруйте цей лист.</p>
    </div>

    <!-- CTA section -->
    <div style="text-align: center; margin: 50px 0;">
      <p style="color: #374151; font-size: 18px; margin: 0 0 32px 0; font-weight: 600;">Щоб скинути пароль, натисніть кнопку нижче:</p>
      
      <!-- Enhanced button -->
      <div style="margin: 32px 0;">
        <a href="{resetURL}" style="background: #f97316; color: white; padding: 18px 36px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 18px; display: inline-block; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3), 0 2px 4px rgba(249, 115, 22, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
          <span style="position: relative; z-index: 1;">🔑 Скинути пароль</span>
        </a>
      </div>
      
      <!-- URL fallback -->
      <div style="margin-top: 32px; padding: 24px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <p style="color: #6b7280; font-size: 14px; margin: 0 0 12px 0; font-weight: 600;">Або скопіюйте це посилання у ваш браузер:</p>
        <p style="color: #3b82f6; font-size: 13px; word-break: break-all; background-color: white; padding: 12px; border-radius: 8px; margin: 0; border: 1px solid #e5e7eb; font-family: 'Courier New', monospace;">{resetURL}</p>
      </div>
    </div>

    <!-- Enhanced expiry warning -->
    <div style="background: #fff7ed; border: 1px solid #ef4444; border-radius: 8px; padding: 24px; margin: 32px 0;">
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <div style="background: #ef4444; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: bold;">⏰</div>
        <div>
          <p style="color: #dc2626; font-weight: 700; margin: 0 0 8px 0; font-size: 16px;">Термін дії</p>
          <p style="color: #ef4444; margin: 0; font-size: 15px; line-height: 1.5;">Це посилання буде дійсним протягом <strong>1 години</strong> з міркувань безпеки. Після закінчення терміну дії вам потрібно буде запросити нове посилання.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin: 50px 0 40px 0;">
      <div style="border-top: 2px solid #e5e7eb; padding-top: 40px;">
        <div style="background: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: #f97316; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; margin: 12px 0 0 0; font-weight: 800;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
   Footer 
  <div style="text-align: center; margin-top: 40px; padding: 30px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
      <p style="color: #9ca3af; font-size: 14px; margin: 0 0 12px 0; font-weight: 500;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 12px; margin: 0; font-weight: 600;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`








export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Пароль успішно скинуто - СамоГуру</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
  <!-- Header -->
  <div style="background: #ffffff; padding: 40px 20px; text-align: center; border-radius: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    <!-- Logo container -->
    <div style="margin-bottom: 20px;">
      <span style="font-size: 32px;">СамоГуру</span>
    </div>
    
    <p style="color: #f97316; margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Пароль успішно скинуто</p>
  </div>
  
  <!-- Main content -->
  <div style="background-color: white; padding: 40px; border-radius: 16px; margin-top: 20px;">
    <!-- Success message -->
    <div style="text-align: center; margin-bottom: 40px;">
       Large success indicator 
      <div style="background: #d1fae5; color: #10b981; width: 120px; height: 120px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin: 0 auto 32px auto; position: relative;">
        <div style="background: #10b981; color: white; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; font-size: 36px; font-weight: 900; text-align: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">✓</div>
        
         Animated rings 
        <div style="position: absolute; top: -8px; left: -8px; right: -8px; bottom: -8px; border: 2px solid #10b981; border-radius: 50%; opacity: 0.3; animation: pulse 2s infinite;"></div>
        <div style="position: absolute; top: -16px; left: -16px; right: -16px; bottom: -16px; border: 1px solid #10b981; border-radius: 50%; opacity: 0.2; animation: pulse 2s infinite 0.5s;"></div>
      </div>
      
      <h2 style="color: #1f2937; font-size: 32px; font-weight: 800; margin: 0 0 16px 0; letter-spacing: -0.5px;">Готово!</h2>
      <p style="color: #6b7280; font-size: 20px; margin: 0; font-weight: 500;">Ваш пароль було успішно змінено</p>
    </div>

     Security alert 
    <div style="background: #fff7ed; border: 1px solid #ef4444; border-radius: 8px; padding: 24px; margin: 32px 0;">
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <div style="background: #ef4444; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: bold;">🔒</div>
        <div>
          <p style="color: #dc2626; font-weight: 700; margin: 0 0 8px 0; font-size: 18px;">Безпека</p>
          <p style="color: #ef4444; margin: 0; font-size: 16px; line-height: 1.6;">Якщо ви не ініціювали скидання пароля, негайно зверніться до служби підтримки. Ваш обліковий запис може бути під загрозою.</p>
        </div>
      </div>
    </div>

     Security recommendations 
    <div style="background: #eff6ff; padding: 32px; border-radius: 16px; border: 2px solid #bfdbfe; margin: 40px 0; position: relative;">
      <div style="position: absolute; top: -12px; left: 24px; background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 700;">💡 ПОРАДИ З БЕЗПЕКИ</div>
      
      <h3 style="color: #0369a1; font-size: 20px; font-weight: 700; margin: 20px 0 24px 0;">Рекомендації для захисту вашого облікового запису:</h3>
      
      <div style="space-y: 16px;">
        <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px;">
          <div style="background: #0284c7; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: bold;">1</div>
          <p style="color: #0284c7; margin: 0; font-size: 16px; font-weight: 500;">Використовуйте надійний, унікальний пароль довжиною мінімум 12 символів</p>
        </div>
        
        <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px;">
          <div style="background: #0284c7; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: bold;">2</div>
          <p style="color: #0284c7; margin: 0; font-size: 16px; font-weight: 500;">Увімкніть двофакторну автентифікацію, якщо доступно</p>
        </div>
        
        <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px;">
          <div style="background: #0284c7; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: bold;">3</div>
          <p style="color: #0284c7; margin: 0; font-size: 16px; font-weight: 500;">Уникайте використання одного пароля на кількох сайтах</p>
        </div>
        
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="background: #0284c7; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: bold;">4</div>
          <p style="color: #0284c7; margin: 0; font-size: 16px; font-weight: 500;">Регулярно оновлюйте паролі та перевіряйте активність облікового запису</p>
        </div>
      </div>
    </div>

     Enhanced footer 
    <div style="text-align: center; margin: 50px 0 40px 0;">
      <div style="border-top: 2px solid #e5e7eb; padding-top: 40px;">
        <p style="color: #6b7280; font-size: 16px; margin: 0 0 24px 0; font-weight: 500;">Дякуємо за допомогу у забезпеченні безпеки вашого облікового запису</p>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: #10b981; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; margin: 12px 0 0 0; font-weight: 800;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
   Footer 
  <div style="text-align: center; margin-top: 40px; padding: 30px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
      <p style="color: #9ca3af; font-size: 14px; margin: 0 0 12px 0; font-weight: 500;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 12px; margin: 0; font-weight: 600;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>

  <style>
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.05); opacity: 0.1; }
      100% { transform: scale(1); opacity: 0.3; }
    }
  </style>
</body>
</html>
`







export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ласкаво просимо до СамоГуру!</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
  <!-- Header -->
  <div style="background: #ffffff; padding: 40px 20px; text-align: center; border-radius: 16px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #1f2937; margin: 0; font-size: 32px; font-weight: 600;">СамоГуру</h1>
    <p style="color: #f97316; margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Ласкаво просимо!</p>
  </div>
  
  <!-- Main content -->
  <div style="background-color: white; padding: 40px; border-radius: 16px; margin-top: 20px;">
    <!-- Welcome message -->
    <div style="text-align: center; margin-bottom: 32px;">
      <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 16px 0;">Вітаємо, {employeeName}!</h2>
      <p style="color: #6b7280; font-size: 16px; margin: 0;">Ви успішно приєдналися до команди як</p>
      <div style="margin: 16px 0;">
        <span style="color: #f97316; font-size: 18px; font-weight: 600;">{role}</span>
      </div>
    </div>

    <!-- Employee details -->
    <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin: 32px 0;">
      <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 20px 0;">Інформація для входу:</h3>
      
      <div style="display: grid; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 4px;">
          <span style="color: #f97316;">📧</span>
          <div>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Email:</p>
            <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">{email}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Getting started -->
    <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 24px; margin: 32px 0;">
      <h3 style="color: #9a3412; font-size: 18px; font-weight: 600; margin: 0 0 20px 0;">Перші кроки:</h3>
      
      <div style="display: grid; gap: 16px;">
        <div style="display: flex; gap: 12px;">
          <span style="color: #f97316;">1.</span>
          <p style="color: #9a3412; margin: 0; font-size: 14px;">Увійдіть до системи та заповніть профіль</p>
        </div>
        <div style="display: flex; gap: 12px;">
          <span style="color: #f97316;">2.</span>
          <p style="color: #9a3412; margin: 0; font-size: 14px;">Ознайомтеся з правилами платформи</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; padding-top: 32px; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 14px; margin: 0;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`





// Role-specific welcome email for new hires
export const ROLE_ASSIGNMENT_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Зміна ролі - СамоГуру</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);">
   Header 
  <div style="background: linear-gradient(135deg, #0369a1 0%, #0284c7 30%, #0ea5e9 70%, #38bdf8 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden;">
     Icon container 
    <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%); width: 90px; height: 90px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; border: 2px solid rgba(255, 255, 255, 0.3); backdrop-filter: blur(10px);">
      <span style="font-size: 42px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">🔄</span>
    </div>
    
    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.2); letter-spacing: -0.5px;">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Зміна ролі</p>
  </div>
  
   Main content 
  <div style="background-color: white; padding: 50px 40px; border-radius: 0 0 16px 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
    <div style="text-align: center; margin-bottom: 40px;">
      <h2 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 16px 0;">Вашу роль було змінено</h2>
      <p style="color: #6b7280; font-size: 18px; margin: 0;">Менеджер оновив ваші права доступу</p>
    </div>

     Role change details 
    <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 32px; border-radius: 16px; border: 2px solid #bae6fd; margin: 40px 0;">
      <div style="text-align: center;">
        <p style="color: #0369a1; font-size: 16px; margin: 0 0 20px 0; font-weight: 600;">Ваша нова роль:</p>
        <div style="background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%); color: white; padding: 16px 32px; border-radius: 12px; display: inline-block; font-size: 20px; font-weight: 800; box-shadow: 0 4px 12px rgba(3, 105, 161, 0.3);">
          {newRole}
        </div>
      </div>
    </div>

     Footer 
    <div style="text-align: center; margin: 40px 0 30px 0;">
      <div style="border-top: 2px solid #e5e7eb; padding-top: 30px;">
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; margin: 12px 0 0 0; font-weight: 800;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
   Footer 
  <div style="text-align: center; margin-top: 40px; padding: 30px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
      <p style="color: #9ca3af; font-size: 14px; margin: 0 0 12px 0; font-weight: 500;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 12px; margin: 0; font-weight: 600;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>
</body>
</html>
`
