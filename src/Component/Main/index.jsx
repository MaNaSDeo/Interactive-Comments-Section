import { useEffect, useState } from 'react';
import Comment from '../Comment';
import Reply from '../Reply'

import fakeData from '../../data/data.json';

function index() {

    const [data, setData] = useState(JSON.parse(window.localStorage.getItem('jsonObject')) || fakeData);

    useEffect(() => {
        window.localStorage.setItem('jsonObject', JSON.stringify(data));
    }, [data])

    return (
        <div className='main'>
            
            {data.comments.map(comment => {
                return(
                    <Comment key={comment.id} data={comment} currentUserData={data.currentUser} setData={setData}/>
                )
            })}
            <Reply data={data.currentUser} setData={setData}/>
        </div>
    )
}

export default index