import React from 'react';
import axios from 'axios';
import Events from '../pages/Events';
class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          events: [],
          eventDescription : []
        }
    }

    async loadFootballEventsIDs(){
        await axios
                .get(`https://api.smarkets.com/v3/popular/event_ids/sport/football/`)
                .then((res)=>{
                  this.setState({
                    events : [... res.data.popular_event_ids]
                  });

                }).then(()=>{
                    this.loadFootballEventsDetails();
                });

    }

    async loadFootballEventsDetails(){
        const eventIDs = this.state.events.toString();
        await axios
                .get(`https://api.smarkets.com/v3/events/${eventIDs}/?include_hidden=true`)
                .then((res)=>{
                    this.setState({
                        eventDescription : [... res.data.events]
                    });
                });
    }

    componentWillMount(){
        this.loadFootballEventsIDs();
    }
    render(){
        return(
            <div >
                <Events events={this.state.eventDescription}/>
            </div>
        );
    }

}

export default Content;