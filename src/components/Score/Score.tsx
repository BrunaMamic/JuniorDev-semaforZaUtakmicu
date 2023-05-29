import "./Score.css";

const Score = (props: any) => {
  return (
    <div className="prikaz">
      <div>{props.broj}</div>
    </div>
  );
}

export default Score;
