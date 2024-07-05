import React from 'react'
import heroImg from '../assets/it-inventory-management.png'
export default function Home() {
  return (
    // <section id="hero" class="hero section">

    //   <div class="container">
    //     <div class="row justify-content-center" data-aos="zoom-out">
    //       <div class="col-xl-7 col-lg-9 text-center">
    //         <h1>One Page Bootstrap Website Template</h1>
    //         <p>We are team of talented designers making websites with Bootstrap</p>
    //       </div>
    //     </div>
    //     <div class="text-center" data-aos="zoom-out" data-aos-delay="100">
    //       <a href="#about" class="btn-get-started">Get Started</a>
    //     </div>

    //     <div class="row gy-4 mt-5">
    //       <div class="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="100">
    //         <div class="icon-box">
    //           <div class="icon"><i class="bi bi-easel"></i></div>
    //           <h4 class="title"><a href="">Lorem Ipsum</a></h4>
    //           <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
    //         </div>
    //       </div>

    //       <div class="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="200">
    //         <div class="icon-box">
    //           <div class="icon"><i class="bi bi-gem"></i></div>
    //           <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
    //           <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
    //         </div>
    //       </div>

    //       <div class="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="300">
    //         <div class="icon-box">
    //           <div class="icon"><i class="bi bi-geo-alt"></i></div>
    //           <h4 class="title"><a href="">Magni Dolores</a></h4>
    //           <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
    //         </div>
    //       </div>

    //       <div class="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="400">
    //         <div class="icon-box">
    //           <div class="icon"><i class="bi bi-command"></i></div>
    //           <h4 class="title"><a href="">Nemo Enim</a></h4>
    //           <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
    //         </div>
    //       </div>

    //     </div>
    //   </div>

    // </section>
    <div class="container">
      <article>
        <div class="card border-light-subtle">
          <div class="row g-0">
            <div class="col-12 col-md-6 order-1 order-md-0 d-flex align-items-center">
              <div class="card-body p-md-4 p-xl-6 p-xxl-9">
                <div class="entry-header mb-3">
                  <h2 class="card-title entry-title display-3 fw-bold mb-4 lh-1">
                    <a class="link-dark text-decoration-none" href="#!">Inventory Management</a>
                  </h2>
                </div>
                <p class="card-text entry-summary text-secondary mb-4">
                  Detailed item cards, batches, quick stock reports, and accurate inventory cost calculations
                </p>
                <ul class="entry-meta list-unstyled d-flex my-4">
                    <li>
                      <a class="d-inline-flex px-2 py-1 link-accent text-accent-emphasis bg-accent-subtle border border-accent-subtle rounded-2 text-decoration-none fs-7" href="/products">View Products</a>
                    </li>
                  </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 d-flex">
              <img class="img-fluid rounded-end object-fit-cover" loading="lazy" src={heroImg} alt="Entrepreneurship" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
