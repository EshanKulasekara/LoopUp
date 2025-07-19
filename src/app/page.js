import Link from 'next/link';
import './home-page.css'
import Button from '@/components/Button';
import Field from '@/components/Field';

export default function Home() {
  return (
    <div>
      <div className='Header'>
        <h2>Logo</h2>
        <div className='Header-links'>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
      <div className='Hero'>
        <div className="Hero-image"></div>
        <div className="Hero-content">
          <h1 className="Hero-title">
            Discover Local Workshops & Expos for Students
          </h1>
          <div className='Input-group'>
            <Field className='Input-Field' placeholder="Search by topic or location" />
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
