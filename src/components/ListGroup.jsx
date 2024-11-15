import React from "react";
import { useState } from "react";

function ListGroup() {
    const items = [
        "New York",
        "San Francisco",
        "London",
        "Tokyo",
        "Paris"
    ];
    // Hook to manage selected index
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>City List:</h1>
            {items.length === 0 && <p>No Items Found!</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
