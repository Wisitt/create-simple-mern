import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('เข้าสู่ระบบสำเร็จ');
        // ทำตามขั้นตอนถัดไป หรือเปลี่ยนเส้นทางไปหน้าใด ๆ ตามที่คุณต้องการ
      } else {
        console.error('การเข้าสู่ระบบไม่สำเร็จ');
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ API', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default Login;
