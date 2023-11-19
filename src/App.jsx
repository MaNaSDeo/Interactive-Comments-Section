import { useState } from 'react';
import Comment from './Component/Comment';
import Reply from './Component/Reply'

import fakeData from './data/data.json';

function App() {
  const [data, setData] = useState(fakeData);
  // console.log(data);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "50px",
      // maxWidth: "680px"
    }}>
      <Comment data={data.comments}/>
      <Reply data={data.currentUser}/>
    </div>
  )
}

export default App
