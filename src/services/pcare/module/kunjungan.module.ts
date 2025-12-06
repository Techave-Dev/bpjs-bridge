import { DataArray, DataObject, DataPaginate } from "../../../types/global";
import {
  KunjunganPayload,
  KunjunganRujukanType,
  KunjunganType,
  RiwayatKunjunganType,
} from "../../../types/kunjungan";

import { PcareService } from "../pcare.service";

export class KunjunganModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param nomorKunjungan
   * @returns
   */
  async getRujukan(
    nomorKunjungan: string
  ): Promise<DataArray<KunjunganRujukanType>> {
    const response = await this.parent.callEndpoint<DataArray<any>>(
      "rujukan_kunjungan",
      {
        nomorKunjungan,
      }
    );
    return response.data;
  }

  /**
   *
   * @param nomorKartu
   * @returns
   * @description
   * Get Data Riwayat Kunjungan berdasarkan Nomor Kartu Peserta
   */
  async getRiwayat(nomorKartu: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<RiwayatKunjunganType>
    >("riwayat_kunjungan", {
      nomorKartu,
    });
    return response.data;
  }

  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data Kunjungan ke BPJS PCare V1
   */
  async add(body: KunjunganPayload) {
    const response = await this.parent.callEndpoint<DataObject<KunjunganType>>(
      "tambah_kunjungan",
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
   * Edit Data Kunjungan ke BPJS PCare V1
   */
  async edit(body: KunjunganPayload) {
    const response = await this.parent.callEndpoint<DataObject<KunjunganType>>(
      "edit_kunjungan",
      undefined,
      body
    );
    return response.data;
  }

  /**
   *
   * @param nomorKunjungan
   * @returns
   * @description
   * Delete Data Kunjungan berdasarkan Nomor Kunjungan
   */
  async delete(nomorKunjungan: string) {
    const response = await this.parent.callEndpoint<null>("hapus_kunjungan", {
      nomorKunjungan,
    });
    return response.data;
  }
}
