import React, { useMemo, useState, useRef } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Welcome to Jotpad!" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text:
            "This project is created using sockets, so go ahead and invite a friend (or open this page in another tab) to collaborate on the document together.",
        },
      ],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};

export default TextEditor;
