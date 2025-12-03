export {};

declare global {
  interface BPJSResponse<T> {
    metaData: MetaData;
    response: T;
  }

  type DataObject<T> = T;

  interface DataArray<T> {
    count: number;
    list: Array<T>;
  }
}

interface MetaData {
  code: number;
  message: string;
}
