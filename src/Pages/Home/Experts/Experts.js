import React from 'react';

import mecanichian_1 from '../../../images/mecanichian/AdobeStock_289369347_Preview.png';
import mecanichian_2 from '../../../images/mecanichian/AdobeStock_311330111_Preview.png';
import mecanichian_3 from '../../../images/mecanichian/AdobeStock_322112746_Preview.png';
import mecanichian_4 from '../../../images/mecanichian/AdobeStock_79080433_Preview (1).png';
import mecanichian_5 from '../../../images/mecanichian/AdobeStock_79080433_Preview (2).png';
import mecanichian_6 from '../../../images/mecanichian/AdobeStock_79080433_Preview.png';
import Expert from '../Expert/Expert';


const experts = [

    {
        img: mecanichian_1,
        name: 'Sakib Anderson',
        expertize: 'Alrounder Expert'
    },
    {
        img: mecanichian_2,
        name: 'Jhon Anderson',
        expertize: 'Engine Expert'
    },
    {
        img: mecanichian_3,
        name: 'Andrew Anderson',
        expertize: 'Polish Expert'
    },
    {
        img: mecanichian_4,
        name: 'Sakib Anderson',
        expertize: 'Alrounder Expert'
    },
    {
        img: mecanichian_5,
        name: 'Rudro Anderson',
        expertize: 'Wash Expert'
    },
    {
        img: mecanichian_6,
        name: 'Sakib Anderson',
        expertize: 'Alrounder Expert'
    },
]


const Experts = () => {
    return (
        <div className= "container">
           <h3 className="text-primary" > Our Experts</h3> 

           <div className="row">
               {experts.map(expert=> 
                <Expert
                
                key={expert.img}
                expert={expert}

                >
                </Expert>
                )}
           </div>
        </div>
    );
};

export default Experts;