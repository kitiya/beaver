import React from 'react';
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

const ActivityForm = ({ activity, loading, providerNameList, handleSubmit}) => {
    if (loading) {
        return ('');
    }
    return (
        <div className="container pt-3">
            <h2 className="text-info">Add New Activity</h2>
            <form className="mx-auto p-3 border rounded">
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="name">Name</label>
                        <input required type="text" id="name" className="form-control" placeholder="Activity Name" 
                            value={activity.name}
                            onChange={(e)=>activity.setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="providerSelect">Provider</label>
                        <select className="form-control" id="providerSelect"
                                value={activity.provider.name}
                                onChange={(e)=>activity.setProviderName(e.target.value)}
                        >
                            <option value="NA">Select one...</option>
                            {providerNameList.map((provider) => (
                                <option key={provider.id} value={provider.name}>{provider.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="activityTypeSelect">Activity Type</label>
                        <select className="form-control" id="activityTypeSelect"
                                value={activity.type}
                                onChange={(e)=>activity.setType(e.target.value)}
                        >
                            <option value="NA">Select one...</option>    
                            <option value="ACADEMICS">Academics</option>
                            <option value="AFTER_SCHOOL">After School</option>
                            <option value="ART_CRAFT">Art &amp; Craft</option>
                            <option value="CAMP">Camp</option>
                            <option value="DANCE">Dance</option>
                            <option value="GYMNASTICS">Gymnastics</option>
                            <option value="MARTIAL_ARTS">Martial Arts</option>
                            <option value="MUSIC">Music</option>
                            <option value="SCIENCE_TECH">Science &amp; Technology</option>
                            <option value="SPORT">Sport</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="cost">Cost</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input required type="text" pattern="[0-9]*" id="cost" className="form-control" placeholder="" 
                                value={activity.cost}
                                onChange={(e)=>activity.setCost(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="fromAgeSelect">From Age</label>
                        <select className="form-control" id="fromAgeSelect"
                                value={activity.fromAge}
                                onChange={(e)=>activity.setFromAge(e.target.value)}
                        >
                            <option value="NA">Select one...</option>
                            <option value="0">Less than 1 yr</option>
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
                        <label htmlFor="toAgeSelect">To Age</label>
                        <select className="form-control" id="toAgeSelect"
                                value={activity.toAge}
                                onChange={(e)=>activity.setToAge(e.target.value)}
                        >
                            <option value="NA">Select one...</option>
                            <option value="0">Less than 1 yr</option>
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
                        <label htmlFor="description">Description</label>
                        <textarea type="text" className="form-control" placeholder="Description" rows="4"
                            value={activity.description}
                            onChange={(e)=>activity.setDescription(e.target.value)}>                
                        </textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-6">
                    <label>Start Date</label>
                        <DatePicker
                            className="form-control"
                            selected={activity.scheduledStartDate}
                            onChange={(e)=>activity.setScheduledStartDate(e)}
                            placeholderText="Start Date"
                            showYearDropdown
                            minDate={new Date()}
                            maxDate={new Date().setDate(new Date().getDate() + 750)} // 750 days (~2 years)
                        />
                    </div>
                    <div className="col-lg-2 col-sm-6">
                    <label>End Date</label>
                        <DatePicker 
                            className="form-control"
                            selected={activity.scheduledEndDate}
                            onChange={(e)=>activity.setScheduledEndDate(e)} 
                            placeholderText="End Date"
                            showYearDropdown
                            minDate={new Date(activity.scheduledStartDate)}
                        />
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <label>Start Time</label>
                        <DatePicker
                            className="form-control"
                            selected={activity.scheduledStartTime}
                            onChange={(e)=>activity.setScheduledStartTime(e)}
                            showTimeSelect
                            showTimeSelectOnly
                            dateFormat="hh:mm a"
                            placeholderText="Start Time"
                        />
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <label>End Time</label>
                        <DatePicker 
                            className="form-control"
                            selected={ activity.scheduledEndTime }
                            onChange={(e)=>activity.setScheduledEndTime(e)}
                            showTimeSelect
                            showTimeSelectOnly
                            dateFormat="hh:mm a"
                            placeholderText="End Time"
                        />
                    </div>       
                    <div className="col-md-4 form-group">
                        <label htmlFor="dayOfWeekSelect">Day of Week</label>
                        <select className="form-control" id="dayOfWeekSelect"
                                value={activity.scheduledDayOfWeek}
                                onChange={(e)=>activity.setScheduledDayOfWeek(e.target.value)}
                        >
                            <option value="NA">Select one...</option>
                            <option value="MONDAY">Monday</option>
                            <option value="TUESDAY">Tuesday</option>
                            <option value="WEDNESDAY">Wednesday</option>
                            <option value="THURSDAY">Thursday</option>
                            <option value="FRIDAY">Friday</option>
                            <option value="SATURDAY">Saturday</option>
                            <option value="SUNDAY">Sunday</option>
                        </select>
                    </div>                                     
                </div>

                <div className="row">
                        <legend className="mx-3">Image URLs</legend>
                        <label className="col-sm-4">
                            <TextInput required
                                value={activity.imageUrl}
                                onChange={(e)=> activity.setImageUrl(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                placeholder="image url #1"
                            />
                        </label>
                        <label className="col-sm-4">
                            <TextInput required
                                value={activity.imageUrl2}
                                onChange={(e)=> activity.setImageUrl2(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                placeholder="image url #2"
                            />
                        </label>
                        <label className="col-sm-4">
                            <TextInput required
                                value={activity.imageUrl3}
                                onChange={(e)=> activity.setImageUrl3(e.target.value)}
                                data-toggle="tooltip"
                                data-placement="bottom"
                                placeholder="image url #3"
                            />
                        </label>
                    </div>
                <div className="row justify-content-center">
                    <button type="button" onClick={handleSubmit} className="btn btn-info  mx-2">Submit</button>
                    <button className="btn btn-info  mx-2">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default ActivityForm;