import Joke from "./components/Joke";
import jokesData from "./data/jokesData";

function App() {
  // console.log(jokesData);
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div className="App">
      {jokeElements}
      {/* <Joke num={1} setup="What’s the best thing about Switzerland?" punchline="I don’t know, but the flag is a big plus." />
      <Joke num={2} setup="I invented a new word!" punchline="Plagiarism!" />
      <Joke num={3} setup="Did you hear about the mathematician who’s afraid of negative numbers?" punchline="He’ll stop at nothing to avoid them." />
     
      <Joke num={4} setup="Helvetica and Times New Roman walk into a bar." punchline="“Get out of here!” shouts the bartender. “We don’t serve your type.”" />
      <Joke num={5} punchline="I was once with a guy the size of those little miniature golf pencils. I couldn't tell if he was trying to f--- me or erase me."/> */}
    </div>
  );
}

export default App;
