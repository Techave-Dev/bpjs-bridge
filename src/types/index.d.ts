export {};

declare global {
  interface BPJSResponse<T> {
    metaData: MetaData;
    response: T;
  }

  type DataObject<T> = T;

  type DataArray<T> = {
    list: Array<T>;
  };
  type DataPaginate<T> = {
    count: number;
    list: Array<T>;
  };
}

interface MetaData {
  code: number;
  message: string;
}
