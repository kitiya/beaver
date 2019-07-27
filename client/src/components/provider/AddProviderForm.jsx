import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

const TextInput = ({children, ...props}) => {
    return (
        <input
            type="text"
            className="form-control"
            {...props}
        />
    );
};

const AddProviderForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');

    const handleSubmit = (e) => {
        //e.preventDefault(); // prevent the form to refresh the pages

        let newProvider = {
            name: name,
            description: description,
            location: location,
            website: website,
            imageUrls: [imageUrl, imageUrl2, imageUrl3],

        }
        console.log(newProvider.imageUrls);

        fetch("http://localhost:8080/api/providers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProvider),
        })
        .then(response => response.json());

        //window.location.reload();
        let redirectUrl = `/providers`;
        props.history.push(redirectUrl);
    };

    return (
        <div className="container mt-3">
            <h2 className="text-info">Add New Provider</h2>
            <form onSubmit={handleSubmit} className="mx-auto p-3 border rounded">
                <fieldset className="form-group mb-1">
                    <legend>General Info</legend>
                    <div className="row">
                        <label className="col">Company Name:
                            <TextInput required
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="row">
                        <label className="col">Description:
                            <textarea required
                                className="form-control"
                                rows="3"
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="row">
                        <label className="col-6">Address:
                            <TextInput required
                                value={location}
                                onChange={(e)=> setLocation(e.target.value)}
                            />
                        </label>
                        <label className="col-sm-3">City:
                            <TextInput />
                        </label>
                        <label className="col-sm-3">Province:
                            <TextInput />
                        </label>
                    </div>

                    <div className="row">
                        <label className="col-6">Email:
                            <TextInput />
                        </label>
                        <label className="col-6">Website:
                            <TextInput required
                                value={website}
                                onChange={(e)=> setWebsite(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="row">
                        <legend className="mx-3">Image URLs</legend>
                        <label className="col-sm-4">
                            <TextInput required
                                value={imageUrl}
                                onChange={(e)=> setImageUrl(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="image url #1"
                            />
                        </label>
                        <label className="col-sm-4">
                            <TextInput required
                                value={imageUrl2}
                                onChange={(e)=> setImageUrl2(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="image url #2"
                            />
                        </label>
                        <label className="col-sm-4">
                            <TextInput required
                                value={imageUrl3}
                                onChange={(e)=> setImageUrl3(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="image url #3"
                            />
                        </label>
                    </div>
                </fieldset>

                <div className="row justify-content-center">
                    <button type="submit" className="btn btn-outline-info  mx-2">Submit</button>
                    <button className="btn btn-outline-info  mx-2">Cancel</button>
                </div>

            </form>
        </div>
    );
}
export default withRouter(AddProviderForm);