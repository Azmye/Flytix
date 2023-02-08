const NewsPrewCard = ({ image, title, dates }) => {
  return (
    <div className="flex py-3">
      <div className="w-3/12 overflow-hidden rounded-lg">
        <img src={image} alt="News Image" />
      </div>
      <div className="w-9/12 pl-2 text-sm">
        <h4 className="font-semibold text-sky-600">{title}</h4>
        <p>{dates}</p>
      </div>
    </div>
  );
};

export default NewsPrewCard;
