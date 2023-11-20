import { useState } from 'react';
import Comment from '../Comment';
import Reply from '../Reply'

import fakeData from '../../data/data.json';

function index() {

    const [data, setData] = useState(fakeData);
    console.log(data.comments[1]);

    return (
        <div className='main'>
            <Comment data={data.comments[0]}/>
            {/* {data.comments[1].map(element => {
                return(
            <Comment 
                key={element.id} 
                data={element} 
            />)})} */}
            <Comment data={data.comments[1]} />
            <Reply data={data.currentUser}/>
        </div>
    )
}

export default index
