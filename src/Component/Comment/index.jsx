import './Comment.css';
import ReplyIcon from '../../images/icon-reply.svg'

function index({data}) {
  return (
    <div className='comment-card'>

      {/* For Upvotes & Downvotes */}
      <div className='upvotes'>
        <button>+</button>
        <p>{data.score}</p>
        <button>-</button>
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

          {/* Reply */}
          <button className='reply'>
            <img src={ReplyIcon} alt="Reply Icon" />
            <p>Reply</p>
          </button>
        </div>

        {/* Comment */}
        <div className='comments'>{data.content}</div>
      </div>
    </div>
  )
}

export default index;