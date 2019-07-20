import React from 'react';

export default class GreetingClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Marry",
            surname: "Poppins",
        }
    }

    componentDidMount() {
        document.title = this.state.name + " " + this.state.surname;

    }

    componentDidUpdate() {
        document.title = this.state.name + " " + this.state.surname;
    }

    handleNameChange = ((e) => {
        this.setState({
            name: e.target.value
        });
    });

    handleSurnameChange = ((e) => {
        this.setState({
            surname: e.target.value
        });
    });

    render() {
        return (
            <section className="container mt-3">
                <div className="row">
                    <input
                        value = {this.state.name}
                        onChange={this.handleNameChange}
                    />
                </div>
                <div className="row">
                     <input
                         value = {this.state.surname}
                         onChange={this.handleSurnameChange}
                     />
                </div>
            </section>
        );
    }
}