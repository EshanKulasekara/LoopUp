import Link from 'next/link';
import './home-page.css'
import Button from '@/components/Button';
import Field from '@/components/Field';
import HomeWorkshopItem from '@/components/HomeWorkshopItem';

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
      <div className='Title-section'>
        <h1>Welcome to Our Workshop Platform</h1>
        <p>Discover and join workshops that match your interests.</p>
      </div>
      <div className='Image-carausel'>
        <h2>This new Workshop</h2>
        <p>Science</p>
      </div>
      <div className='content-section'>
        <div className='search-bar'>
          {/* Date Picker */}
          <input type="date" className="SearchBar-date" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          {/* Field Picker Dropdown */}
          <select className="SearchBar-field" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="">All Fields</option>
            <option value="technology">Technology</option>
            <option value="art">Art</option>
            <option value="science">Science</option>
            <option value="business">Business</option>
          </select>
          {/* Search Input */}
          <input type="text" className="SearchBar-input" placeholder="Search by topic or location" style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          {/* Search Button */}
          <Button className="SearchBar-button">Search</Button>
        </div>
        <div className='Workshop-list'>
            <HomeWorkshopItem />
            <HomeWorkshopItem />
            <HomeWorkshopItem />
            <HomeWorkshopItem />
        </div>
      </div>
    </div>
  );
}
