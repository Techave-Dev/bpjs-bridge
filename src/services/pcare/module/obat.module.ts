import { DataPaginate } from "../../../types/global";
import {
  AddObatPayload,
  AddObatType,
  GetDPHOType,
  ObatByKunjunganType,
} from "../../../types/pcare";
import { PcareService } from "../pcare.service";

// src/services/pcare/ObatService.ts
export class ObatModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param kodeNamaDPHO Kode atau nama DPHO
   * @param start
   * @param limit
   * @returns
   */
  async getDPHO(kodeNamaDPHO: string, start: number, limit: number) {
    const response = await this.parent.callEndpoint<DataPaginate<GetDPHOType>>(
      "dpho",
      { kodeNamaDPHO, start, limit }
    );
    return response.data;
  }

  /**
   *
   * @param nomorKunjungan
   * @returns
   * @description Fungsi : Get Data Obat by Kunjungan
   */
  async getKunjungan(nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ObatByKunjunganType>
    >("obat_kunjungan", { nomorKunjungan });
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data Obat ke BPJS PCare
   */
  async add(body: AddObatPayload) {
    const response = await this.parent.callEndpoint<AddObatType[]>(
      "tambah_obat",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param kdObatSK
   * @param nomorKunjungan
   * @returns
   * @description
   * Delete Data Obat berdasarkan kdObatSK dan Nomor Kunjungan
   */
  async delete(kdObatSK: string, nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<null>("hapus_obat", {
      kdObatSK,
      nomorKunjungan,
    });
    return response.data;
  }
}
