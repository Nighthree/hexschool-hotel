'use client';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@uidotdev/usehooks';
import FormLayout from '@/components/formLayout';
import Checkbox from '@/components/checkbox';
import { apiPostUserLogin } from '@/assets/api';

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginInputSchema>();
  const [rememberAccount, setRememberAccount] = useLocalStorage<boolean>('rememberAccount', false);
  const [account, setAccount] = useLocalStorage<string>('account', '');
  const [token, setToken] = useLocalStorage<string | null>('token', '');
  const [error, setError] = useState('');

  const atSubmit: SubmitHandler<LoginInputSchema> = async (data) => {
    setError('');
    if (rememberAccount) setAccount(data.email);
    await apiPostUserLogin(data)
      .then((res) => {
        setToken(res.data.token);
        router.push('/user');
      })
      .catch((error: any) => {
        setError(error.response.data.message);
      });
  };

  const handleRememberAccount = () => {
    setRememberAccount((prev) => !prev);
  };

  useEffect(() => {
    if (rememberAccount) {
      setAccount(account);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3 className="text-primary mb-2 font-size-normal">享樂酒店，誠摯歡迎</h3>
      <h1 className="text-white title">立即開始旅程</h1>
      <form onSubmit={handleSubmit(atSubmit)}>
        <FormLayout className="mb-3" label="電子信箱" color="white">
          <input
            className="input w-100"
            type="text"
            placeholder="hello@exsample.com"
            defaultValue={account}
            {...register('email', { required: true })}
          />
        </FormLayout>
        <FormLayout className="mb-3" label="密碼" color="white">
          <input
            className="input w-100"
            type="password"
            placeholder="請輸入密碼"
            {...register('password', { required: true })}
          />
        </FormLayout>
        <div className="d-flex justify-content-between align-items-center mb-40">
          <Checkbox content="記住帳號" value={rememberAccount} onChange={handleRememberAccount} />
          <Link className="link" href="/">
            忘記密碼？
          </Link>
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn-primary w-100 mb-40" title="會員登入">
          會員登入
        </button>
      </form>
      <div>
        <span className="text-white">沒有會員嗎？</span>
        <Link href="/register" className="link">
          前往註冊
        </Link>
      </div>
    </>
  );
}
