import { ReactComponent as Logo } from "./assets/react.svg";
import { Button } from "./components/button";
const App = () => {
  return (
    <div>
      <h1 className="w-24 h-11 shadow-">text</h1>
      <h2 className="bg-defaultBG bg-opacity-10 text-blue-800">default</h2>
      <h2 className="bg-dangerHoverBG ">hover</h2>
      <Logo />
      <Button size="md" StartIcon={Logo}>
        Default
      </Button>
    </div>
  );
};

export default App;
