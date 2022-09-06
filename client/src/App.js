import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    fetch("/hi")
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])

  return (
    <hi>hiiiiiiiiiii</hi>
  );
}

export default App;
