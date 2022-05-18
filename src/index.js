import "./styles.css";

const onClickAdd = () => {};

//idで場所を定めて、eventlisnerでその場所でクリックイベントが起きたら関数を実行する
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
