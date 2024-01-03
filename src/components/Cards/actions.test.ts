import { onClickEdit, onClickDelete, getData } from "./actions";

jest.mock("../../types/clickParam");

describe("onClickEdit", () => {
  it.skip("should expose a function", () => {
    expect(onClickEdit).toBeDefined();
  });

  it("onClickEdit should return expected output", () => {
    const paramVal = {
      setTitle: jest.fn(),
      setDetails: jest.fn(),
      setModalId: jest.fn(),
      setModalOpen: jest.fn(),
      item: {
        title: "",
        details: "",
        id: 1,
      },
      setList: jest.fn(),
      setInitLoading: jest.fn(),
    };
    onClickEdit(paramVal);
    expect(paramVal.setTitle).toHaveBeenCalled();
    expect(paramVal.setDetails).toHaveBeenCalled();
    expect(paramVal.setModalId).toHaveBeenCalled();
    expect(paramVal.setModalOpen).toHaveBeenCalled();
  });
});
describe("onClickDelete", () => {
  it.skip("should expose a function", () => {
    expect(onClickDelete).toBeDefined();
  });

  it.skip("onClickDelete should return expected output", () => {
    // const retValue = onClickDelete(param);
    expect(false).toBeTruthy();
  });
});
describe("getData", () => {
  it.skip("should expose a function", () => {
    expect(getData).toBeDefined();
  });

  it.skip("getData should return expected output", () => {
    // const retValue = getData();
    expect(false).toBeTruthy();
  });
});
