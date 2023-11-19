import './Comment.css';
import ReplyIcon from '../../images/icon-reply.svg'

function index({data}) {
  // console.log(data[0]);
  const userData = data[0];
  return (
    <div className='comment-card'>

      {/* For Upvotes & Downvotes */}
      <div className='upvotes'>
        <button>+</button>
        <p>{userData.score}</p>
        <button>-</button>
      </div>

      {/* For Comment Card */}
      <div className='card'>

        {/* Top section of the card */}
        <div className='details'>

          {/* Avtar, User name & When the comment was made */}
          <div className='user-details'>
            <div className='user-img'>
              <img src={userData.user.image.png} alt={userData.user.username} />
            </div>
            <p className='user-name'>{userData.user.username}</p>
            <p className='created-at'>{userData.createdAt}</p>
            {/* <ReplyIcon /> */}
          </div>

          {/* Reply */}
          <button className='reply'>
            <img src={ReplyIcon} alt="Reply Icon" />
            <p>Reply</p>
          </button>
        </div>

        {/* Comment */}
        <div className='comments'>{userData.content}</div>
      </div>
    </div>
  )
}

export default index;