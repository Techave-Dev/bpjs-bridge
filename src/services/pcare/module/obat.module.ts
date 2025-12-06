import { DataPaginate } from "../../../types/global";
import { GetDPHOType } from "../../../types/pcare";
import { PcareService } from "../pcare.service";

// src/services/pcare/ObatService.ts
export class ObatModule {
  constructor(private parent: PcareService) {}

  async getDPHO(kodeNamaDPHO: string, start: number, limit: number) {
    const response = await this.parent.callEndpoint<DataPaginate<GetDPHOType>>(
      "dpho",
      { kodeNamaDPHO, start, limit }
    );
    return response.data;
  }
}
