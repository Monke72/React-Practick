import React from "react";

function Menu({ siteName, some }) {
  const { name, age, isMarried } = some;
  const whiteTheme = false;
  return (
    <div>
      site Name:{siteName}
      name people : {name}
      his age : {age}
      {isMarried ? <p>IsMarried</p> : <p>He is not married</p>}
    </div>
  );
}

export default Menu;
