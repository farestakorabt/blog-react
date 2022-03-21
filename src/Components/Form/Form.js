import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADDARTICLE",
      payload: article,
    });

    // reset inputs
    setArticle({
      title: "",
      body: "",
    });
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjStateTitle = { ...article, title: e.target.value };
      setArticle(newObjStateTitle);
    } else if (e.target.classList.contains("inp-body")) {
      const newObjStateBody = { ...article, body: e.target.value };
      setArticle(newObjStateBody);
    }
  };

  console.log(article);

  return (
    <>
      <h1 className="title-form">Ecrivez un article</h1>

      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          onChange={handleInputs}
          value={article.title}
          type="text"
          id="title"
          placeholder="Entrez votre nom"
          className="inp-title"
        />

        <label htmlFor="article">Votre article</label>
        <textarea
          onChange={handleInputs}
          value={article.body}
          id="article"
          placeholder="votre article"
          className="inp-body"
        ></textarea>

        <button>Envoyer</button>
      </form>
    </>
  );
}

export default Form;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./Form.css";
// import Navbar from "../../Components/Navbar/Navbar";

// export default function Form() {
//   const [article, setArticle] = useState({
//     title: "",
//     body: "",
//   });

//   const dispatch = useDispatch();

//   const handleForm = (e) => {
//     e.preventDefault();

//     const newArticle = {
//       title: article.title,
//       body: article.body,
//     };

//     dispatch({
//       type: "ADDARTICLE",
//       payload: article,
//     });

//     setArticle({
//       title: "",
//       body: "",
//     })
//   };

//   const addNewTitle = (e) => {
//     const newObjState = { ...article, title: e.target.value };
//     setArticle(newObjState);
//   };

//   const addNewBody = (e) => {
//     const newObjState = { ...article, body: e.target.value };
//     setArticle(newObjState);
//   };

//   return (
//     <>
//       <Navbar />
//       <h1 className="title-form">Écrivez un article</h1>
//       <form className="container-form" onSubmit={handleForm}>
//         <label htmlFor="title">Titre</label>
//         <input
//           value={article.title}
//           onInput={addNewTitle}
//           type="text"
//           id="title"
//           placeholder="Entrez votre nom"
//         />

//         <label htmlFor="article">Votre article</label>
//         <textarea
//           value={article.body}
//           onInput={addNewBody}
//           id="article"
//           placeholder="Votre article"
//         ></textarea>

//         <button>Envoyer l'article</button>
//       </form>
//     </>
//   );
// }
