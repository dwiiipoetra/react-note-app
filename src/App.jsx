import React, { useState } from "react";
import CardList from "./components/CardList";
import { getInitialData } from "./utils";

const App = () => {
  // HANDLE LIMIT CHAR
  // initial state count
  const [count, setCount] = useState(20);

  // reset count if count more than limit (20)
  if (count > 20) setCount(20);
  if (count < 0) setCount(0);

  // HANDLE SHOW ITEM
  // initial state
  const [data, setData] = useState({
    title: "",
    body: "",
    list: getInitialData,
    createdAt: Date(),
    archived: false,
  });

  // set note input title & body value
  // handle onChange title & body
  const updateTitle = (e) => {
    let updatedValue = { title: e.target.value };
    setData((data) => ({
      ...data,
      ...updatedValue,
    }));
  };

  const updateBody = (e) => {
    let updatedValue = { body: e.target.value };
    setData((data) => ({
      ...data,
      ...updatedValue,
    }));
  };

  // HANDLE ADD ITEM
  const addItem = (dataState) => {
    const inputData = {
      // add random id
      id: Math.floor(Math.random() * 101),
      // add input value to list
      title: dataState.title,
      body: dataState.body,
      createdAt: dataState.createdAt,
      archived: dataState.archived,
    };

    // update state list
    let dataList = dataState.list.push(inputData);
    let newValue = { dataList };
    setData((data) => ({
      ...data,
      ...newValue,
    }));

    // reset state
    let resetValue = {
      title: "",
      body: "",
    };
    setData((data) => ({
      ...data,
      ...resetValue,
    }));
  };

  // console.log(data);
  return (
    <>
      <div className="container">
        {/* Hero Section */}
        <section className="hero is-primary is-small mb-5">
          <div className="hero-body">
            <p className="title">Note App</p>
            <p className="subtitle">Place your fav things here.</p>
            <div className="columns">
              <div className="column is-half">
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Search something"
                ></input>
              </div>
              {/* <div className="column">Auto</div> */}
            </div>
          </div>
        </section>
        {/* Add Note Section */}
        <section className="add-note mb-5">
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">Add Note</h1>
              <p className="is-size-6 has-text-right">
                Remaining characters: {count}
              </p>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input is-primary"
                    type="text"
                    placeholder="Title..."
                    value={data.title}
                    onChange={(e) => updateTitle(e)}
                    onKeyPress={(e) => setCount(count - 1)}
                    onKeyDown={(e) =>
                      e.key === "Backspace" ? setCount(count + 1) : ""
                    }
                  />
                  <span className="icon is-left">
                    <i className="fas fa-location-arrow"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea is-primary"
                    placeholder="Description..."
                    value={data.body}
                    onChange={(e) => updateBody(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={() => addItem(data)}
                >
                  <span className="icon">
                    <i className="far fa-star"></i>
                  </span>
                  <span>Add to Favorites</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Active Note Section */}
        <section className="active-note mb-5">
          <div className="columns is-mobile">
            <div className="column is-12">
              <h1 className="title">Active Note</h1>
            </div>
          </div>
          {data.list.length ? (
            <CardList datas={data.list} removeData={setData} />
          ) : (
            <p>Tidak ada Catatan</p>
          )}
        </section>

        {/* Archive Note Section */}
        {/* <section className="archive-note mb-5">
          <div className="columns is-mobile">
            <div className="column is-12">
              <h1 className="title">Archive Note</h1>
            </div>
          </div>
          <div className="columns is-mobile">
          <CardList datas={getInitialData} />
          </div>
        </section> */}
      </div>
    </>
  );
};

export default App;
