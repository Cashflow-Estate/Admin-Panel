
import styled from 'styled-components';


const CategoryDealRow = (Props) => {



  const {  item, name, id ,price} = Props;
  
  return (
    <div
      
    >
      <div className="image-holder">
        <img src={item.image} alt="image description" />
      </div>
      <div className="text">{name}</div>
    </div>
  );
};

export default styled(CategoryDealRow)`
  &.food-item {
    text-align: center;

    .image-holder {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 14px;
    }

    .text {
      font-size: 16px;
      line-height: 1.25;
      color: #909090;
    }
  }
`;
