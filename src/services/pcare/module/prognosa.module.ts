import { DataArray } from "../../../types/global";
import { PrognosaType } from "../../../types/pcare";
import { PcareService } from "../pcare.service";

export class PrognosaModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @returns
   * @description
   * Get Data Prognosa dari BPJS PCare
   */
  async get() {
    const response = await this.parent.callEndpoint<DataArray<PrognosaType>>(
      "prognosa"
    );
    return response.data;
  }
}
