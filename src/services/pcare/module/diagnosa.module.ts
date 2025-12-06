import { DataPaginate } from "../../../types/global";
import { Diagnose } from "../../../types/pcare";
import { PcareService } from "../pcare.service";

export class DiagnosaModule {
  constructor(private parent: PcareService) {}

  async get(kodediag: string, start: number, limit: number) {
    const response = await this.parent.callEndpoint<DataPaginate<Diagnose>>(
      "diagnosa",
      { kodediag, start, limit }
    );
    return response.data;
  }
}
