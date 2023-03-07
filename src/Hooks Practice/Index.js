import React, { useState } from "react";

const Index = () => {
  const intialArray = [
    {
      id: 101,
      firstName: "Alakuntla",
      lastName: "Vasu",
      age: 22,
    },
    {
      id: "103",
      firstName: "Alakuntla",
      lastName: "Naveen",
      age: 19,
    },
    {
      id: "4",
      firstName: "kunchapu",
      lastName: "Varun Taj",
      age: 2,
    },
  ];
  const [data, setData] = useState(intialArray);
  console.log(data);

  const handleDelete = (comingId) => {
    const filterData = data.filter((eachItem) => {
      return eachItem.id !== comingId;
    });
    setData(filterData);
  };

  return (
    <div>
      <ul>
        {data.map((eachItem, index) => {
          const { firstName, lastName, age, id } = eachItem;
          return (
            <li key={index}>
              <div>
                my firstName <strong>{firstName}</strong>
              </div>
              <div>
                my lastName <strong> {lastName}</strong>
              </div>
              <div>
                my age <strong>{age}</strong>
              </div>
              <button onClick={() => handleDelete(id)}>delete me</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;