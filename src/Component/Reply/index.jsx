import { useState } from 'react'
import './Reply.css'

function index({data, setData, replyToCommentId, replyingToUserName}) {
  
  const [reply, setReply] = useState('');
  
  let blankComment = {
    'id': null,
    'content': '',
    'createdAt': '1 minute ago',
    'score': 1,
    'replyingTo': '',
    'user': {
      'image': { 
        'png': './images/avatars/image-juliusomo.png',
        'webp': './images/avatars/image-juliusomo.webp'
      },
      'username': 'juliusomo',
    }
  }

  // This function is triggered when the form is submitted
const handleChange = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Create a new Date object and get the current time in milliseconds
  // This will be used as a unique identifier for the new comment
  const d = new Date();
  let time = d.getTime();

  let updatedComment;

  // Create a new comment object
  // It takes the properties of blankComment and overwrites the id and content properties
  if(replyToCommentId){
    updatedComment = {
      ...blankComment,
      id: time,
      content: reply,
      replyingTo: replyingToUserName,
    };
  } else{
    updatedComment = {
      ...blankComment,
      id: time,
      content: reply,
    };
  }

  // Update the state of the data
  setData(prevData => {
    let updatedComments;
    // Check if replyToCommentId is present
    if(replyToCommentId){
      // Map over the previous comments
      updatedComments = prevData.comments.map(comment => {
        // Check if the id of the current comment is the same as replyToCommentId
        if (comment.id === replyToCommentId) {
          // Check if the replies array exists in the comment, if not create it
          if(!comment.replies){
            comment.replies = [];
          }
          // Return a new comment object with the same properties as the current comment
          // but with the replies property replaced with a new array that contains all the previous replies and the new reply
          return {
            ...comment,
            replies: [...comment.replies, updatedComment],
          };
        } else {
          // If the id of the current comment is not the same as replyToCommentId, return the comment as is
          return comment;
        }
      });
    } else{
      // If replyToCommentId is not present, add the new comment to the comments array directly
      updatedComments = [...prevData.comments, updatedComment];
    }
    // Return a new state object with the same properties as the previous state
    // but with the comments property replaced with the new array of comments
    return {
      ...prevData,
      comments: updatedComments,
    };
  });

  // Reset the reply input field to be empty after a reply is submitted
  setReply('');
};

  return (
    <div className='container'>
      <img src={data.image.png} alt={data.username} />
      <textarea 
        className="reply-textarea"
        placeholder='Add a comment...'
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      <button
        onClick={handleChange}
      >REPLY</button>
    </div>
  )
}

export default index