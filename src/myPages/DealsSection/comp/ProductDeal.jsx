import styled from "styled-components";

const ProductDeal = (Props) => {
    const { name, price, id,image } = Props;
    console.log("🚀 ~ ProductDeal ~ Props:", Props)
  
    
  
    return (
      <div  >
          <div className="image-holder" >
            <img src={image} alt="image description" />
          </div>
          <strong className="product-name" >{name}</strong>
          <strong className="price">${price}</strong>
  
      </div>
    );
  };
  
  export default styled(ProductDeal)`
    &.product-box {
      padding: 21px 8px 28px;
      text-align: center;
      transition: all 0.25s ease-in-out;
      min-height: 372px;
      align-items: center;
  
      @media (max-width: 1199px) {
        padding: 20px 30px 28px;
        min-height: 340px;
      }
  
      &:hover {
        background: #ffffff;
        box-shadow: 19px 37px 100px rgba(0, 0, 0, 0.1);
        border-radius: 23px;
  
        .qty-counter {
          opacity: 1;
          visibility: visible;
          height: 25px;
        }
      }
  
      .image-holder {
        width: 114px;
        height: 114px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
      }
  
      .product-name {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
        line-height: 1.75;
        color: #000;
        margin: 0 0 20px;
        font-weight: 400;
        max-width: 100%;
      }
  
      .price {
        display: block;
        font-size: 20px;
        line-height: 1.25;
        color: #000;
        margin: 0 0 20px;
        font-weight: 400;
      }
  
      .qty-counter {
        max-width: 112px;
        padding: 0;
        margin: 0 auto 20px;
        opacity: 0;
        visibility: hidden;
        height: 0;
        transition: all 0.3s ease-in-out;
      }
  
      .primary {
        min-width: 168px;
      }
    }
  `;