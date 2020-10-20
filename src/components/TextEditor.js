import React, { useState, useRef, useEffect } from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const TextEditor = () => {
  const editor = useRef(null);
  const id = useRef(`${Date.now()}`);
  const remote = useRef(false);

  const [value, setValue] = useState(
    Value.fromJSON({
      document: {
        nodes: [
          {
            object: "block",
            type: "paragraph",
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    text: "A line of text in a paragraph.",
                  },
                ],
              },
            ],
          },
        ],
      },
    })
  );

  useEffect(() => {
    socket.on("new-remote-operations", ({ editorId, ops }) => {
      if (id.current !== editorId) {
        remote.current = true;
        JSON.parse(ops).forEach((op) => editor.current.applyOperation(op));
        remote.current = false;
      }
    });
  }, []);

  return (
    <Editor
      ref={editor}
      value={value}
      onChange={(opts) => {
        setValue(opts.value);

        const ops = opts.operations
          .filter((o) => {
            if (o) {
              return (
                o.type !== "set_selection" &&
                o.type !== "set_value" &&
                (!o.data || !o.data.has("source"))
              );
            }

            return false;
          })
          .toJS()
          .map((o) => ({ ...o, data: { source: "one" } }));

        if (ops.length && !remote.current) {
          socket.emit("new-operations", {
            editorId: id.current,
            ops: JSON.stringify(ops),
          });
        }
      }}
    />
  );
};

export default TextEditor;
