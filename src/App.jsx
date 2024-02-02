import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AddPost from './components/AddPost/AddPost';
import ViewPost from './components/ViewPost/ViewPost';
import EditPost from './components/EditPost/EditPost';

function App() {
  const url = 'http://localhost:7070/';

  return (
    <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage url={url} />} />
            <Route path="/posts/new" element={<AddPost  url={url} />} />
            <Route path="/posts/:id" element={<ViewPost url={url} />} />
            <Route path="/posts/edit/:id" element={<EditPost url={url} />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;