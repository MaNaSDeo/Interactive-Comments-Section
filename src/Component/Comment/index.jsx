import './Comment.css';
import ReplyIcon from '../../images/icon-reply.svg';
import EditIcon from '../../images/icon-edit.svg';
import DeleteIcon from '../../images/icon-delete.svg';

import Reply from '../Reply';
import { useState } from 'react';

function Comment({data, currentUserData, setData}) {

  const [replyNeeded , setReplyNeeded] = useState(false);
  const [editComment, setEditComment] = useState(data.content);
  const [isEditable, setIsEditable] = useState(false);
  const [upvotes, setUpvotes] = useState(data.score);

  // console.log(editComment)
  const handleUpdate = () => {
    setData(prevData => {
      if(prevData.comments){
        const updatedComment = prevData.comments.map(comment => {
          if(comment.id === data.id){
            return{...comment, content: editComment};
          } else { 
            // return comment
            if(comment.replies){
              const updateReplies = comment.replies.map(reply =>  {
                if(reply.id === data.id){
                  return {...reply, content: editComment}
                } else { return reply}
              });
              return {...comment, replies: updateReplies}
            } else{ return comment}
          }
        });
        return {...prevData, comments: updatedComment};
      } else{
        return prevData;
      }
    });
    setIsEditable(!isEditable)
  }

  return (
    <div className='comments-container'>
      <div className='comment-card'>

        {/* For Upvotes & Downvotes */}
        <div className='upvotes'>
          <button
            onClick={() => {
              const currentSore = upvotes - data.score;
              if(currentSore < 1)
                setUpvotes(upvotes + 1)}}>
            +
          </button>
          <p>{upvotes}</p>
          <button
            onClick={() => {
              const currentSore = data.score - upvotes;
              if(currentSore < 1)
                setUpvotes(upvotes - 1)}}>
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
                <button 
                  className='btn-icon' 
                  onClick={() => setIsEditable(!isEditable)} >
                <img src={EditIcon} alt="Edit Icon" />
                  <p>Edit</p>
                </button>
              </div> 
            </div> :
            <button 
              className='btn-icon'
              onClick={() => {
                setReplyNeeded(!replyNeeded)
                setEditComment(data.content)
              }}
            >
              <img src={ReplyIcon} alt="Reply Icon" />
              <p>Reply</p>
            </button>}
          </div>

          {/* Comment */}
          <div className='comments'>
            {(data.user.username==='juliusomo' && isEditable)? <textarea 
              className="comment-textarea"
              placeholder='Enter' 
              value={editComment}
              onChange={(e) => setEditComment(e.target.value)} 
              /> : <p>{data.replyingTo && <span>@{data.replyingTo} </span> }{data.content}</p>}
            {/* <p>{data.content}</p> */}
          </div>
          {isEditable && <div className="update-btn">
            <button 
              onClick={handleUpdate}
              >UPDATE</button>
          </div>}
        </div>
      </div>
      {replyNeeded  && <Reply data={currentUserData} setData={setData} replyToCommentId={data.id} replyingToUserName={data.user.username} />}

      <div className='replies-container'>
        {data.replies && data.replies.map(reply =>{
          return(
            <div key={reply.id} className='reply-container'>
              <Comment data={reply} currentUserData={currentUserData} setData={setData}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comment;