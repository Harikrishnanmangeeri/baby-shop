import {Carousel,Image} from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <Carousel id='home'>
    <Carousel.Item>

    <Image src={require("./images/Baby.jpg")} alt='Photo' className='w-100'/>  
      <Carousel.Caption>
        <h3 className='text-muted' >"Welcome to Our Little Wonderland!"</h3>
        <p className='text-muted'> "In the embrace of tiny arms, we find boundless joy.".</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image src={require("./images/Baby2.jpg")} alt='Photo' className='w-100'/>
      <Carousel.Caption>
        <h3><span className='text-muted'>"Celebrating</span> the Miracle of Life!"</h3>
        <p> <span className='text-muted'>"Every coo, every cuddle,</span> a reminder of life's purest miracles."</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image src={require("./images/Baby3.jpg")} alt='Photo' className='w-100'/>

      <Carousel.Caption>
        <h3 className='text'> "Join Us on this Journey of Parenthood!"</h3>
        <p>
        "Together, we'll create memories that sparkle like stardust."
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}



export default DarkVariantExample;