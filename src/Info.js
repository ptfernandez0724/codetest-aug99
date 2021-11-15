import React from 'react';

export default function Info(props){
    return (
        <div className="inner">
            <p><strong>Flight Number:</strong> {props.item.flight_number}</p>
            <p><strong>Mission Name:</strong> {props.item.mission_name}</p>
            <p><strong>Launch Year:</strong> {props.item.launch_year}</p>
            <p><strong>Rocket Name:</strong> {props.item.rocket.rocket_name}</p>
            <p><strong>Launch Site:</strong> {props.item.launch_site.site_name_long}</p>
        </div>
    )
}