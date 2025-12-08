import { BPJSResponseSucess, DataPaginate } from "../../../types/global";
import { McuPayload, McuType } from "../../../types/pcare";

import { PcareService } from "../pcare.service";

export class MCUModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param nomorKunjungan
   * @returns
   * @description
   * Get Data MCU berdasarkan Nomor Kunjungan
   */
  async get(nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<DataPaginate<McuType>>(
      "mcu_kunjungan",
      {
        nomorKunjungan,
      }
    );
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data MCU ke BPJS PCare / Update berdasarkan kdMCU
   */
  async add(body: McuPayload) {
    const response = await this.parent.callEndpoint<BPJSResponseSucess>(
      "tambah_mcu",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Edit Data MCU di BPJS PCare Update berdasarkan kdMCU
   */
  async edit(body: McuPayload) {
    const response = await this.parent.callEndpoint<null>(
      "edit_mcu",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param kdMCU
   * @param nomorKunjungan
   * @returns null
   * @description
   * Delete Data MCU berdasarkan kdMCU dan Nomor Kunjungan
   */
  async delete(kdMCU: string, nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<null>("mcu_kunjungan", {
      kdMCU,
      nomorKunjungan,
    });
    return response.data;
  }
}
