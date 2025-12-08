export interface PesertaPayload {
  noKartu: string;
  nama: string;
  hubunganKeluarga: string;
  sex: string;
  tglLahir: string;
  tglMulaiAktif: string;
  tglAkhirBerlaku: string;
  kdProviderPst: KdProviderPst;
  kdProviderGigi: KdProviderGigi;
  jnsKelas: JnsKelas;
  jnsPeserta: JnsPeserta;
  golDarah: string;
  noHP: string;
  noKTP: string;
  pstProl: string;
  pstPrb: string;
  aktif: boolean;
  ketAktif: string;
  asuransi: Asuransi;
  tunggakan: number;
}

interface KdProviderPst {
  kdProvider: string;
  nmProvider: string;
}

interface KdProviderGigi {
  kdProvider: any;
  nmProvider: any;
}

interface JnsKelas {
  nama: string;
  kode: string;
}

interface JnsPeserta {
  nama: string;
  kode: string;
}

interface Asuransi {
  kdAsuransi: any;
  nmAsuransi: any;
  noAsuransi: any;
  cob: boolean;
}
