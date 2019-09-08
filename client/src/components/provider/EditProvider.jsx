import React, { useState, useEffect } from 'react';

const TextInput = ({children, ...props}) => {
    return (
        <input
            type="text"
            className="form-control"
            {...props}
        />
    );
};

const EditProvider = ( props ) => {
    const id = props.match.params.id;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');
    
    const [providerLoading, setProviderLoading] = useState(false);

    useEffect(() => {
        const fetchProvider = async() => {
            try {
                setProviderLoading(true);
                const response = await fetch(`http://localhost:8080/api/providers/${id}`);
                const result = await response.json();
                console.log(result);

                setName(result.name);
                setDescription(result.description);
                setStreetAddress(result.streetAddress);
                setCity(result.city);
                setProvince(result.province);
                setWebsite(result.website);
                setEmail(result.email);
                setPhone(result.phone);
                setImageUrl1(result.imageUrls[0]);
                setImageUrl2(result.imageUrls[1]);
                setImageUrl3(result.imageUrls[2]);
                setProviderLoading(false);
            }catch (e) {
                console.log(e);
            }
        } 
        fetchProvider();
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProvider = {
            id: id,
            name: name,
            description: description,
            streetAddress: streetAddress,
            city: city,
            province: province,
            website: website,
            email: email,
            phone: phone,
            imageUrls: [imageUrl1, imageUrl2, imageUrl3],
        }
        console.log(updatedProvider.json);

        fetch(`http://localhost:8080/api/providers?id=${id}`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin':'http://localhost:3000',
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProvider),
        })
        .then(response => response.json());
        
        let redirectUrl = `/providers/${id}`;
        props.history.push(redirectUrl);
    };

    /* return if loading */
    if (providerLoading) {
        return ('Loading......');
    }

    return (
        <div className="container mt-3">
        <h2 className="text-info">Edit Provider</h2>
        <form onSubmit={handleSubmit} className="mx-auto p-3 border rounded">
            <fieldset className="form-group mb-1">
                <div className="row">
                    <label className="col">Company Name
                        <TextInput required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </label>
                </div>

                <div className="row">
                    <label className="col">Description
                        <textarea required
                            className="form-control"
                            rows="3"
                            value={description}
                            onChange={(e)=> setDescription(e.target.value)}
                        />
                    </label>
                </div>

                <div className="row">
                    <label className="col-4">Address
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
                    <label className="col-sm-4">Website
                        <TextInput required
                            value={website}
                            onChange={(e)=> setWebsite(e.target.value)}
                        />
                    </label>
                    <label className="col-sm-4">Email
                    <TextInput required
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </label>
                    <label className="col-sm-4">phone
                    <TextInput required
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                        />
                    </label>
                </div>
                <div className="row">
                    <label className="mx-3">Image URLs</label>
                </div>
                <div className="row">
                    
                    <label className="col-sm-4">
                        <TextInput required
                            value={imageUrl1}
                            onChange={(e)=> setImageUrl1(e.target.value)}
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
                <div className="row">
                        <div className="col-sm-4">
                            <img className="img-thumbnail" src={imageUrl1} alt="activity1" />
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail" src={imageUrl2} alt="activity2" />
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail" src={imageUrl3} alt="activity3" />
                        </div>
                    </div>
            </fieldset>

            <div className="row justify-content-center mt-3">
                <button type="submit" className="btn btn-outline-info  mx-2">Submit</button>
                <button className="btn btn-outline-info  mx-2">Cancel</button>
            </div>

        </form>
    </div>
    );
};

export default EditProvider;