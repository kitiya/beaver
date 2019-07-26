import React from 'react';

const Footer = () => (
    <footer class="site-footer bg-dark mt-5">
        <div className="py-4">
            <h5 className="text-center text-light mb-3">Get connected with us on social networks!</h5>

            <section class="footer-layout-social d-flex justify-content-center">
                <a class="text-light px-2" href="https://twitter.com/planetoftheweb">
                    <i class="layout-icon fa fa-twitter"></i>
                </a>
                <a class="text-light px-2" href="https://facebook.com/viewsource">
                    <i class="layout-icon fa fa-facebook"></i>
                </a>
                <a class="text-light px-2" href="https://linkedin.com/in/planetoftheweb">
                    <i class="layout-icon fa fa-linkedin"></i>
                </a>
                <a class="text-light px-2" href="https://github.com/planetoftheweb">
                    <i class="layout-icon fa fa-github"></i>
                </a>
                <a class="text-light px-2" href="https://www.instagram.com/photos/planetoftheweb/sets/72157602932636630/">
                    <i class="layout-icon fa fa-instagram"></i>
                </a>
                <a class="text-light px-2" href="https://www.youtube.com/user/planetoftheweb">
                    <i class="layout-icon fa fa-youtube"></i>
                </a>
            </section>
        </div>
        <div className="kty-bg-pinkish d-flex justify-content-center py-2">
            <p className="text-light m-0">Copyright © 2019 | Little Beaver Inc.</p>
        </div>
    </footer>

)

export default Footer;