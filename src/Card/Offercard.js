import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function OfferCard() {
    const ab=useNavigate()
  return (
    <Card className="w-100" onClick={()=>ab('/Others')}>
      <Card.Img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_essentials_090523_01.jpg" alt="Card image" />
  
    </Card>
  );
}

export default OfferCard;