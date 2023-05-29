import "./Tipke.css";

const Tipka = (props:any) => {
  const handleClick = () => {
    props.click();
  }

  return (
    <div className="tipkaOkvir">
      <button onClick={handleClick}>{props.tekst}</button>
    </div>
  );
}

export default Tipka