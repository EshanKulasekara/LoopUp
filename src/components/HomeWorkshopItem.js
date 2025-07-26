import Button from "./Button";
import '../styles/HomeWorkshopItem.css';

export default function HomeWorkshopItem() {
  return (
    <div className='Workshop-item'>
      <div className='Workshop-image'></div>
      <div className='Workshop-info'>
        <h2>Workshop Title</h2>
        <p>Short description of the workshop.</p>
        <Button className='Workshop-button'>View Details</Button>
      </div>
    </div>
  );
}