import { useState } from 'react'
import './Reply.css'

function index({data, setData}) {
  
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

const handleChange = (e) => {
  e.preventDefault();
  const d = new Date();
  let time = d.getTime();
  let updatedComment = {
    ...blankComment,
    id: time,
    content: reply,
  };
  setData(prevData => ({
    ...prevData,
    comments: [...prevData.comments, updatedComment],
  }));
  setReply('');
};



  return (
    <div className='container'>
      <img src={data.image.png} alt={data.username} />
      <input 
        type="text"
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