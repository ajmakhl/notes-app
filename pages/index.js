import { useState, useEffect } from "react";
import Head from "next/head";
import Form from "../components/Form";
import List from "../components/List";
import { get } from "../components/database";
const Home = () => {
  const [data, setData] = useState([]);
  const saveNote = () => setData(get());
  useEffect(() => {
    if (data.length !== get().length) setData(get());
  }, [data, setData]);
  return (
    <div className="container">
      <Head>
        <title>Take lots of notes</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <h1>Notes</h1>
        <p>Data is saved on the local storage of your browser.</p>
        <Form saveNote={saveNote} />
        <List data={data} saveNote={saveNote} />
      </main>
      <style jsx>{`
        h1 {
          margin: 30px 0;
        }
        p {
          padding: 0 10px;
          color: #3f3f3f;
        }
        main {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          font-family: "Roboto", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Home;
