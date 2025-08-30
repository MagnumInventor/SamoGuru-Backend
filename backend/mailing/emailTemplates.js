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
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
   Header with enhanced gradient 
  <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 30%, #a855f7 70%, #c084fc 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden;">
     Decorative elements 
    <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.5;"></div>
    <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.3;"></div>
    
     Logo container with enhanced styling 
    <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%); width: 90px; height: 90px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; border: 2px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);">
      <span style="font-size: 42px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">🎯</span>
    </div>
    
    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.2); letter-spacing: -0.5px;">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Підтвердіть вашу пошту</p>
  </div>
  
   Main content with enhanced styling 
  <div style="background-color: white; padding: 50px 40px; border-radius: 0 0 16px 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); position: relative;">
     Welcome section 
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; border: 3px solid #e5e7eb;">
        <span style="font-size: 32px;">👋</span>
      </div>
      <h2 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.5px;">Вітаємо в команді!</h2>
      <p style="color: #6b7280; font-size: 18px; margin: 0; font-weight: 500;">Дякуємо за реєстрацію на платформі СамоГуру</p>
    </div>

     Verification code section with enhanced design 
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; padding: 40px; text-align: center; margin: 40px 0; border: 2px dashed #cbd5e1; position: relative; overflow: hidden;">
       Decorative background pattern 
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);"></div>
      
      <div style="position: relative; z-index: 1;">
        <p style="color: #374151; font-size: 18px; margin: 0 0 24px 0; font-weight: 600;">Ваш код підтвердження:</p>
        
         Enhanced verification code display 
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%); color: white; padding: 30px 20px; border-radius: 12px; margin: 24px 0; box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(99, 102, 241, 0.2); position: relative; overflow: hidden;">
           Shine effect 
          <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: shine 2s infinite;"></div>
          
          <span style="font-size: 42px; font-weight: 900; letter-spacing: 12px; font-family: 'Courier New', monospace; text-shadow: 0 2px 4px rgba(0,0,0,0.2); position: relative; z-index: 1;">{verificationCode}</span>
        </div>
        
        <p style="color: #6b7280; font-size: 16px; margin: 24px 0 0 0; font-weight: 500;">Введіть цей код на сторінці верифікації</p>
      </div>
    </div>

     Enhanced warning section 
    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 5px solid #f59e0b; padding: 20px; border-radius: 0 12px 12px 0; margin: 40px 0; box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.1);">
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <div style="background: #f59e0b; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; font-weight: bold;">⏰</div>
        <div>
          <p style="color: #92400e; font-weight: 700; margin: 0 0 8px 0; font-size: 16px;">Важливо!</p>
          <p style="color: #b45309; margin: 0; font-size: 15px; line-height: 1.5;">Код дійсний протягом <strong>1 години</strong> з міркувань безпеки. Після закінчення терміну дії вам потрібно буде запросити новий код.</p>
        </div>
      </div>
    </div>

     Enhanced footer section 
    <div style="text-align: center; margin: 50px 0 40px 0;">
      <div style="border-top: 2px solid #e5e7eb; padding-top: 40px;">
        <p style="color: #6b7280; font-size: 16px; margin: 0 0 24px 0; font-weight: 500;">Якщо ви не створювали обліковий запис, просто проігноруйте цей лист</p>
        
         Enhanced signature card 
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; margin: 24px 0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; margin: 12px 0 0 0; font-weight: 800;">Команда СамоГуру 🚀</p>
        </div>
      </div>
    </div>
  </div>
  
   Enhanced footer 
  <div style="text-align: center; margin-top: 40px; padding: 30px;">
    <div style="border-top: 1px solid #e5e7eb; padding-top: 30px;">
      <p style="color: #9ca3af; font-size: 14px; margin: 0 0 12px 0; font-weight: 500;">Це автоматичне повідомлення, будь ласка, не відповідайте на цей лист</p>
      <p style="color: #d1d5db; font-size: 12px; margin: 0; font-weight: 600;">© 2025 СамоГуру. Всі права захищені.</p>
    </div>
  </div>

  <style>
    @keyframes shine {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  </style>
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
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);">
   Header with warm gradient 
  <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 30%, #b45309 70%, #92400e 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden;">
     Decorative elements 
    <div style="position: absolute; top: -40px; right: -40px; width: 80px; height: 80px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.6;"></div>
    <div style="position: absolute; bottom: -20px; left: -20px; width: 40px; height: 40px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.4;"></div>
    
     Enhanced logo container 
    <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%); width: 90px; height: 90px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; border: 2px solid rgba(255, 255, 255, 0.3); backdrop-filter: blur(10px);">
      <span style="font-size: 42px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">🔑</span>
    </div>
    
    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.2); letter-spacing: -0.5px;">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Скидання пароля</p>
  </div>
  
   Main content 
  <div style="background-color: white; padding: 50px 40px; border-radius: 0 0 16px 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
     Header section 
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; border: 3px solid #fbbf24;">
        <span style="font-size: 32px;">🔐</span>
      </div>
      <h2 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.5px;">Забули пароль?</h2>
      <p style="color: #6b7280; font-size: 18px; margin: 0; font-weight: 500;">Не хвилюйтеся, ми допоможемо вам його відновити</p>
    </div>

     Info section 
    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 5px solid #f59e0b; padding: 20px; border-radius: 0 12px 12px 0; margin: 40px 0; box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.1);">
      <p style="color: #92400e; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">Ми отримали запит на скидання вашого пароля. Якщо ви не робили цього запиту, просто проігноруйте цей лист.</p>
    </div>

     CTA section 
    <div style="text-align: center; margin: 50px 0;">
      <p style="color: #374151; font-size: 18px; margin: 0 0 32px 0; font-weight: 600;">Щоб скинути пароль, натисніть кнопку нижче:</p>
      
       Enhanced button 
      <div style="margin: 32px 0;">
        <a href="{resetURL}" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%); color: white; padding: 18px 36px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 18px; display: inline-block; box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4), 0 10px 10px -5px rgba(245, 158, 11, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
          <span style="position: relative; z-index: 1;">🔑 Скинути пароль</span>
        </a>
      </div>
      
       URL fallback 
      <div style="margin-top: 32px; padding: 24px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <p style="color: #6b7280; font-size: 14px; margin: 0 0 12px 0; font-weight: 600;">Або скопіюйте це посилання у ваш браузер:</p>
        <p style="color: #3b82f6; font-size: 13px; word-break: break-all; background-color: white; padding: 12px; border-radius: 8px; margin: 0; border: 1px solid #e5e7eb; font-family: 'Courier New', monospace;">{resetURL}</p>
      </div>
    </div>

     Enhanced expiry warning 
    <div style="background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); border-left: 5px solid #ef4444; padding: 20px; border-radius: 0 12px 12px 0; margin: 40px 0; box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.1);">
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <div style="background: #ef4444; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 16px; font-weight: bold;">⏰</div>
        <div>
          <p style="color: #dc2626; font-weight: 700; margin: 0 0 8px 0; font-size: 16px;">Термін дії</p>
          <p style="color: #ef4444; margin: 0; font-size: 15px; line-height: 1.5;">Це посилання буде дійсним протягом <strong>1 години</strong> з міркувань безпеки. Після закінчення терміну дії вам потрібно буде запросити нове посилання.</p>
        </div>
      </div>
    </div>

     Enhanced footer 
    <div style="text-align: center; margin: 50px 0 40px 0;">
      <div style="border-top: 2px solid #e5e7eb; padding-top: 40px;">
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; margin: 12px 0 0 0; font-weight: 800;">Команда СамоГуру 🚀</p>
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
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);">
   Header with success gradient 
  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 70%, #065f46 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden;">
     Decorative elements 
    <div style="position: absolute; top: -30px; right: -30px; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.7;"></div>
    <div style="position: absolute; bottom: -15px; left: -15px; width: 30px; height: 30px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; opacity: 0.5;"></div>
    
     Success icon container 
    <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%); width: 90px; height: 90px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; border: 2px solid rgba(255, 255, 255, 0.3); backdrop-filter: blur(10px);">
      <span style="font-size: 42px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">✅</span>
    </div>
    
    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.2); letter-spacing: -0.5px;">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Пароль успішно скинуто</p>
  </div>
  
   Main content 
  <div style="background-color: white; padding: 50px 40px; border-radius: 0 0 16px 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
     Success message 
    <div style="text-align: center; margin-bottom: 40px;">
       Large success indicator 
      <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); width: 120px; height: 120px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 32px; border: 4px solid #10b981; position: relative;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; width: 80px; height: 80px; line-height: 80px; border-radius: 50%; font-size: 36px; font-weight: 900; text-align: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">✓</div>
        
         Animated rings 
        <div style="position: absolute; top: -8px; left: -8px; right: -8px; bottom: -8px; border: 2px solid #10b981; border-radius: 50%; opacity: 0.3; animation: pulse 2s infinite;"></div>
        <div style="position: absolute; top: -16px; left: -16px; right: -16px; bottom: -16px; border: 1px solid #10b981; border-radius: 50%; opacity: 0.2; animation: pulse 2s infinite 0.5s;"></div>
      </div>
      
      <h2 style="color: #1f2937; font-size: 32px; font-weight: 800; margin: 0 0 16px 0; letter-spacing: -0.5px;">Готово!</h2>
      <p style="color: #6b7280; font-size: 20px; margin: 0; font-weight: 500;">Ваш пароль було успішно змінено</p>
    </div>

     Security alert 
    <div style="background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); border-left: 5px solid #ef4444; padding: 24px; border-radius: 0 12px 12px 0; margin: 40px 0; box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.1);">
      <div style="display: flex; align-items: flex-start; gap: 16px;">
        <div style="background: #ef4444; color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: bold;">🔒</div>
        <div>
          <p style="color: #dc2626; font-weight: 700; margin: 0 0 8px 0; font-size: 18px;">Безпека</p>
          <p style="color: #ef4444; margin: 0; font-size: 16px; line-height: 1.6;">Якщо ви не ініціювали скидання пароля, негайно зверніться до служби підтримки. Ваш обліковий запис може бути під загрозою.</p>
        </div>
      </div>
    </div>

     Security recommendations 
    <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 32px; border-radius: 16px; border: 2px solid #bae6fd; margin: 40px 0; position: relative;">
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
        
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 20px; margin: 12px 0 0 0; font-weight: 800;">Команда СамоГуру 🚀</p>
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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);">
   Header with celebration gradient 
  <div style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #c084fc 50%, #d8b4fe 75%, #e9d5ff 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden;">
     Celebration confetti elements 
    <div style="position: absolute; top: 10px; left: 10%; width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; opacity: 0.8; animation: float 3s ease-in-out infinite;"></div>
    <div style="position: absolute; top: 20px; right: 15%; width: 6px; height: 6px; background: #ef4444; border-radius: 50%; opacity: 0.7; animation: float 3s ease-in-out infinite 0.5s;"></div>
    <div style="position: absolute; bottom: 15px; left: 20%; width: 10px; height: 10px; background: #10b981; border-radius: 50%; opacity: 0.6; animation: float 3s ease-in-out infinite 1s;"></div>
    <div style="position: absolute; bottom: 25px; right: 10%; width: 7px; height: 7px; background: #3b82f6; border-radius: 50%; opacity: 0.8; animation: float 3s ease-in-out infinite 1.5s;"></div>
    
     Celebration icon container 
    <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%); width: 100px; height: 100px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px; border: 3px solid rgba(255, 255, 255, 0.4); backdrop-filter: blur(15px); position: relative;">
      <span style="font-size: 48px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)); animation: bounce 2s ease-in-out infinite;">🎉</span>
      
       Sparkle effects 
      <div style="position: absolute; top: -5px; right: 10px; font-size: 16px; animation: sparkle 1.5s ease-in-out infinite;">✨</div>
      <div style="position: absolute; bottom: 5px; left: 5px; font-size: 12px; animation: sparkle 1.5s ease-in-out infinite 0.7s;">⭐</div>
    </div>
    
    <h1 style="color: white; margin: 0; font-size: 36px; font-weight: 900; text-shadow: 0 2px 4px rgba(0,0,0,0.2); letter-spacing: -0.5px;">СамоГуру</h1>
    <p style="color: rgba(255, 255, 255, 0.95); margin: 16px 0 0 0; font-size: 20px; font-weight: 600;">Ласкаво просимо до команди!</p>
  </div>
  
   Main content 
  <div style="background-color: white; padding: 50px 40px; border-radius: 0 0 16px 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
     Welcome message 
    <div style="text-align: center; margin-bottom: 40px;">
      <h2 style="color: #1f2937; font-size: 32px; font-weight: 800; margin: 0 0 20px 0; letter-spacing: -0.5px;">Вітаємо, {employeeName}!</h2>
      <p style="color: #6b7280; font-size: 20px; margin: 0; font-weight: 500;">Ви успішно приєдналися до команди СамоГуру як</p>
      <div style="margin: 16px 0;">
        <span style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); color: white; padding: 8px 20px; border-radius: 20px; font-size: 18px; font-weight: 700; display: inline-block; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);">{role}</span>
      </div>
    </div>

     Employee details card 
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; padding: 32px; margin: 40px 0; border: 2px solid #e2e8f0; position: relative;">
      <div style="position: absolute; top: -12px; left: 24px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 700;">👤 ВАШІ ДАНІ</div>
      
      <h3 style="color: #374151; font-size: 22px; font-weight: 700; margin: 20px 0 24px 0; text-align: center;">Інформація для входу:</h3>
      
      <div style="background-color: white; padding: 24px; border-radius: 12px; border: 1px solid #d1d5db; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
        <div style="display: grid; gap: 16px;">
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 8px;">
            <div style="background: #3b82f6; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">📧</div>
            <div>
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 600;">Email:</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 700;">{email}</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 8px;">
            <div style="background: #8b5cf6; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">👔</div>
            <div>
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 600;">Роль:</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 700;">{role}</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 8px;">
            <div style="background: #10b981; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px;">📅</div>
            <div>
              <p style="margin: 0; color: #6b7280; font-size: 14px; font-weight: 600;">Дата початку роботи:</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 700;">{startDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     Getting started steps 
    <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 32px; border-radius: 16px; border: 2px solid #bfdbfe; margin: 40px 0; position: relative;">
      <div style="position: absolute; top: -12px; left: 24px; background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 700;">🚀 ПЕРШІ КРОКИ</div>
      
      <h3 style="color: #1d4ed8; font-size: 22px; font-weight: 700; margin: 20px 0 24px 0; text-align: center;">Що робити далі:</h3>
      
      <div style="space-y: 16px;">
        <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
          <div style="background: #2563eb; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; font-weight: bold;">1</div>
          <p style="color: #1e40af; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">Зверніться до свого керівника/адміністратора з повідомленням про успішну реєстрацію</p>
        </div>
        
        <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
          <div style="background: #2563eb; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; font-weight: bold;">2</div>
          <p style="color: #1e40af; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">Увійдіть до системи та заповніть свій профіль</p>
        </div>
        
        <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px;">
          <div style="background: #2563eb; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; font-weight: bold;">3</div>
          <p style="color: #1e40af; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">Ознайомтеся з правилами та процедурами</p>
        </div>
        
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <div style="background: #2563eb; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; font-weight: bold;">4</div>
          <p style="color: #1e40af; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">Перегляньте свій розклад роботи</p>
        </div>
      </div>
    </div>

     CTA Button 
    <div style="text-align: center; margin: 50px 0;">
      <a href="{loginURL}" style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%); color: white; padding: 20px 40px; text-decoration: none; border-radius: 16px; font-weight: 800; font-size: 20px; display: inline-block; box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.4), 0 10px 10px -5px rgba(139, 92, 246, 0.2); transition: all 0.3s ease; position: relative; overflow: hidden;">
        <span style="position: relative; z-index: 1;">🚀 Увійти до системи</span>
      </a>
    </div>

     Enhanced footer 
    <div style="text-align: center; margin: 50px 0 40px 0;">
      <div style="border-top: 2px solid #e5e7eb; padding-top: 40px;">
        <p style="color: #6b7280; font-size: 18px; margin: 0 0 24px 0; font-weight: 600;">Ми раді бачити вас у нашій команді!</p>
        
        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 32px; border-radius: 16px; border: 1px solid #e2e8f0;">
          <p style="color: #374151; font-size: 16px; margin: 0; font-weight: 600;">З найкращими побажаннями,</p>
          <p style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 24px; margin: 16px 0 0 0; font-weight: 900;">Команда СамоГуру 🚀</p>
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
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }
  </style>
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
      <p style="color: #6b7280; font-size: 18px; margin: 0;">Адміністратор оновив ваші права доступу</p>
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
