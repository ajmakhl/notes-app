import { useState } from "react";
import { v4 } from "uuid";
import { post } from "../components/database";
export default (props) => {
  const [note, setNote] = useState("");
  const _setNote = (e) => setNote(e.target.value);
  const _submit = (e) => {
    e.preventDefault();
    props.saveNote();
    post({ note, id: v4(), createdAt: Date.now() });
    setNote("");
  };
  return (
    <div>
      <form onSubmit={_submit}>
        <input
          placeholder="Note"
          type="text"
          value={note}
          onChange={_setNote}
        />
        <button>Submit</button>
      </form>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        form {
          margin: 10px 0;
          overflow: hidden;
          background-color: #f7f7f7;
          border-radius: 3px;
          border: 1px solid #3f3f3f;
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 500px;
        }
        @media (max-width: 500px) {
          form {
            margin: 10px;
            width: 100%;
          }
        }
        input {
          width: 100%;
          background-color: transparent;
          border: 0;
          padding: 10px;
          font-size: 15px;
        }
        button {
          width: auto;
          background-color: transparent;
          border: 0;
          padding: 10px;
          font-size: 15px;
          cursor: pointer;
          border-radius: 3px;
          margin: 3px;
        }
        button:hover {
          background-color: white;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          color: #0275d8;
        }
      `}</style>
    </div>
  );
};
