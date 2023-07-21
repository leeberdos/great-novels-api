import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function GreatNovels() {
  const [search, setSearch] = useState("");
  const [novels, setNovels] = useState([]);
  const [fliteredNovels, setFilteredNovels] = useState([]);

  useEffect(() => {
    const fetchNovels = async () => {
      let fetch = await axios.get("http://localhost:8080/novels");

      setNovels(fetch.data);
      setFilteredNovels(fetch.data);
    };

    fetchNovels();
  }, []);

  useEffect(() => {
    setFilteredNovels(
      novels.filter((novels) => {
        if (novels.title.toLowerCase().includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [search]);

  const renderNovels = fliteredNovels.map((novels) => {
    return (
      <div>
        {novels.title} by {novels.author.nameFirst} {novels.author.nameLast}
      </div>
    );
  });

  return (
    <div className="page">
      <h1 className="title">GreatNovels</h1>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <div className="search">{renderNovels}</div>
    </div>
  );
}

export default GreatNovels;
