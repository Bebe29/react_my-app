import React from "react";

const ProductCard = props => {
  const { productData } = props;
  const { nama, harga, desc, discount, stock } = productData;

  const renderItem = () => {
    if (stock) {
      return (
        <>
          <h3>Nama: {nama}</h3>
          <h4>Harga Rp. {harga}</h4>
          {discount > 0 ? (
            <h4>
              Diskon {discount}% harga menjadi {harga * (1 - discount / 100)}
            </h4>
          ) : null}
          <p>Description: {desc}</p>
          <h4>Stock: {stock}</h4>
        </>
      );
    } else {
      return (
        <>
          <h3>Nama: {nama}</h3>
          <h3>Stock Kosong</h3>
        </>
      );
    }
  };
  return (
    <div
      style={{
        width: "240px",
        padding: "16px",
        border: "1px solid black",
        borderRadius: "7px"
      }}
    >
      {/* <p>Product Card</p> */}
      {/* <h3>Nama product</h3>
      <h4>Price: Rp.sekian</h4>
      <p>
        Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Aspernatur omnis pariatur inventore nostrum porro commodi sit maxime
        eligendi blanditiis corporis illo voluptatem, veritatis itaque id
        aliquid? Enim quibusdam asperiores iusto!
      </p> */}
      {/* <h3>{props.nama}</h3>
      <h4>Price: Rp. {props.harga}</h4>
      <p>Description: {props.desc}</p> */}
      {renderItem()}
    </div>
  );
};

export default ProductCard;
