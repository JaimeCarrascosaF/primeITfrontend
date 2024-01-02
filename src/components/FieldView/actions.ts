import InputType from "../../types/inputItemType";

const regexVal = "^[a-zA-Z0-9]*$";

const handleCancel = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  setOpen(false);
};
const handleOk = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  setOpen(false);
};

const changeFieldData = ({ chEl, setter, statusSet }: InputType) => {
  const tester = new RegExp(regexVal);
  if (!tester.test(chEl.target.value)) {
    statusSet("error");
    return;
  }
  statusSet("");
  setter(chEl?.target.value);
};
export { changeFieldData, handleCancel, handleOk };
