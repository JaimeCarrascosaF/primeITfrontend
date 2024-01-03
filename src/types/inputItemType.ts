import { valueType } from "antd/es/statistic/utils";

type InputType = {
  chEl: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  setter: React.Dispatch<React.SetStateAction<valueType>>;
  statusSet: React.Dispatch<
    React.SetStateAction<"" | "warning" | "error" | undefined>
  >;
  maxFields: number;
};
export default InputType;
