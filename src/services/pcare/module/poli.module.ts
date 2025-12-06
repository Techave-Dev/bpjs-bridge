import { DataPaginate } from "../../../types/global";
import { PoliFKTPType } from "../../../types/pcare";
import { PcareService } from "../pcare.service";

export class PoliModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param start
   * @param limit
   * @returns
   * @description
   * Get Data Poli FKTP dari BPJS PCare
   */
  async get(start: number, limit: number) {
    const response = await this.parent.callEndpoint<DataPaginate<PoliFKTPType>>(
      "poli_fktp",
      {
        start,
        limit,
      }
    );
    return response.data;
  }
}
