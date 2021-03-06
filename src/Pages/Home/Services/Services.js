import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('./services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])

console.log(services)

    return (
        <div className="my-5">
            <h2 className="text-primary">Our Services</h2>

            <div className="service-container">
            {
                services.map(service=>
                    <Service 

                    key={service.id}
                    service={service}
                    
                    ></Service>
                )
            }
            </div>
            
          
        </div>
    );
};

export default Services;