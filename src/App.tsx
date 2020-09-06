import React, { useRef, useCallback, FormEvent } from "react";
import Input from "./components/Input";

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef1 = useRef<HTMLInputElement>(null);
  const nameInputRef2 = useRef<HTMLInputElement>(null);
  const nameInputRef3 = useRef<HTMLInputElement>(null);
  const nameInputRef4 = useRef<HTMLInputElement>(null);
  const nameInputRef5 = useRef<HTMLInputElement>(null);
  const nameInputRef6 = useRef<HTMLInputElement>(null);
  const nameInputRef7 = useRef<HTMLInputElement>(null);
  const nameInputRef8 = useRef<HTMLInputElement>(null);
  const nameInputRef9 = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    console.log(nameInputRef.current?.value);
    console.log(nameInputRef1.current?.value);
    console.log(nameInputRef2.current?.value);
    console.log(nameInputRef3.current?.value);
    console.log(nameInputRef4.current?.value);
    console.log(nameInputRef5.current?.value);
    console.log(nameInputRef6.current?.value);
    console.log(nameInputRef7.current?.value);
    console.log(nameInputRef8.current?.value);
    console.log(nameInputRef9.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input name="Item1" label="Item1 " ref={nameInputRef} />
        <Input name="Item2" label="Item2 " ref={nameInputRef1} />
        <Input name="Item3" label="Item3 " ref={nameInputRef2} />
        <Input name="Item4" label="Item4 " ref={nameInputRef3} />
        <Input name="Item5" label="Item5 " ref={nameInputRef4} />
        <Input name="Item6" label="Item6 " ref={nameInputRef5} />
        <Input name="Item7" label="Item7 " ref={nameInputRef6} />
        <Input name="Item8" label="Item8 " ref={nameInputRef7} />
        <Input name="Item9" label="Item9 " ref={nameInputRef8} />
        <Input name="Item10" label="Item10 " ref={nameInputRef9} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
