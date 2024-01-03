import { onClickEdit, onClickDelete, getData } from "./actions";

jest.mock("../../types/clickParam");
let fetchMock: any = undefined;

beforeEach(() => {
  fetchMock = jest.spyOn(global, "fetch").mockImplementation(assetsFetchMock);
  process.env.REACT_APP_BACKEND_URL = "";
});

afterEach(() => {
  jest.restoreAllMocks();
});
describe("onClickEdit", () => {
  it("should expose a function", () => {
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
  it("should expose a function", () => {
    expect(onClickDelete).toBeDefined();
  });

  it("onClickDelete should return expected output", () => {
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
    onClickDelete(paramVal);
    expect(paramVal.setInitLoading).toHaveBeenCalledWith(true);
  });
});
describe("getData", () => {
  it("should expose a function", () => {
    expect(getData).toBeDefined();
  });

  it("getData should return expected output", () => {
    const param = {
      setInitLoading: jest.fn(),
      setList: jest.fn(),
    };
    getData(param);
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith("/api/list");
  });
});

export const assetsFetchMock = () =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => {
      return { data: true };
    },
  } as Response);
