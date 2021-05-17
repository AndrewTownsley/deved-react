import './App.css';
//Import Components
import CreateTweet from './Components/CreateTweet';
import TweetList from './Components/TweetList';

function App() {
  const name = "Andrew"
  const message = "This is the actual tweet";
  return (
    <div>
      <CreateTweet />
      <TweetList name={name} message={message}/>
      <h3>Hello React</h3>
    </div>
  );
}

export default App;
