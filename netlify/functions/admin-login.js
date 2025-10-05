// netlify/functions/admin-login.js

// Netlify Function ဟာ Server မှာ run မှာ ဖြစ်တဲ့အတွက်
// process.env ကို အသုံးပြုပြီး လျှို့ဝှက်တန်ဖိုး (Secret) တွေကို လုံခြုံစွာ ဝင်ရောက်နိုင်ပါတယ်။
const SECRET_USERNAME = process.env.VITE_ADMIN_USERNAME;
const SECRET_PASSWORD = process.env.VITE_ADMIN_PASSWORD;

// Netlify Function ရဲ့ Entry Point
exports.handler = async (event) => {
    // POST request မဟုတ်ရင် ခွင့်မပြုပါ
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Frontend က ပို့လိုက်တဲ့ JSON data ကို ဖတ်ခြင်း
        const { username, password } = JSON.parse(event.body);

        // 1. Password မှန်/မမှန် စစ်ဆေးခြင်း (Server မှာ)
        if (username === SECRET_USERNAME && password === SECRET_PASSWORD) {
            // 2. Login အောင်မြင်ကြောင်း Frontend ကို Token ဖြင့် ပြန်ပို့ခြင်း
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    success: true, 
                    // လုံခြုံရေးအတွက် ယာယီ Token ကိုသာ ပေးပို့ပါ
                    token: 'valid-admin-session-token', 
                    message: 'Login Successful' 
                })
            };
        } else {
            // Login မအောင်မြင်ပါက 401 Unauthorized ပြန်ပို့ခြင်း
            return {
                statusCode: 401,
                body: JSON.stringify({ 
                    success: false, 
                    message: 'အသုံးပြုသူအမည် (သို့) လျှို့ဝှက်နံပါတ် မမှန်ကန်ပါ။' 
                })
            };
        }
    } catch (error) {
        console.error("Function Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Server error occurred.' })
        };
    }
};