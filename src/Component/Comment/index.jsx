import './Comment.css';
import ReplyIcon from '../../images/icon-reply.svg';
import EditIcon from '../../images/icon-edit.svg';
import DeleteIcon from '../../images/icon-delete.svg';

import Reply from '../Reply';
import { useState } from 'react';

function Comment({data, currentUserData, setData}) {
  // console.log(data)
  const [relpyNeeded, setReplyNeeded] = useState(false);
  return (
    <div>
      <div className='comment-card'>

        {/* For Upvotes & Downvotes */}
        <div className='upvotes'>
          <button>
            +
          </button>
          <p>{data.score}</p>
          <button>
            -
          </button>
        </div>

        {/* For Comment Card */}
        <div className='card'>

          {/* Top section of the card */}
          <div className='details'>

            {/* Avtar, User name & When the comment was made */}
            <div className='user-details'>
              <div className='user-img'>
                <img src={data.user.image.png} alt={data.user.username} />
              </div>
              <p className='user-name'>{data.user.username}</p>
              <p className='created-at'>{data.createdAt}</p>
              {/* <ReplyIcon /> */}
            </div>

            {data.user.username==="juliusomo" ?<div>
              <div className='user-btn'>
                <button className='btn-icon'>
                  <img src={DeleteIcon} alt="DeleteIcon" />
                  <p>Delete</p>
                </button>
                <button className='btn-icon'>
                <img src={EditIcon} alt="Edit Icon" />
                  <p>Edit</p>
                </button>
              </div> 
            </div> :
            <button 
              className='btn-icon'
              onClick={() => setReplyNeeded(true)}  
            >
              <img src={ReplyIcon} alt="Reply Icon" />
              <p>Reply</p>
            </button>}
          </div>

          {/* Comment */}
          <div className='comments'>{data.content}</div>
        </div>
      </div>
      {relpyNeeded ? <Reply data={currentUserData} setData={setData} /> : <></>}
      <div className='replies-container'>
        {data.replies && data.replies.map(reply =>{
          return(
            <div key={reply.id} className='reply-container'>
              <Comment data={reply} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comment;