
import { useState } from "react";
import Dante from "dante3";


export default function BlogEdit() {
  const [html, setHTML] = useState("");
  return (
    <div>
      <div>{html}</div>
      -----
      <Dante
        onUpdate={(editor) => setHTML(editor.getHTML())}
      />
    </div>
  );
}
