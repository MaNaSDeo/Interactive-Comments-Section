import { useEffect, useState } from 'react';
import Comment from '../Comment';
import Reply from '../Reply'

import fakeData from '../../data/data.json';

function index() {

    const [data, setData] = useState(JSON.parse(window.localStorage.getItem('jsonObject')) || fakeData);

    // const [inputText, setInputText] = useState(data.comments[0].content);
    // console.log(data.comments[0].content)

    useEffect(() => {
        window.localStorage.setItem('jsonObject', JSON.stringify(data));
    }, [data])
    // console.log(data.comments)

    return (
        <div className='main'>
            
            {data.comments.map(comment => {
                return(
                    <Comment key={comment.id} data={comment} currentUserData={data.currentUser} setData={setData}/>
                )
            })}
            <Reply data={data.currentUser} setData={setData}/>
            {/* <textarea 
                style={{margin: '0 auto'}} 
                placeholder='Input any Statement' 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} /> */}
        </div>
    )
}

export default index