import React, { useState } from "react";

const ProductCat = (props) => {
  const { product } = props;

  return (
    <tr>
      <td colSpan="2">
        <h3 className="text-center">{product.category}</h3>
      </td>
    </tr>
  );
};

const ProductRows = (props) => {
  const { product } = props;
  const colorName = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{colorName}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = (props) => {
  const { filterValue, checkValue, products } = props;
  const rows = [];
  let catName = null;

  products.forEach((product) => {
    if (product.name.indexOf(filterValue) === -1) {
      return;
    }

    if (checkValue && !product.stocked) {
      return;
    }
    if (catName !== product.category) {
      rows.push(<ProductCat product={product} key={product.category} />);
    }
    rows.push(<ProductRows product={product} key={product.name} />);
    catName = product.category;
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const Search = (props) => {
  const { textHandle, checkboxHandle, filterValue, checkValue } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{ margin: "10px" }}
        value={filterValue}
        onChange={(event) => textHandle(event.target.value)}
      />
      <input
        type="checkbox"
        style={{ marginLeft: "10px" }}
        checked={checkValue}
        onChange={(event) => checkboxHandle(event.target.checked)}
      />
      <span> Get In-stock products only</span>
    </div>
  );
};

const Products = (Props) => {
  const [filterValue, setFilterValue] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const handleOnChangeName = (filterValue) => {
    setFilterValue(filterValue);
  };

  const handleOnChangeCheckbox = (checkValue) => {
    setCheckValue(checkValue);
  };

  return (
    <React.Fragment>
      <Search
        filterValue={filterValue}
        checkValue={checkValue}
        textHandle={handleOnChangeName}
        checkboxHandle={handleOnChangeCheckbox}
      />
      <ProductTable
        products={Props.products}
        filterValue={filterValue}
        checkValue={checkValue}
      />
    </React.Fragment>
  );
};

export default Products;
