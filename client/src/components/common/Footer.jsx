import React from 'react';

let iconStyle = {
    fontSize: '2rem',
    marginLeft: '10px',
    marginRight: '10px',
}

let siteFooterStyle = {
    background: 'url(http://www.elsa-belgium.org/wp-content/uploads/2014/12/footer-background-011-1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
}

const Footer = () => (
    <footer className="site-footer bg-dark mt-5" style={siteFooterStyle}>
        <div className="py-4">
            <h5 className="text-center text-light mb-3">Get connected with us on social networks!</h5>

            <section className="footer-layout-social d-flex justify-content-center">
                <a className="text-light px-2" href="https://twitter.com/little-beaver">
                    <i className="layout-icon fa fa-twitter" style={iconStyle}></i>
                </a>
                <a className="text-light px-2" href="https://facebook.com/little-beaver">
                    <i className="layout-icon fa fa-facebook" style={iconStyle}></i>
                </a>
                <a className="text-light px-2" href="https://linkedin.com/in/little-beaver">
                    <i className="layout-icon fa fa-linkedin" style={iconStyle}></i>
                </a>
                <a className="text-light px-2" href="https://github.com/little-beaver">
                    <i className="layout-icon fa fa-github" style={iconStyle}></i>
                </a>
                <a className="text-light px-2" href="https://www.instagram.com/photos/little-beaver/">
                    <i className="layout-icon fa fa-instagram" style={iconStyle}></i>
                </a>
                <a className="text-light px-2" href="https://www.youtube.com/user/little-beaver">
                    <i className="layout-icon fa fa-youtube" style={iconStyle}></i>
                </a>
            </section>
        </div>
        <div className="d-flex justify-content-center py-2 border-secondary border border-right-0 border-left-0 border-bottom-0">
            <p className="text-light m-0">Copyright © 2019 | Little Beaver Inc.</p>
        </div>
    </footer>

)

export default Footer;