import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/BodyInfinityShimmer";
import Header from './Components/Header';
import Accordian from './Components/Accordian';
import Comments from './Components/comments/Comments';
import Pagination from './Components/pagination/Pagination';
import LiveChat from './Components/liveChat/LiveChat';
import SearchUi from './Components/search-ui/SearchUi';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="infinite-scroll" element={<Body />} />
          <Route path="accordian" element={<Accordian />} />
          <Route path="nested-comment" element={<Comments />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="live-chat" element={<LiveChat />} />
          <Route path="searchbar" element={<SearchUi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
