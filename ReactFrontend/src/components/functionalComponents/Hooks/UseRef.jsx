import { useRef } from "react";
function UseRefHook() {
  const inputRef = useRef();
  return <div><h3>UseRef Hook</h3><input ref={inputRef} placeholder="Type here" /><button onClick={()=>inputRef.current.focus()}>Focus</button></div>;
}
export default UseRefHook;
