import React, { useState } from 'react';

const TextInput = ({children, ...props}) => {
    return (
        <input
            type="text"
            className="form-control my-2"
            {...props}
        />
    );
};

const AddProviderForm = () => {
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

        window.location.reload();
    };

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit} className="mx-auto p-3 border rounded">
                <TextInput required placeholder="Company Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <TextInput required placeholder="Description"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                />
                <TextInput required placeholder="Location"
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}
                />
                <TextInput required placeholder="Website"
                    value={website}
                    onChange={(e)=> setWebsite(e.target.value)}
                />
                <div className="form-group">
                    <TextInput required placeholder="Image URL#1"
                        value={imageUrl}
                        onChange={(e)=> setImageUrl(e.target.value)}
                    />
                    <TextInput required placeholder="Image URL#2"
                        value={imageUrl2}
                        onChange={(e)=> setImageUrl2(e.target.value)}
                    />
                    <TextInput required placeholder="Image URL#3"
                        value={imageUrl3}
                        onChange={(e)=> setImageUrl3(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-info  mx-auto">Submit</button>
            </form>
        </div>
    );
}

export default AddProviderForm;