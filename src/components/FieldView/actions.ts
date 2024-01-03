import InputType from "../../types/inputItemType";
import Item from "../../types/item";

const regexVal = "^[a-zA-Z0-9 ]{2,";
const endRegexVal = "}$";

const handleCancel = ({
  setOpen,
  setTitleStatus,
  setDetailsStatus,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTitleStatus: React.Dispatch<
    React.SetStateAction<"" | "warning" | "error" | undefined>
  >;
  setDetailsStatus: React.Dispatch<
    React.SetStateAction<"" | "warning" | "error" | undefined>
  >;
}) => {
  setTitleStatus("");
  setDetailsStatus("");
  setOpen(false);
};
const handleOk = async ({
  setOpen,
  titleStatus,
  detailsStatus,
  item,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  titleStatus: "" | "warning" | "error" | undefined;
  detailsStatus: "" | "warning" | "error" | undefined;
  item: Item;
}) => {
  if (titleStatus || detailsStatus || String(item.title).length < 2) return;

  try {
    if (item.id) await editItem(item);
    else await createNewItem(item);
    setOpen(false);
  } catch (error) {}
};

const createNewItem = async (item: Item) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: item.title,
      details: item.details,
    }),
  };
  return await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/create`,
    requestOptions
  );
};
const editItem = async (item: Item) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: item.title,
      details: item.details,
      id: item.id,
    }),
  };
  return await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/update/`,
    requestOptions
  );
};
const changeFieldData = ({ chEl, setter, statusSet, maxFields }: InputType) => {
  const tester = new RegExp(regexVal + maxFields + endRegexVal);
  if (!tester.test(chEl.target.value)) {
    statusSet("error");
  } else {
    statusSet("");
  }
  setter(chEl?.target.value);
};
export { changeFieldData, handleCancel, handleOk };
