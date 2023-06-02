const Card = ({ image, selected, onClick }) => {


  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={'/memorix/assets/question.png'}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
