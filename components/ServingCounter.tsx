"use client";

import { useState } from "react";

export default function ServingsCounter() {
  const [servings, setServings] = useState(4);

  return (
    <div>
        <button onClick={() => setServings(servings - 1)}>-</button>
        <span>{servings} servings</span>
        <button onClick={() => setServings(servings + 1)}>+</button>
    </div>
    );
}