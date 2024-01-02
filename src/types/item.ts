import { valueType } from "antd/es/statistic/utils";

type Item = {
  title: string | valueType;
  details: string | valueType;
  id?: number;
};
export default Item;
