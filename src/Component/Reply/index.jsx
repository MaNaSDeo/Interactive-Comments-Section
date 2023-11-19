import './Reply.css'

function index({data}) {
    // console.log(data)
  return (
    <div className='container'>
      <img src={data.image.png} alt={data.username} />
      <input type="text" />
      <button>REPLY</button>
    </div>
  )
}

export default index
