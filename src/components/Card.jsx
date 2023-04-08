import Card from 'react-bootstrap/Card';

function Image({title, img, description}) {

    return (

      <Card className='content'>
        <Card.Img src= {img} />
        <Card.Body>
          <Card.Title className='title'>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        
        </Card.Body>
      </Card>
    );
  }
  
  export default Image;