import { DataPaginate } from "../../../types/global";
import { StatusPulangType } from "../../../types/pcare";
import { PcareService } from "../pcare.service";

export class StatusPulangModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param rawatInap true / flase
   * @returns
   * @description
   * Get Status Pulang berdasarkan Rawat Inap (true/false)
   */
  async get(rawatInap: boolean): Promise<DataPaginate<StatusPulangType>> {
    const response = await this.parent.callEndpoint<
      DataPaginate<StatusPulangType>
    >("status_pulang", {
      rawatInap,
    });
    return response.data;
  }
}
