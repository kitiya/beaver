import React from 'react';
import SearchForm from '../shared/SearchForm';

let headerImageStyle = {
    background: 'linear-gradient(rgba(0, 45, 92, 0.2), rgba(0, 45, 92, 0.2)), url(https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    height: '25vh',
}

const ThingsToDoMainPage = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <article className="m-0">
                <header className="m-0 p-0" style={headerImageStyle}>
                    <h1 className="text-center text-white mb-4 pt-5">Fun Things to Do with Kids In & Around Saskatoon</h1>
                    <SearchForm></SearchForm>
                </header>
                <section className="container row mt-4 mx-auto">
                    <div className="col-sm-6 col-md-8">
                        <img
                            className="w-100 rounded"
                            src="https://www.rainforest-alliance.org/sites/default/files/2017-08/kids-running-grass-teaser.jpg"
                            alt="camp" />
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h5 className="text-info">Discover the Perfect Summer Camp</h5>
                        <p>Use our powerful search tool to find and book a camp for your child, it's never been easier!</p>
                        <button className="btn text-white border-warning rounded bg-yellowish">See Camp Listing</button>
                    </div>
                </section>
            </article>
            <article className="container mt-4">
                <section className="row justify-content-center">
                    <h4 className="text-pinkish">Discover the Kid Friendly Side of the City</h4>
                    <h5 className="text-purple">Search through all listings by category and learn more about great places to take the family</h5>
                    <p className="px-3">
                        Cupcake ipsum dolor sit. Amet cheesecake powder muffin. Soufflé ice cream sweet chocolate gingerbread powder fruitcake. Donut sweet roll icing gingerbread dessert.
                        Gummi bears croissant sesame snaps. Tart powder croissant topping. Topping danish croissant sweet pudding. Chocolate cake fruitcake dessert sweet roll sesame snaps sweet roll tiramisu.
                    </p>
                </section>
                <section>
                    <div className="row justify-content-center">
                        <div className="col-sm-4 align-self-center">
                            <p className="text-right">Sesame snaps cake dragée muffin marzipan. Chocolate bar cheesecake cotton candy gummi bears sweet sugar plum oat cake.</p>
                        </div>
                        <div className="col-sm-4">
                            <img
                            className="w-100 rounded"
                            src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                            alt="camp" />
                        </div>
                        <div className="col-sm-4">
                            <img
                            className="w-100 rounded"
                            src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                            alt="camp" />
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ThingsToDoMainPage;