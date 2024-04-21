import { IoMdClose } from "react-icons/io";
export default function TaskNotDone({taskName}) {
  return (
    <li className="cursor-pointer flex justify-start items-center gap-2">
    <IoMdClose className="text-red-600" />
    {taskName}
  </li>
  )
}
