import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const  EventDetails  = ()=>{
        const {id} = useParams();
        const [event, setEvent ]= useState([]);
        useEffect(async ()=>{
            await axios
                .get(`https://api.smarkets.com/v3/events/${id}/`)
                .then((res)=>{
                    setEvent(res.data.events[0]);
                })
                .then((res)=>{
                    console.log('res is: ',event);
                });
        },[id]);
        return (
            <div >
                <h5>Details of the Event : {event.short_name}</h5>
                <hr/>
                <table className="table table-striped">
                    <tr>
                        <th>Name</th>
                        <td className="sub-title">{event.name}</td>
                        <th>Start DateTime</th>
                        <td className="sub-title">{event.start_datetime}</td>
                        <th>Current Status</th>
                        <td className="sub-title">{event.state}</td>
                    </tr>
                </table>
            </div>
        );

}

export default EventDetails;