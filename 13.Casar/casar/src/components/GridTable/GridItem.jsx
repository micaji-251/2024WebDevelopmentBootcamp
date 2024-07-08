import './GridItem.css';

export const GridItem = ({classItem,imageItem}) => {
  return (
    <div className={'GridItem ' +classItem }>
      <img
        src={imageItem}
        alt="Televisores"
      />
    </div>
  );
};
