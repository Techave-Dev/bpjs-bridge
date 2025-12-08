import { DataPaginate } from "../../../types/global";
import { KesadaranType } from "../../../types/pcare";

import { PcareService } from "../pcare.service";

export class KesadaranModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @returns
   * @description
   * Get Data Kesadaran dari BPJS PCare
   */
  async get() {
    const response = await this.parent.callEndpoint<
      DataPaginate<KesadaranType>
    >("kesadaran");
    return response.data;
  }
}
