import React from "react";
import { useDispatch } from "react-redux";
import { CLICK_ITEM } from "../../store/bingo";

const BingoItem = ({ item, player }) => {
  const itemStyle = {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid",
    borderColor: "black",
  };
  const dispatch = useDispatch();

  return (
    <div
      style={
        item.clicked
          ? {
              ...itemStyle,
              backgroundColor: "gray",
              color: "white",
            }
          : itemStyle
      }
      onClick={() => dispatch(CLICK_ITEM({ number: item.number, player }))}
    >
      {item.number}
    </div>
  );
};

export default BingoItem;
