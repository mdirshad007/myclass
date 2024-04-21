import ToDoList from "./components/ToDoList/ToDoList";


export default function Home() {
  return (
<div>
  <div className="max-w-6xl w-full mx-auto mt-10 p-5">
    <h1 className="text-5xl font-bold">My Topics</h1>
    <hr className="my-6" />
    <ToDoList/>
  </div>
</div>
  );
}
