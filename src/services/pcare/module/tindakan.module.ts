import { BPJSResponseSucess, DataPaginate } from "../../../types/global";
import {
  ReferensiTindakanType,
  TindakanByKunjunganType,
  TindakanPayload,
} from "../../../types/pcare";

import { PcareService } from "../pcare.service";

export class TindakanPulangModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param kdTkp 10 : RJTP, 20 : RITP, 50 : Promotif
   * @param start
   * @param limit
   * @returns
   * @description
   * Get Data Referensi Tindakan berdasarkan kdTkp
   */
  async getReferensi(kdTkp: "10" | "20" | "50", start: number, limit: number) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ReferensiTindakanType>
    >("referensi_tindakan", {
      kdTkp,
      start,
      limit,
    });
    return response.data;
  }

  /**
   *
   * @param nomorKunjungan
   * @returns
   * @description
   * Get Data Tindakan berdasarkan Nomor Kunjungan
   */
  async get(nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<TindakanByKunjunganType>
    >("tindakan_kunjungan", {
      nomorKunjungan,
    });
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data Tindakan
   */
  async add(body: TindakanPayload) {
    const response = await this.parent.callEndpoint<BPJSResponseSucess>(
      "tambah_tindakan",
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
   * Edit Data Tindakan
   */
  async edit(body: TindakanPayload) {
    const response = await this.parent.callEndpoint<BPJSResponseSucess>(
      "edit_tindakan",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param kdTindakanSK
   * @param nomorKunjungan
   * @returns
   * @description
   * Delete Data Tindakan berdasarkan kdTindakanSK dan Nomor Kunjungan
   */
  async delete(kdTindakanSK: string, nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<BPJSResponseSucess>(
      "hapus_tindakan",
      { kdTindakanSK, nomorKunjungan }
    );
    return response.data;
  }
}
