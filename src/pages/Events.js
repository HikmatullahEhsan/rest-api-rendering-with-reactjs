import React from 'react';
import './Events.css';
import { Outlet } from 'react-router-dom';
import {
    Link
} from "react-router-dom";
const Events =  (props)=> {
    const events =  props.events.map((event)=>{
        return  <div key={event.id}>
                    <h5 >
                        <Link to={`${event.id}`} className="nav-link">{event.name}</Link>
                    </h5>
                    <hr/>
                </div> 
    });
    
    return (
       <div className="row">
            <div className="col">
               <h4>Soccer odds</h4>
               Trade and bet on a variety of football betting markets, including those on the Premier League, Champions League, La Liga, Bundesliga and MLS.
              <Outlet/>
            </div>
            <div className="col-4">
              <h4>Events</h4>
              {events}
            </div>
       </div> 
    );
}
export default Events;