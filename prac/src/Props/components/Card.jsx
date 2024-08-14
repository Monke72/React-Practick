import React from "react";
import { useState, useEffect } from "react";

function Cart() {
  const [users, setUsers] = useState([]);
  const getApiData = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );

    // Обновим состояние
    setUsers(response);
  };
  useEffect(() => {
    getApiData();
  }, []);

  function handleClick(event) {
    console.log(event.target.id);
  }

  return (
    <div className="wrapper" style={{ display: "flex", marginInline: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          paddingTop: 100,
          gap: 25,
        }}
      >
        {users.map((user) => (
          <div
            id={user.id}
            onClick={handleClick}
            className="user.title"
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: 280,
              textAlign: "center",
              border: "1px solid #000 ",
              marginBottom: 20,
              padding: 15,
              gap: 10,
            }}
          >
            title:{user.title}{" "}
            <img src={user.image} alt="" style={{ width: 30 }} />
            price : {user.price}$
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
