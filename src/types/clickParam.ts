import { valueType } from "antd/es/statistic/utils";
import Item from "./item";

type ClickParam = {
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
  item: Item;
  setInitLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle?: React.Dispatch<React.SetStateAction<valueType>>;
  setDetails?: React.Dispatch<React.SetStateAction<valueType>>;
  setModalId?: React.Dispatch<React.SetStateAction<number | undefined>>;
};
export type ItemList = {
  setInitLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
};
export default ClickParam;
