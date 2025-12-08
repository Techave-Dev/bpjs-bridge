import {
  BPJSResponseSucess,
  DataObject,
  DataPaginate,
} from "../../../types/global";
import {
  KelompokClubProlanisType,
  KelompokKegiatanPayload,
  KelompokKegiatanPesertaPayload,
  KelompokKegiatanType,
} from "../../../types/kelompok";
import { PcareService } from "../pcare.service";

export class KelompokModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @param kodeJenisKelompok 01 : Diabetes Melitus, 02 : Hipertensi
   * @returns
   * @description
   * Get Data Club Prolanis berdasarkan Kode Jenis Kelompok (01: Diabetes Melitus, 02: Hipertensi)
   */
  async getClubProlanis(kodeJenisKelompok: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<KelompokClubProlanisType>
    >("get_club_prolanis", {
      kodeJenisKelompok,
    });
    return response.data;
  }
  /**
   *
   * @param tanggal dd-mm-yyyy
   * @returns
   * @description
   * Get Data Kegiatan Kelompok berdasarkan tanggal (format: dd-mm-yyyy)
   */
  async getKegiatan(tanggal: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<KelompokKegiatanType>
    >("get_kegiatan_kelompok", {
      tanggal,
    });
    return response.data;
  }
  /**
   *
   * @param eduId
   * @returns
   * @description
   * Get Data Peserta Kegiatan Kelompok berdasarkan eduId
   */
  async getPeserta(eduId: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<KelompokKegiatanType>
    >("get_peserta_kegiatan_kelompok", {
      eduId,
    });
    return response.data;
  }
  /**
   *
   * @param body
   * @returns
   * @description
   * #
   * Add Data Kegiatan Kelompok
   * fungsi ini bisa dipakai untuk create kegiatan dan update kegiatan dengan membawa parameter eduId di dalam body
   */
  async addKegiatan(body: KelompokKegiatanPayload) {
    const response = await this.parent.callEndpoint<
      DataObject<BPJSResponseSucess>
    >("add_kegiatan_kelompok", undefined, body);
    return response.data;
  }
  /**
   *
   * @param eduId
   * @returns
   * @description
   * Delete Data Kegiatan Kelompok berdasarkan eduId
   */
  async deleteKegiatan(eduId: string) {
    const response = await this.parent.callEndpoint<null>(
      "delete_kegiatan_kelompok",
      { eduId }
    );
    return response.data;
  }
  /**
   *
   * @returns
   * @description
   * keterangan untuk kode kelompok dan kode kegiatan
   */
  getKeterangan() {
    return {
      kdKelompok: [
        { kdProgram: "01", nmProgram: "Diabetes Melitus" },
        { kdProgram: "02", nmProgram: "Hipertensi" },
      ],
      kdKegiatan: [
        { kdProgram: "01", nmProgram: "Senam" },
        { kdProgram: "10", nmProgram: "Penyuluhan" },
        { kdProgram: "11", nmProgram: "Penyuluhan dan Senam" },
      ],
    };
  }
  /**
   *
   * @param body
   * @returns
   * @description
   * Add Data Peserta Kegiatan Kelompok
   */
  async addPesertaKegiatan(body: KelompokKegiatanPesertaPayload) {
    const response = await this.parent.callEndpoint<null>(
      "add_peserta_kegiatan_kelompok",
      undefined,
      body
    );
    return response.data;
  }
  /**
   *
   * @param eduId
   * @param noKartu
   * @returns
   * @description
   * Delete Data Peserta Kegiatan Kelompok berdasarkan eduId dan Nomor Kartu Peserta
   */
  async deletePesertaKegiatan(eduId: string, noKartu: string) {
    const response = await this.parent.callEndpoint<null>(
      "delete_peserta_kegiatan_kelompok",
      { eduId, noKartu }
    );
    return response.data;
  }
}
