import './App.css';
import Post from './components/Post';

function App() {

  const data = {
    createdBy: 'Rajab Raza',
    avatar: 'https://picsum.photos/id/338/90',
    description: 'Lots of problems begin with citing wikipedia!',
    images : [
              'https://picsum.photos/id/312/450/600', 
              'https://picsum.photos/id/319/780/650',
              'https://picsum.photos/id/322/635/450',
              'https://picsum.photos/id/328/1050/800',
              'https://picsum.photos/id/336/850/400',
              'https://picsum.photos/id/318/850/400'
            ],
    createdAt: Date.now()
  }
  return (
    <div className="App">
      <div className="main-container">
        <Post postDetails={data}/>
      </div>
    </div>
  );
}

export default App;
