import { DataPaginate } from "../../../types/global";
import {
  FaskesRujukan,
  ReferensiKhususType,
  ReferensiSaranaType,
  ReferensiSpesialisType,
  ReferensiSubSpesialisType,
} from "../../../types/spesialis";
import { PcareService } from "../pcare.service";

export class SpesialisModule {
  constructor(private parent: PcareService) {}

  /**
   *
   * @returns
   * @description
   * Get Data Referensi Spesialis
   */
  async getRefSpesialis() {
    const response = await this.parent.callEndpoint<
      DataPaginate<ReferensiSpesialisType>
    >("referensi_spesialis");
    return response.data;
  }

  /**
   *
   * @param kdSpesialis dari getRefSpesialis()
   * @returns
   * @description
   * Get Data Referensi Sub Spesialis berdasarkan Kode Spesialis
   */
  async getRefSubSpesialis(kdSpesialis: string) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ReferensiSubSpesialisType>
    >("referensi_subspesialis", { kdSpesialis });
    return response.data;
  }

  /**
   *
   * @returns
   * @description
   * Get Data Referensi Sarana
   */
  async getRefSarana() {
    const response = await this.parent.callEndpoint<
      DataPaginate<ReferensiSaranaType>
    >("referensi_sarana");
    return response.data;
  }

  /**
   *
   * @returns
   * @description
   * Get Data Referensi Khusus
   */
  async getRefKhusus() {
    const response = await this.parent.callEndpoint<
      DataPaginate<ReferensiKhususType>
    >("referensi_khusus");
    return response.data;
  }

  /**
   *
   * @param kdSubSpesialis Kode Sub Spesialis
   * @param kdSarana Kode Sarana
   * @param tglEstRujuk Tanggal Estimasi Rujuk, format: dd-mm-yyyy
   * @returns
   * @description
   * Get Data Faskes Rujukan Khusus
   */
  async getFaskesRujukanSubSpesialis(
    kdSubSpesialis: string,
    kdSarana: string,
    tglEstRujuk: string
  ) {
    const response = await this.parent.callEndpoint<
      DataPaginate<FaskesRujukan>
    >("rujuk_subspesialis", { kdSubSpesialis, kdSarana, tglEstRujuk });
    return response.data;
  }

  /**
   * @param kdKhusus dari getRefKhusus()
   * @param noKartu
   * @param tglEstRujuk
   * @returns
   * @description
   * ###
   * ------
   * Fungsi : Get Data Faskes Rujukan Khusus ALIH RAWAT, HEMODIALISA, JIWA, KUSTA, TB-MDR, SARANA KEMOTERAPI, SARANA RADIOTERAPI, HIV-ODHA
   * ------
   */
  async getFaskesRujukanKhusus(
    kdKhusus: string,
    noKartu: string,
    tglEstRujuk: string
  ) {
    const response = await this.parent.callEndpoint<
      DataPaginate<FaskesRujukan>
    >("rujuk_khusus", { kdKhusus, noKartu, tglEstRujuk });
    return response.data;
  }

  /**
   *
   * @param kdKhusus dari getRefKhusus()
   * @param kdSubSpesialis dari getRefSubSpesialis()
   * @param noKartu
   * @param tglEstRujuk
   * @returns
   * @description
   * ###
   * ------
   * Fungsi : Get Data Faskes Rujukan Khusus THALASEMIA dan HEMOFILI
   * ------
   */
  async getFaskesRujukanKhususSubSpesialis(
    kdKhusus: string,
    kdSubSpesialis: string,
    noKartu: string,
    tglEstRujuk: string
  ) {
    const response = await this.parent.callEndpoint<
      DataPaginate<FaskesRujukan>
    >("rujuk_khusus_subspesialis", {
      kdKhusus,
      kdSubSpesialis,
      noKartu,
      tglEstRujuk,
    });
    return response.data;
  }
}
