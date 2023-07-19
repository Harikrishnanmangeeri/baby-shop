import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const FoodCard = () => {
    const ab=useNavigate()
    return (
      <Card className="w-100" onClick={()=>ab('/food')}>
        <Card.Img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_feeding_&_kids_food_090523_01.jpg" alt="Card image" />
    
      </Card>
    );
}

export default FoodCard