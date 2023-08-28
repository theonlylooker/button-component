import { ReactComponent as Logo } from "./assets/react.svg";
import { Button } from "./components/button";
const App = () => {
  return (
    <div className="text-4xl">
      <h1 className="text-xs text-lg text-3xl">text</h1>
      <Logo />
      <Button>asd</Button>
    </div>
  );
};

export default App;
