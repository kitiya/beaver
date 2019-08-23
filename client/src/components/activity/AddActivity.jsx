import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import NumberFormat from 'react-number-format';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TextInput = ({children, ...props}) => {
    return (
        <input
            type="text"
            className="form-control"
            {...props}
        />
    );
};

const AddActivity = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [fromAge, setFromAge] = useState('');
    const [toAge, setToAge] = useState('');
    const [cost, setCost] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');
    const [providerName, setProviderName] = useState('');
    const [scheduledStartDate, setScheduledStartDate] = useState('');
    const [scheduledEndDate, setScheduledEndDate] = useState('');
    const [scheduledStartTime, setScheduledStartTime] = useState('');
    const [scheduledEndTime, setScheduledEndTime] = useState('');

    const handleSubmit = (event) => {
        //event.preventDefault();  // prevent the form to refresh the pages

        let provider = {
            name: providerName,
        }

        let schedule = {
            startDate: scheduledStartDate,
            endDate: scheduledEndDate,
            startTime: scheduledStartTime,
            endTime: scheduledEndTime,
        }

        let newActivity = {
            name: name,
            provider: provider,
            schedule: schedule,
            type: type,
            description: description,
            fromAge: fromAge,
            toAge: toAge,
            cost: cost,
            imageUrls: [imageUrl, imageUrl2, imageUrl3],
        }
        console.log(newActivity);

        fetch("http://localhost:8080/api/activity", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newActivity),
        })
        .then(response => response.json());
        
        let redirectUrl = `/activities`;
        props.history.push(redirectUrl);
        //window.location.reload();
    };

    return(
        <div className="container pt-3">
            <h2 className="text-info">Add New Activity</h2>
            <form className="mx-auto p-3 border rounded">
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="name">Name:</label>
                        <input required type="text" id="name" className="form-control" placeholder="Activity Name" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="providerSelect">Provider:</label>
                        <select className="form-control" id="providerSelect"
                                defaultValue={'OTHER'}
                                // value={providerName}
                                onChange={(e)=>setProviderName(e.target.value)}
                        >
                            <option value="NA">Select one...</option>    
                            <option value="Can-Am Gymnastics Club">Can-Am Gymnastics Club</option>
                            <option value="Canlan Ice Sports - Jemini">Canlan Ice Sports - Jemini</option>    
                            <option value="Aspire Dance Studio">Aspire Dance Studio</option>
                            <option value="Saskatchewan Polytechnic">Saskatchewan Polytechnic</option>
                            <option value="We Move">We Move</option>
                            <option value="Wet Paint Pottery">Wet Paint Pottery</option>
                            <option value="Wilton Academy of Music">Wilton Academy of Music</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="activityTypeSelect">Activity Type:</label>
                        <select className="form-control" id="activityTypeSelect"
                                value={type}
                                onChange={(e)=>setType(e.target.value)}
                        >
                            <option value="NA">Select one...</option>    
                            <option value="ACADEMICS">Academics</option>
                            <option value="ART_CRAFT">Art &amp; Craft</option>
                            <option value="DANCE">Dance</option>
                            <option value="GYMNASTICS">Gymnastics</option>
                            <option value="MARTIAL_ARTS">Martial Arts</option>
                            <option value="MUSIC">Music</option>
                            <option value="SCIENCE_TECH">Science &amp; Technology</option>
                            <option value="SPORT">Sport</option>
                            <option value="WATER_SPORT">Water Sport</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div className="col-md-3 form-group">
                        <label htmlFor="cost">Cost:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input required type="text" pattern="[0-9]*" id="cost" className="form-control" placeholder="" 
                                value={cost}
                                onChange={(e)=>setCost(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 form-group">
                        <label htmlFor="cost">Cost:</label>
                        <NumberFormat 
                            required
                            className="form-control" id="cost"
                            thousandSeparator={true} prefix={'$'} 
                            value={cost}
                            onValueChange={(values)=> {
                                const {formattedValue, value} = values;
                                setCost(value);
                            }}                        
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="fromAgeSelect">From Age:</label>
                        <select className="form-control" id="fromAgeSelect"
                                value={fromAge}
                                onChange={(e)=>setFromAge(e.target.value)}
                        >
                            <option value="NA">Select one...</option>
                            <option value="0.5">Less than 1 yr</option>
                            <option value="1">1 yr</option>
                            <option value="2">2 yrs</option>
                            <option value="3">3 yrs</option>
                            <option value="4">4 yrs</option>
                            <option value="5">5 yrs</option>
                            <option value="6">6 yrs</option>
                            <option value="7">7 yrs</option>
                            <option value="8">8 yrs</option>
                            <option value="9">9 yrs</option>
                            <option value="10">10 yrs</option>
                            <option value="11">11 yrs</option>
                            <option value="12">12 yrs</option>
                            <option value="13">13 yrs</option>
                            <option value="14">14 yrs</option>
                            <option value="15">15 yrs</option>
                            <option value="16">16 yrs</option>
                            <option value="17">17 yrs</option>
                            <option value="18">18 yrs</option>
                            <option value="98">More than 18 yrs</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="toAgeSelect">To Age:</label>
                        <select className="form-control" id="toAgeSelect"
                                value={toAge}
                                onChange={(e)=>setToAge(e.target.value)}
                        >
                            <option value="NA">Select one...</option>
                            <option value="0.5">Less than 1 yr</option>
                            <option value="1">1 yr</option>
                            <option value="2">2 yrs</option>
                            <option value="3">3 yrs</option>
                            <option value="4">4 yrs</option>
                            <option value="5">5 yrs</option>
                            <option value="6">6 yrs</option>
                            <option value="7">7 yrs</option>
                            <option value="8">8 yrs</option>
                            <option value="9">9 yrs</option>
                            <option value="10">10 yrs</option>
                            <option value="11">11 yrs</option>
                            <option value="12">12 yrs</option>
                            <option value="13">13 yrs</option>
                            <option value="14">14 yrs</option>
                            <option value="15">15 yrs</option>
                            <option value="16">16 yrs</option>
                            <option value="17">17 yrs</option>
                            <option value="18">18 yrs</option>
                            <option value="98">More than 18 yrs</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-12">
                        <label htmlFor="description">Description:</label>
                        <textarea type="text" className="form-control" placeholder="Description" rows="4"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}>                
                        </textarea>
                    </div>
                </div>

                <div className="row">
                        <legend className="mx-3">Image URLs:</legend>
                        <label className="col-sm-4">
                            <TextInput required
                                value={imageUrl}
                                onChange={(e)=> setImageUrl(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                placeholder="image url #1"
                            />
                        </label>
                        <label className="col-sm-4">
                            <TextInput required
                                value={imageUrl2}
                                onChange={(e)=> setImageUrl2(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                placeholder="image url #2"
                            />
                        </label>
                        <label className="col-sm-4">
                            <TextInput required
                                value={imageUrl3}
                                onChange={(e)=> setImageUrl3(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                placeholder="image url #3"
                            />
                        </label>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <DatePicker
                                className="form-control"
                                selected={scheduledStartDate}
                                onChange={(e)=>setScheduledStartDate(e)}
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <DatePicker 
                                className="form-control"
                                selected={scheduledEndDate}
                                onChange={(e)=>setScheduledEndDate(e)} 
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <DatePicker
                                className="form-control"
                                selected={scheduledStartTime}
                                onChange={(e)=>setScheduledStartTime(e)}
                                showTimeSelect
                                showTimeSelectOnly
                                dateFormat="hh:mm a"
                                timeCaption="Start Time"
                            />
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <DatePicker 
                                className="form-control"
                                selected={ scheduledEndTime }
                                onChange={(e)=>setScheduledEndTime(e)}
                                showTimeSelect
                                showTimeSelectOnly
                                dateFormat="hh:mm a"
                                timeCaption="End Time"
                            />
                        </div>                        
                        
                    </div>

                <div className="row justify-content-center">
                    <button type="button" onClick={handleSubmit} className="btn btn-info  mx-2">Submit</button>
                    <button className="btn btn-info  mx-2">Cancel</button>
                </div>
            </form>
        </div>
    );
}
export default withRouter(AddActivity);