export interface PendaftaranByNomorUrutType {
  noUrut: string;
  tgldaftar: string;
  providerPelayanan: ProviderPelayanan;
  peserta: Peserta;
  poli: Poli;
  keluhan: string;
  status: string;
  sistole: number;
  diastole: number;
  beratBadan: number;
  tinggiBadan: number;
  respRate: number;
  heartRate: number;
  tkp: Tkp;
}

interface ProviderPelayanan {
  kdProvider: string;
  nmProvider: string;
}

interface Peserta {
  noKartu: string;
  nama: string;
  hubunganKeluarga?: string;
  sex: string;
  tglLahir: string;
  tglMulaiAktif?: string;
  tglAkhirBerlaku?: string;
  kdProviderPst?: KdProviderPst;
  kdProviderGigi?: KdProviderGigi;
  jnsKelas?: JnsKelas;
  jnsPeserta?: JnsPeserta;
  golDarah?: string;
  noHP?: string;
  noKTP?: string;
  aktif: boolean;
  ketAktif?: string;
  asuransi?: Asuransi;
}

interface KdProviderPst {
  kdProvider: string;
  nmProvider: string;
}

interface KdProviderGigi {
  kdProvider: string;
  nmProvider: string;
}

interface JnsKelas {
  kode: string;
  nama: string;
}

interface JnsPeserta {
  kode: string;
  nama: string;
}

interface Asuransi {
  kdAsuransi: string;
  nmAsuransi: string;
  noAsuransi: string;
}

interface Poli {
  kdPoli: string;
  nmPoli: string;
}

export interface PendaftaranByProvider {
  noUrut: string;
  tgldaftar: string;
  providerPelayanan: any;
  peserta: Peserta;
  poli: Poli;
  keluhan: string;
  kunjSakit: boolean;
  status: string;
  sistole: number;
  diastole: number;
  beratBadan: number;
  tinggiBadan: number;
  respRate: number;
  heartRate: number;
  tkp: Tkp;
}

interface Poli {
  kdPoli: string;
  nmPoli: string;
  poliSakit: boolean;
}

interface Tkp {
  kdTkp: string;
  nmTkp: string;
}

export interface PendaftaranPayload {
  kdProviderPeserta: string;
  tglDaftar: string;
  noKartu: string;
  kdPoli: string;
  keluhan: any;
  kunjSakit: boolean;
  sistole: number;
  diastole: number;
  beratBadan: number;
  tinggiBadan: number;
  respRate: number;
  lingkarPerut: number;
  heartRate: number;
  rujukBalik: number;
  kdTkp: string;
}
