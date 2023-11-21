import { useState } from 'react';
import Comment from '../Comment';
import Reply from '../Reply'

import fakeData from '../../data/data.json';

function index() {

    const [data, setData] = useState(fakeData);
    console.log(data);

    return (
        <div className='main'>
            
            {data.comments.map(comment => {
                console.log(comment)
                return(
                    <Comment key={comment.id} data={comment} currentUserData={data.currentUser} setData={setData}/>
                )
            })}
            <Reply data={data.currentUser} setData={setData}/>
        </div>
    )
}

export default index