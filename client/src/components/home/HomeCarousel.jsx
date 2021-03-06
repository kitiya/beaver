import React from 'react';

const HomeCarousel = () => {
    return (
        <article>

            <section id="layout-carousel" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner bg-light">

                    <ol className="carousel-indicators">
                        <li data-target="#layout-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#layout-carousel" data-slide-to="1"></li>
                        <li data-target="#layout-carousel" data-slide-to="2"></li>
                    </ol>

                    <section className="carousel-item active">
                        <img className="layout-image img-fluid d-block rounded w-100 mx-auto" src={"https://i.imgur.com/0tZdozm.jpg"}  alt="kids 1"/>
                    </section>
                    <section className="carousel-item">
                        <img className="layout-image img-fluid d-block rounded w-100 mx-auto" src={"https://i.imgur.com/no46Hyl.jpg"}  alt="kids 2"/>
                    </section>
                    <section className="carousel-item">
                        <img className="layout-image img-fluid d-block rounded w-100 mx-auto" src={"https://i.imgur.com/gfQ6nlW.jpg"}  alt="kids 3"/>
                    </section>

                    <a className="carousel-control-prev" href="#layout-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon">
                            <span className="sr-only">Previous</span>
                        </span>
                    </a>
                    <a className="carousel-control-next" href="#layout-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon">
                            <span className="sr-only">Next</span>
                        </span>
                    </a>

                </div>

            </section>

        </article>
    );
};

export default HomeCarousel;