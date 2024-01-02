import Item from "./item";

type ClickParam = {
    e?: React.MouseEvent<HTMLElement, MouseEvent>,
    setList: React.Dispatch<React.SetStateAction<Item[]>>,
    setInitLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
export default ClickParam;