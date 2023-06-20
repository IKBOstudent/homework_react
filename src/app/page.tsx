"use client";

import React, { useState } from "react";
import IconButton from "./components/IconButton";
import TextButton from "./components/TextButton";
import TextInput from "./components/TextInput";
import Dropdown from "./components/Dropdown";

function Page() {
    const [text, setText] = useState("");

    return (
        <div style={{ padding: 40 }}>
            <IconButton content="minus" disabled={false} onClick={() => console.log("minus")} />
            <IconButton content="plus" disabled={false} onClick={() => console.log("plus")} />
            <IconButton content="minus" disabled={true} />
            <IconButton content="plus" disabled={true} />

            <TextButton content="Да" style="filled" onClick={() => console.log("Да")} />
            <TextButton content="Нет" style="outlined" onClick={() => console.log("Нет")} />

            <TextInput
                htmlId="input-first"
                label="Label"
                placeholder="Placeholder"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <TextInput htmlId="input-second" label="Label" placeholder="Placeholder" />

            <Dropdown
                htmlId="dropdown-first"
                label="Label"
                placeholder="Placeholder"
                items={["Не выбрано", "Item1", "Item2", "Item3"]}
            />
        </div>
    );
}

export default Page;
