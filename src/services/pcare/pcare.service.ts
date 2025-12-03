// src/services/PcareService.ts
import { FktpService } from "../fktp.service";

// Template untuk Service yang bisa dipakai secara dinamis
export class PcareService extends FktpService {
  constructor(config: any) {
    super(config);
  }
  // Contoh penggunaan: memanggil endpoint diagnosa
  async getDiagnosa(
    kodediag: string,
    start: number,
    limit: number
  ): Promise<any> {
    const response = await this.callEndpoint<DataArray<Diagnose>>("diagnosa", {
      kodediag,
      start,
      limit,
    });
    return response.data.response;
  }
}
