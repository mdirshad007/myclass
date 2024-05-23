import Link from "next/link";
import React from "react";
import UserTable from "./UserTable/UserTable";

const fetchData = async () => {
  let data = await fetch(
    "https://664cd720ede9a2b55651d20a.mockapi.io/user/users"
  );
  data = await data.json();
  console.log(data.length);
  return data;
};

export default async function Page() {
  const userData = await fetchData();
  return (
    <div className="flex w-full md:max-w-[1200px] mx-auto justify-between mt-6 flex-wrap px-5 py-14">
      <div className="flex justify-end w-full">
        <Link href="/all-users/add-new-user">
          <button className="px-4 py-3 bg-green-600 rounded-full text-white mb-10 hover:bg-green-900 transition-all">
            Add New Record
          </button>
        </Link>
      </div>

      <UserTable userData={userData} />
    </div>
  );
}
