import { FormEvent, useRef } from "react";

const App = () => {

  const nameref = useRef<HTMLInputElement>(null)
  const ageref = useRef<HTMLInputElement>(null)
  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault();
    const person = {name:'',  age:0};
    if(nameref.current !== null)
      person.name = nameref.current.value
    console.log(person)
  if(ageref.current !== null)
    person.age = parseInt(ageref.current.value)
    console.log(person)
    }
  return (
    <>
    <div>
      <form action="" onSubmit={handleSubmit}>
       <div>
       <label htmlFor="">Name</label>
       <input ref={nameref} id="name" type="text" />
       </div><br />

        <div>
        <label htmlFor="">age</label>
        <input ref={ageref}  id="number" type="number" />
        </div><br />
       <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App