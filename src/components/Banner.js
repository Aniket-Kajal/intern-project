import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/images/banner1.jpg" className="d-block w-100" width={600} height={460} alt="Banner 1" />
    </div>
    <div className="carousel-item">
      <Image src="/images/banner2.jpg" className="d-block w-100"  width={600} height={460} alt="Banner 2" />
    </div>
    <div className="carousel-item">
      <Image src="/images/watch.jpg" className="d-block w-100"  width={600} height={460} alt="Banner 3" />
      <div className="carousel-caption d-none d-md-block text-dark">
        <h5>APPLE watches</h5>
        <p>Equipped with iOS 13.32 and some of the flagship features</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner