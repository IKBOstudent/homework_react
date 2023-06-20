"use client";

import React, { useState } from "react";
import IconButton from "@/app/components/IconButton";
import TextButton from "@/app/components/TextButton";
import TextInput from "@/app/components/TextInput";
import Dropdown from "@/app/components/Dropdown";
import Modal from "@/app/components/Modal";
import Collapse from "@/app/components/Collapse";

function Page() {
    const [text, setText] = useState("");

    return (
        <div
            style={{
                padding: 80,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
                background: "#EAEAEA",
            }}
        >
            <IconButton content="minus" disabled={false} onClick={() => console.log("minus")} />
            <IconButton content="plus" disabled={false} onClick={() => console.log("plus")} />
            <IconButton content="minus" disabled={true} />
            <IconButton content="plus" disabled={true} />

            <TextButton content="Да" style="filled" onClick={() => console.log("Да")} />
            <TextButton content="Нет" style="outlined" onClick={() => console.log("Нет")} />

            <TextInput
                htmlId="input-first"
                label="Название"
                placeholder="Введите название"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <Dropdown
                htmlId="dropdown-first"
                label="Жанр"
                placeholder="Выберите жанр"
                items={["Не выбран", "Боевик", "Комедия", "Фэнтези", "Ужасы"]}
            />

            <Modal title="Удаление билета" subtitle="Вы уверены, что хотите удалить билет?" />

            <Collapse
                title="Когда был основан билетопоиск?"
                text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
            />
        </div>
    );
}

export default Page;
