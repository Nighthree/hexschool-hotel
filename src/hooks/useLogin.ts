import { useState, useEffect } from 'react';

export default function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return {
    state: {},
    methods: {},
  };
}
