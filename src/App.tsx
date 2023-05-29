import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Score from "./components/Score/Score";
import Tipka from "./components/Tipke/Tipke";
import Timer from "./components/Timer/timer";

const App = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [broj, postaviBroj] = useState(0);
  const [drugi, postaviDrugi] = useState(0);

  const brojacUvecajPrvi = () => {
    postaviBroj(broj + 1);
  };

  const brojacUmanjiPrvi = () => {
    if (broj > 0) postaviBroj(broj - 1);
  };

  const brojacUvecajDrugi = () => {
    postaviDrugi(drugi + 1);
  };

  const brojacUmanjiDrugi = () => {
    if (drugi > 0) postaviDrugi(drugi - 1);
  };

  return (
    <div className="mainPart">
      <div className="logoApp">
        <div className="teamOne">
          <Logo
            pic="https://upload.wikimedia.org/wikipedia/hr/thumb/4/42/FC_Bayern_M%C3%BCnchen_logo.png/120px-FC_Bayern_M%C3%BCnchen_logo.png"
            name="Bayern"></Logo>
          <div className="teamOneScore">
            <Score broj={broj} />
            <div className="tipke">
              <Tipka tekst="+" click={brojacUvecajPrvi}></Tipka>
              <Tipka tekst="-" click={brojacUmanjiPrvi}></Tipka>
            </div>
          </div>
        </div>
        <div className="currDate">{date}</div>

        <div className="teamTwo">
          <Logo
            pic="https://upload.wikimedia.org/wikipedia/hr/thumb/4/42/FC_Bayern_M%C3%BCnchen_logo.png/120px-FC_Bayern_M%C3%BCnchen_logo.png"
            name="Bayern"></Logo>
          <div className="teamTwoScore">
            <Score broj={drugi} />
            <div className="tipke">
              <Tipka tekst="+" click={brojacUvecajDrugi}></Tipka>
              <Tipka tekst="-" click={brojacUmanjiDrugi}></Tipka>
            </div>
          </div>
        </div>
      </div>

      <Timer postaviBroj={postaviBroj} postaviDrugi={postaviDrugi} />
    </div>
  );
};

export default App;
