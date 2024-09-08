import React from 'react';
import { Card, Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const {Meta} = Card;

const Itinerary = () => {
    return(
     <div className='bg-[#FFBE98] px-12 flex flex-row justify-between rounded-lg p-8'>
        <Card
            hoverable
            style={{ width: 340 }}
            cover={<img alt="example" src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />}
            >    
        <Meta title="Gokarna" description="Explore Gokarana" />
     </Card>
     <Card
            hoverable
            style={{ width: 340 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D" />}
            >    
        <Meta title="Kashmir" description="Explore Gokarana" />
     </Card>

     <Card
            hoverable
            style={{ width: 340 }}
            cover={<img alt="example" src="https://www.tripsavvy.com/thmb/9UwtKJX6FWpYF3hxjhuXw2uHQsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-481776206-58fde26a5f9b581d59810c1d.jpg" />}
            >    
        <Meta title="Gokarna" description="Explore Gokarana" />
     </Card>


     </div>
    )
}

export default Itinerary;
