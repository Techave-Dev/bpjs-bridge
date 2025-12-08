import { DataPaginate } from "../../../types/global";
import { ProviderRayonisasiType } from "../../../types/pcare";
import { PcareService } from "../pcare.service";

export class ProviderModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param start
   * @param limit
   * @returns
   * @description
   * Get Data Provider Rayonisasi dari BPJS PCare
   */
  async get(start: number, limit: number) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ProviderRayonisasiType>
    >("provider_rayonisasi", {
      start,
      limit,
    });
    return response.data;
  }
}
