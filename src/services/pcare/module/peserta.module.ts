import { DataObject } from "../../../types/global";
import { PesertaPayload } from "../../../types/peserta";
import { PcareService } from "../pcare.service";

export class PesertaModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param noKartu
   * @returns
   * @description
   * Get Data Peserta berdasarkan Nomor Kartu Peserta
   */
  async get(noKartu: string) {
    const response = await this.parent.callEndpoint<DataObject<PesertaPayload>>(
      "peserta_noka",
      {
        noKartu,
      }
    );
    return response.data;
  }

  /**
   *
   * @param jenisKartu nik (nomor induk keluarga) / noka (nomor kartu)
   * @param noIdentitas
   * @returns
   * @description
   * Get Data Peserta berdasarkan Jenis Kartu (NIK/NOKA) dan Nomor Identitas
   */
  async getByJenis(jenisKartu: "nik" | "noka", noIdentitas: string) {
    const response = await this.parent.callEndpoint<DataObject<PesertaPayload>>(
      "peserta_nik_noka",
      {
        jenisKartu,
        noIdentitas,
      }
    );
    return response.data;
  }
}
