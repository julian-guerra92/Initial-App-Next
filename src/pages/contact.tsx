import Link from 'next/link';
import { Inter } from '@next/font/google';
import { MainLayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        {/* Ir a <a href='/about'>About</a> */}
        Ir a <Link href='/'>Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  )
}
