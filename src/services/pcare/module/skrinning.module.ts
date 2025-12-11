import { DataArray, DataPaginate } from "../../../types/global";
import {
  ScrinningDMPayload,
  ScrinningHTPayload,
  ScrinningPesertaPayload,
  ScrinningRekapPayload,
} from "../../../types/skrinning";
import { PcareService } from "../pcare.service";

export class SkrinningModule {
  constructor(private parent: PcareService) {}

  async getSkrinningRekap() {
    const response = await this.parent.callEndpoint<
      DataArray<ScrinningRekapPayload>
    >("scrinning_rekap");

    return response.data;
  }

  async getSkrinningPeserta(
    nomor_peserta: string,
    start: number,
    limit: number
  ) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ScrinningPesertaPayload>
    >("scrinning_peserta", {
      nomor_peserta,
      start,
      limit,
    });

    return response.data;
  }

  async getSkrinningDM(nomor_peserta: string, start: number, limit: number) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ScrinningDMPayload>
    >("scrinning_diabetes_mellitus", {
      nomor_peserta,
      start,
      limit,
    });

    return response.data;
  }

  async getSkrinningHT(nomor_peserta: string, start: number, limit: number) {
    const response = await this.parent.callEndpoint<
      DataPaginate<ScrinningHTPayload>
    >("scrinning_hipertensi", {
      nomor_peserta,
      start,
      limit,
    });

    return response.data;
  }
}
