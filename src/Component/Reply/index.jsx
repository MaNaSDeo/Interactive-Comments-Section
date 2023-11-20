import { useState } from 'react'
import './Reply.css'

function index({data}) {
    // console.log(data)
  const [reply, setReply] = useState('');
  return (
    <div className='container'>
      <img src={data.image.png} alt={data.username} />
      <input 
        type="text"
        placeholder='Add a comment...'
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      <button>REPLY</button>
    </div>
  )
}

export default index
