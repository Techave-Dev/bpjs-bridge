import { DataArray } from "../../../types/global";
import { PcareService } from "../pcare.service";

export class DokterModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param start
   * @param limit
   * @returns
   */
  async get(start: number, limit: number): Promise<any> {
    const response = await this.parent.callEndpoint<DataArray<any>>("dokter", {
      start,
      limit,
    });
    return response.data;
  }
}
