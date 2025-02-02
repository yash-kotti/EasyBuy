import Item from "./Item";

const ItemList = ({ dataArr }) => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dataArr.map((item) => (
          <Item item={item}></Item>
        ))}
      </div>
    </>
  );
};
export default ItemList;
