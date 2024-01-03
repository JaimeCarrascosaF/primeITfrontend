import InputType from "../../types/inputItemType";
import { assetsFetchMock } from "../Cards/actions.test";
import { changeFieldData, handleCancel, handleOk } from "./actions";

jest.mock("../../types/inputItemType");
jest.mock("../../types/item");

describe("changeFieldData", () => {
  it("should expose a function", () => {
    expect(changeFieldData).toBeDefined();
  });

  it("changeFieldData should return expected output", () => {
    const paramVal: InputType = {
      chEl: { target: { value: "a" } } as React.ChangeEvent<HTMLInputElement>,
      setter: jest.fn(),
      statusSet: jest.fn(),
      maxFields: 20,
    };
    changeFieldData(paramVal);
    expect(paramVal.statusSet).toHaveBeenCalledWith("error");
    paramVal.chEl.target.value = "aaa";
    changeFieldData(paramVal);
    expect(paramVal.statusSet).toHaveBeenCalledWith("");
  });
});
describe("handleCancel", () => {
  it("should expose a function", () => {
    expect(handleCancel).toBeDefined();
  });

  it("handleCancel should return expected output", () => {
    const paramVal = {
      setOpen: jest.fn(),
      setTitleStatus: jest.fn(),
      setDetailsStatus: jest.fn(),
    };
    handleCancel(paramVal);
    expect(paramVal.setOpen).toHaveBeenCalled();
    expect(paramVal.setTitleStatus).toHaveBeenCalled();
    expect(paramVal.setDetailsStatus).toHaveBeenCalled();
  });
});
describe("handleOk", () => {
  it("should expose a function", () => {
    expect(handleOk).toBeDefined();
  });
  let fetchMock: any = undefined;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch").mockImplementation(assetsFetchMock);
    process.env.REACT_APP_BACKEND_URL = "";
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("handleOk should return expected output", async () => {
    const paramVal = {
      setOpen: jest.fn(),
      titleStatus: "" as "",
      detailsStatus: "" as "",
      item: { title: "aaa", details: "", id: Number() },
    };
    await handleOk(paramVal);
    expect(fetchMock).toHaveBeenCalled();
    paramVal.item.id = 23;
    await handleOk(paramVal);
    expect(fetchMock.mock.calls[0][0]).toBe("/api/create");
    expect(fetchMock.mock.calls[1][0]).toBe("/api/update/");
  });
});
