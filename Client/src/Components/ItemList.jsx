import Item from "./Item";

const ItemList = ({ dataArr }) => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dataArr.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </div>
    </>
  );
};
export default ItemList;
