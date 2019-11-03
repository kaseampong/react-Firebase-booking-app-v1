import React from 'react';
import { Container,Card, CardImg, CardTitle, CardDeck, CardBody} from 'reactstrap';
import PageHeader from './PageHeader';
import ImageZoom from 'react-medium-image-zoom'


const GalleryPage = (props) => (
 <div>
   
      <PageHeader title='Gallery'/>
        <Container  >
          <Container >
        <h3 className="text-left mt-3">Hostel A</h3>
        <CardDeck>
      <Card>
        <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 1</CardTitle>
        </CardBody>
      </Card>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 2</CardTitle>
        </CardBody>
      </Card>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 3</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
    <Container >
        <h3 className="text-left mt-3">Hostel B</h3>
        <CardDeck>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 1</CardTitle>
        </CardBody>
      </Card>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 2</CardTitle>
        </CardBody>
      </Card>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 3</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
    <Container >
        <h3 className="text-left mt-3">Hostel C</h3>
        <CardDeck>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 1</CardTitle>
        </CardBody>
      </Card>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 2</CardTitle>
        </CardBody>
      </Card>
      <Card>
      <ImageZoom
        image={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width: '100%', height: "250px" }
        }}
        zoomImage={{
          src: '/images/p1.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
        <CardBody>
          <CardTitle>View 3</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
        </Container>
        </div>
);

  
  
  export default GalleryPage;



