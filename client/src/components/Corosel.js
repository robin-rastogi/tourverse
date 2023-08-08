import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Corosel() {
  return (
    <MDBCarousel
      showIndicators
      showControls
      fade
      interval={3000}
      className="w-75 p-3 mt-5 m-auto"
    >
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://mdbootstrap.com/img/new/slides/041.webp"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
