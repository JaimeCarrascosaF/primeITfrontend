import ClickParam, { ItemList } from "../../types/clickParam";

const onClickEdit = (param: ClickParam) => {
  param.setTitle?.(param.item.title);
  param.setDetails?.(param.item.details);
  param.setModalOpen?.(true);
};
const onClickDelete = (param: ClickParam) => {
  param.setInitLoading(true);
  fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/delete/?id=${param.item.id}`,
    { method: "DELETE" }
  ).then(() => getData(param));
};
const getData = ({ setInitLoading, setList }: ItemList) => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/api/list`)
    .then((response) => response.json())
    .then((data) => {
      setInitLoading(false);
      setList(data.items);
    });
};

export { onClickEdit, onClickDelete, getData };
