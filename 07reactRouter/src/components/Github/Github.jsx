import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ArjunJakhar")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className=" text-center flex relative m-4 bg-gray-400 text-white p-4 text-3xl">
      <div className="flex flex-col items-center justify-center p-5 w-1/3">
        <img
          className="rounded-xl "
          width={200}
          src={data.avatar_url}
          alt="Github Profile"
        />
        <h2 className="mt-5">Profile Picture</h2>
      </div>
      <div className="w-2/3">
        <div className="p-5 h-100">Github Name : {data.name}</div>
        <div className="p-5 h-100">Github College : {data.company}</div>
        <div className="p-5 h-100">Github Projects : {data.public_repos}</div>
      </div>
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const resposne = await fetch("https://api.github.com/users/ArjunJakhar");
  return resposne.json();
};
