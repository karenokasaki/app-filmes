function Cartaz(props) {
  const { img } = props;
  return <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="cartaz" />;
}

export default Cartaz;
