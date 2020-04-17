import { remove } from "../components/database";
import timestamp from "../components/timestamp";
export default (props) => {
  const _remove = (note) => {
    props.saveNote();
    remove(note);
  };
  return props.data.map((note) => {
    return (
      <div key={note.id}>
        <span className="note">
          <ul>
            <li onClick={() => _remove(note)}>delete</li>
          </ul>
          <p>{note.note}</p>
          <span className="date">{timestamp(note)}</span>
        </span>
        <style jsx>{`
          div {
            width: 100%;
          }
          .note {
            display: block;
            position: relative;
            padding: 10px;
            margin-top: 20px;
            border-radius: 3px;
          }
          .note:hover {
            background-color: #f7f7f7;
          }
          .note:hover > ul {
            display: flex;
          }
          .note > ul {
            display: none;
            position: absolute;
            top: -25px;
            padding: 3px 5px;
            padding-bottom: 0;
            border-radius: 3px;
            list-style-type: none;
            background-color: #f7f7f7;
          }
          .note > ul > li {
            margin: 3px;
            padding: 3px;
            border-radius: 3px;
            background-color: white;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          .note > ul > li:hover {
            margin: 3px;
            padding: 3px;
            border-radius: 3px;
            color: #d9534f;
          }
          .date {
            font-size: 0.7em;
            background-color: #0275d8;
            padding: 1px 7px;
            border-radius: 30px;
            color: white;
          }
          p {
            margin: 0;
          }
        `}</style>
      </div>
    );
  });
};
