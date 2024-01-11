'use client';
import React, { useState } from 'react';
import { UserProps, AddressProps, UserDetailsProps } from '@/assets/types';
import useZipcode from '@/hooks/useZipcode';

export default function Register() {
  const [userData, setUserData] = useState<UserProps>({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
  });
  const [address, setAddress] = useState<AddressProps>({ address: { zipcode: 0, detail: '' } });

  const { state: zipcode } = useZipcode();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setUserData((prev) => {
      const data = { ...prev };
      data[key] = value;
      return data;
    });
  };
  const handleSubmit = () => {};

  return (
    <div>
      <h1>註冊</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>電子信箱</span>
          <input type="email" name="email" id="" placeholder="hello@example.com" onChange={handleInput} />
        </label>
        <label>
          <span>密碼</span>
          <input type="password" name="password" id="" placeholder="請輸入密碼" onChange={handleInput} />
        </label>
        <label>
          <span>確認密碼</span>
          <input type="password" name="pwdagain" id="" placeholder="請再次輸入密碼" onChange={handleInput} />
        </label>
        <label>
          <span>姓名</span>
          <input type="text" name="name" id="" placeholder="請輸入姓名" onChange={handleInput} />
        </label>
        <label>
          <span>手機號碼</span>
          <input type="phone" name="phone" id="" placeholder="請輸入姓名" onChange={handleInput} />
        </label>
        <label>
          <span>生日</span>
          <input type="text" name="birthday" id="" placeholder="請輸入姓名" onChange={handleInput} />
        </label>
        <label>
          <span>地址</span>
          <input type="address" name="address" id="" placeholder="請輸入姓名" onChange={handleInput} />
        </label>

        <button type="submit">送出</button>
      </form>
    </div>
  );
}
