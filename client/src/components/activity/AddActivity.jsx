import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const AddActivity = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        //event.preventDefault();  // prevent the form to refresh the pages

        let newActivity = {
            name: name,
            type: type,
            description: description,
        }
        console.log(newActivity);

        fetch("http://localhost:8080/api/activities", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newActivity),
        })
        .then(response => response.json());
        
        let redirectUrl = `/activities`;
        //window.location.reload();
        props.history.push(redirectUrl);
    };

    return(
        <div className="container pt-3">
            <form onSubmit={handleSubmit} className="mx-auto p-3 border rounded">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input required type="text" className="form-control" placeholder="Activity Name" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="type">Activity Type:</label>
                    <input type="text" className="form-control" placeholder="Activity Type" 
                        value={type}
                        onChange={(e)=>setType(e.target.value)}
                    />
                </div> */}
                <div className="form-group">
                    <label for="activityTypeSelect">Activity Type</label>
                    <select className="form-control" id="activityTypeSelect"
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                    >
                        <option value="ACADEMICS">Academics</option>
                        <option value="ART_CRAFT">Art &amp; Craft</option>
                        <option value="DANCE">Dance</option>
                        <option value="GYMNASTICS">Gymnastics</option>
                        <option value="MARTIAL_ARTS">Martial Arts</option>
                        <option value="MUSIC">Music</option>
                        <option value="SCIENCE_TECH">Science &amp; Technology</option>
                        <option value="SPORT">Sport</option>
                        <option value="WATER_SPORT">Water Sport</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" className="form-control" placeholder="Description" rows="4"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}>                
                    </textarea>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-info  mx-auto" name="action">Save</button>
                </div>
            </form>
        </div>
    );
}
export default withRouter(AddActivity);