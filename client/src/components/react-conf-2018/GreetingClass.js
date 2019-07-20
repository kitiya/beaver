import React from 'react';

export default class GreetingClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Marry",
        }

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    /*
    handleNameChange = ((e) => {
        this.setState({
            name: e.target.value
        })
    });
    */

    render() {
        return (
            <section className="container mt-3">
                <div className="row">
                    <input
                        value = {this.state.name}
                        onChange={this.handleNameChange}
                    />
                </div>
            </section>
        );
    }
}