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

const AddProvider = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('Lollipop lemon drops jelly-o marzipan brownie apple pie sugar plum gingerbread sesame snaps. Oat cake I love tootsie roll candy. Pie halvah bonbon tiramisu muffin muffin. Gingerbread bonbon oat cake halvah sweet cotton candy I love. Chocolate cake biscuit apple pie fruitcake oat cake carrot cake icing. Macaroon jelly beans topping muffin I love I love sweet chocolate cake powder. Chocolate cake donut sugar plum topping. Candy gummies chupa chups fruitcake. Sugar plum marzipan wafer pudding sweet chocolate bar marzipan toffee.');
    const [streetAddress, setStreetAddress] = useState('123 Main Street');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [website, setWebsite] = useState('www.beaver.ca');
    const [email, setEmail] = useState('info@beaver.ca');
    const [phone, setPhone] = useState('3061234555');
    const [imageUrl, setImageUrl] = useState('https://lakelandhillsymca.com/dev/wp-content/uploads/for-kids.jpg');
    const [imageUrl2, setImageUrl2] = useState('https://lakelandhillsymca.com/dev/wp-content/uploads/for-kids.jpg');
    const [imageUrl3, setImageUrl3] = useState('https://lakelandhillsymca.com/dev/wp-content/uploads/for-kids.jpg');

    const handleSubmit = (e) => {
        //e.preventDefault(); // prevent the form to refresh the pages

        let newProvider = {
            name: name,
            description: description,
            streetAddress: streetAddress,
            city: city,
            province: province,
            website: website,
            email: email,
            phone: phone,
            imageUrls: [imageUrl, imageUrl2, imageUrl3],
        }

        console.log(newProvider.json);

        fetch("http://localhost:8080/api/providers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newProvider),
        })
        .then(response => response.json());

        let redirectUrl = `/providers`;
        //window.location.reload();
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
                        <label className="col-4">Address:
                            <TextInput required
                                value={streetAddress}
                                onChange={(e)=> setStreetAddress(e.target.value)}
                            />
                        </label>
                        <label className="col-4">City
                            <select className="form-control"
                                    value={city}
                                    onChange={(e)=>setCity(e.target.value)}
                            >
                                <option value="OTHER">Select One..</option>
                                <option value="CALGARY">Calgary</option>
                                <option value="SASKATOON">Saskatoon</option>
                                <option value="TORONTO">Toronto</option>
                                <option value="VANCOUVER">Vancouver</option>
                            </select>
                        </label>
                        <label className="col-4">Province
                            <select className="form-control"
                                    value={province}
                                    onChange={(e)=>setProvince(e.target.value)}
                            >
                                <option value="OTHER">Select One..</option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="ON">Ontario</option>
                                <option value="SK">Saskatchewan</option>
                            </select>
                        </label>
                    </div>

                    <div className="row">
                        <label className="col-sm-4">Website:
                            <TextInput required
                                value={website}
                                onChange={(e)=> setWebsite(e.target.value)}
                            />
                        </label>
                        <label className="col-sm-4">Email:
                        <TextInput required
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </label>
                        <label className="col-sm-4">phone:
                        <TextInput required
                                value={phone}
                                onChange={(e)=> setPhone(e.target.value)}
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
                    <button type="submit" className="btn btn-info  mx-2">Submit</button>
                    <button className="btn btn-info  mx-2">Cancel</button>
                </div>

            </form>
        </div>
    );
}
export default withRouter(AddProvider);