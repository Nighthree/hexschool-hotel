import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/loginLayout';
import LoginPage from '@/app/v.login';

export default function Home() {
  return (
    <main>
      <Layout>
        <LoginPage />
      </Layout>
    </main>
  );
}
