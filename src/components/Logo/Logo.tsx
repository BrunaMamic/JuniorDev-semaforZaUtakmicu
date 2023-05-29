import "./Logo.css";

const Logo = (prop: any) => {
  const {pic, name} = prop;
  return (
    <div className="logoPic">
      <div className="pic">
        <img src={pic}></img>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Logo;
