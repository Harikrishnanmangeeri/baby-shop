import {Carousel,Image} from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <Carousel>
    <Carousel.Item>

    <Image src={require("./images/Baby.jpg")} alt='Photo' className='w-100'/>  
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image src={require("./images/Baby2.jpg")} alt='Photo' className='w-100'/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
    <Image src={require("./images/Baby3.jpg")} alt='Photo' className='w-100'/>

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}



export default DarkVariantExample;