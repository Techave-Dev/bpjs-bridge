import {
  BPJSResponseSucess,
  DataObject,
  DataPaginate,
} from "../../../types/global";
import {
  PendaftaranByNomorUrutType,
  PendaftaranByProvider,
  PendaftaranPayload,
} from "../../../types/pendaftaran";

import { PcareService } from "../pcare.service";

export class PendaftaranModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param noUrut
   * @param tglDaftar 13-08-2015 | dd-mm-yyyy
   * @returns
   * @description
   * Get Data Pendaftaran berdasarkan Nomor Urut dan Tanggal Daftar
   */
  async getByNomorUrut(noUrut: string, tglDaftar: string) {
    const response = await this.parent.callEndpoint<
      DataObject<PendaftaranByNomorUrutType>
    >("pendaftaran_by_noUrut", { noUrut, tglDaftar });
    return response.data;
  }

  /**
   *
   * @param tglDaftar 13-08-2015 | dd-mm-yyyy
   * @param start 0
   * @param limit 1
   * @returns
   * @description
   * Get Data Pendaftaran berdasarkan tanggal, start, dan limit
   */
  async getByProvider(tglDaftar: string, start: string, limit: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<PendaftaranByProvider>
    >("pendaftaran_provider", { tglDaftar, start, limit });
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data Pendaftaran Baru
   */
  async add(body: PendaftaranPayload) {
    const response = await this.parent.callEndpoint<BPJSResponseSucess>(
      "tambah_pendaftaran",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @returns
   * @description
   * untuk mengambil referensi kode TKP
   */
  refTkp() {
    return [
      { kdTkp: "10", nmTkp: "RJTP" },
      { kdTkp: "20", nmTkp: "RITP" },
      { kdTkp: "50", nmTkp: "Promotif" },
    ];
  }

  /**
   *
   * @param noKartu
   * @param tglDaftar 13-08-2015 | dd-mm-yyyy
   * @param noUrut
   * @param kdPoli
   * @returns
   * @description
   * Delete Data Pendaftaran berdasarkan Nomor Kartu, Tanggal, Urutan, dan Kode Poli
   */
  async delete(
    noKartu: string,
    tglDaftar: string,
    noUrut: string,
    kdPoli: string
  ) {
    const response = await this.parent.callEndpoint<null>("hapus_pendaftaran", {
      noKartu,
      tglDaftar,
      noUrut,
      kdPoli,
    });
    return response.data;
  }
}
