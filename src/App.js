import React, { useState } from "react";
import "./App.css";

// function Button(props) {
//   return <button onClick={props.onClick}>{props.children}</button>;
// }

function User(props) {
  return (
    <div className="list-style">
      <div className="todo-style">
        <div>
          <h2>🌱 {props.user.title}</h2>
        </div>
        <div>{props.user.content}</div>
      </div>

      <div className="button-set">
        <button
          className="del-button"
          onClick={() => props.handleDelete(props.user.id)}
        >
          삭제하기
        </button>
        <button
          className="done-button"
          onClick={() => props.editHandler(props.user.id)}
        >
          {props.user.done ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      id: 2,
      title: "깃허브 푸쉬하기",
      content: "깃허브를 공부해봅시다.",
      done: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      content: content,
    };
    setUsers([...users, newUser]);
    setTitle("");
    setContent("");
  };

  // const deleteUserHandler = (id) => {
  //   const newUserList = users.filter((user) => user.id !== id);
  //   setUsers(newUserList);
  // };

  // const editUserHandler = (id) => {
  //   const newUserList = users.map((user) => user.id === id);
  //   setUsers(newUserList);
  // };

  const deleteUserHandler = (userId) => {
    const newUser = users.filter((user) => {
      return user.id !== userId;
    });
    setUsers(newUser);
  };

  const editUserHandler = (userId) => {
    const newUser = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          done: !user.done,
        };
      } else {
        return { ...user };
      }
    });
    setUsers(newUser);
  };

  return (
    <div className="container">
      <div className="top">
        <div>KyoungEun Todo List</div>
        <div>React</div>
      </div>

      <div className="content-box">
        <div className="input-group">
          <label>제목</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>내용</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className="add-button" onClick={addUserHandler}>
          추가하기
        </button>
      </div>

      <div className="list-container">
        <h2 className="list-title">Working 🐿</h2>
        <div className="list-wrapper">
          {users.map((user) => {
            if (!user.done) {
              return (
                <User
                  user={user}
                  key={user.id}
                  setUsers={setUsers}
                  handleDelete={deleteUserHandler}
                  editHandler={editUserHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        <h2 className="list-title">Done 🌰</h2>
        <div className="list-wrapper">
          {users.map((user) => {
            if (user.done) {
              return (
                <User
                  user={user}
                  key={user.id}
                  setUsers={setUsers}
                  handleDelete={deleteUserHandler}
                  editHandler={editUserHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
