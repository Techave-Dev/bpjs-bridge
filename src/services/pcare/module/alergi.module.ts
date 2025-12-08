import { DataArray } from "../../../types/global";
import { AlergiJenisType } from "../../../types/pcare";

import { PcareService } from "../pcare.service";

export class AlergiModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param jenisAlergi 01:Makanan, 02:Udara, 03:Obat
   * @returns
   * @description
   * Get Data Alergi berdasarkan jenis
   */
  async get(
    jenisAlergi: "01" | "02" | "03"
  ): Promise<DataArray<AlergiJenisType>> {
    const response = await this.parent.callEndpoint<DataArray<AlergiJenisType>>(
      "alergi_jenis",
      { jenisAlergi }
    );
    return response.data;
  }
}
