import Item from "./components/Item";
import { posts } from "./data/postsData.js";

let count = 0;

function gen() {
  count++;
  return count;
}

function App() {
  return (
    <div className="justify-center flex flex-col items-center">
      {posts.map((post) => (
        <Item key={gen()} post={post} />
      ))}
    </div>
  );
}

export default App;
