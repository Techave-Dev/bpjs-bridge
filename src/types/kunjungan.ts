export interface RiwayatKunjunganType {
  noKunjungan: string;
  tglKunjungan: string;
  providerPelayanan: ProviderPelayanan;
  peserta: Peserta;
  poli: Poli;
  progProlanis: ProgProlanis;
  keluhan: string;
  diagnosa1: Diagnosa1;
  diagnosa2: Diagnosa2;
  diagnosa3: Diagnosa3;
  kesadaran: Kesadaran;
  sistole: number;
  diastole: number;
  beratBadan: number;
  tinggiBadan: number;
  respRate: number;
  heartRate: number;
  catatan: string;
  rujukBalik: number;
  providerAsalRujuk: ProviderAsalRujuk;
  providerRujukLanjut: ProviderRujukLanjut;
  pemFisikLain: string;
  dokter: Dokter;
  statusPulang: StatusPulang;
  tkp: Tkp;
  poliRujukInternal: PoliRujukInternal;
  poliRujukLanjut: PoliRujukLanjut;
  tglPulang: string;
}

interface ProviderPelayanan {
  kdProvider: string;
  nmProvider: string;
}

interface Peserta {
  noKartu: string;
  nama: any;
  hubunganKeluarga: string;
  sex: any;
  tglLahir: any;
  tglMulaiAktif: any;
  tglAkhirBerlaku: any;
  kdPpkPst: any;
  kdPpkGigi: any;
  jnsKelas: any;
  jnsPeserta: any;
  golDarah: any;
  noHP: any;
  noKTP: any;
  asuransi: any;
}

interface Poli {
  kdPoli: string;
  nmPoli: string;
  poliSakit: boolean;
}

interface ProgProlanis {
  kdProgram: string;
  nmProgram: string;
}

interface Diagnosa1 {
  kdDiag: string;
  nmDiag: string;
  nonSpesialis: boolean;
}

interface Diagnosa2 {
  kdDiag: any;
  nmDiag: any;
  nonSpesialis: boolean;
}

interface Diagnosa3 {
  kdDiag: any;
  nmDiag: any;
  nonSpesialis: boolean;
}

interface Kesadaran {
  kdSadar: string;
  nmSadar: string;
}

interface ProviderAsalRujuk {
  kdProvider: string;
  nmProvider: any;
}

interface ProviderRujukLanjut {
  kdProvider: string;
  nmProvider: string;
}

interface Dokter {
  kdDokter: string;
  nmDokter: string;
}

interface StatusPulang {
  kdStatusPulang: string;
  nmStatusPulang: string;
}

interface Tkp {
  kdTkp: string;
  nmTkp: string;
}

interface PoliRujukInternal {
  kdPoli: any;
  nmPoli: any;
  poliSakit: boolean;
}

interface PoliRujukLanjut {
  kdPoli: string;
  nmPoli: string;
  poliSakit: boolean;
}

//

export interface KunjunganRujukanType {
  noRujukan: string;
  ppk: Ppk;
  tglKunjungan: string;
  poli: Poli;
  nokaPst: string;
  nmPst: string;
  tglLahir: string;
  pisa: string;
  ketPisa: string;
  sex: string;
  diag1: Diag1;
  diag2: any;
  diag3: any;
  catatan: string;
  dokter: Dokter;
  tacc: Tacc;
  infoDenda: string;
}

interface Ppk {
  kdPPK: string;
  nmPPK: string;
  alamat: any;
  kc: Kc;
}

interface Kc {
  kdKC: string;
  nmKC: string;
  alamat: any;
  telp: any;
  fax: any;
  dati: Dati;
  kdKR: KdKr;
}

interface Dati {
  kdProp: any;
  kdDati: string;
  nmDati: string;
}

interface KdKr {
  kdKR: string;
  nmKR: string;
  alamat: any;
  telp: any;
  fax: any;
}

interface Poli {
  kdPoli: string;
  nmPoli: string;
}

interface Diag1 {
  kdDiag: string;
  nmDiag: string;
}

interface Dokter {
  kdDokter: string;
  nmDokter: string;
}

interface Tacc {
  nmTacc: any;
  alasanTacc: any;
}

export interface KunjunganPayload {
  noKunjungan: any;
  noKartu: string;
  tglDaftar: string;
  kdPoli: any;
  keluhan: string;
  kdSadar: string;
  sistole: number;
  diastole: number;
  beratBadan: number;
  tinggiBadan: number;
  respRate: number;
  heartRate: number;
  lingkarPerut: number;
  kdStatusPulang: string;
  tglPulang: string;
  kdDokter: string;
  kdDiag1: string;
  kdDiag2: any;
  kdDiag3: any;
  kdPoliRujukInternal: any;
  rujukLanjut?: RujukLanjut;
  kdTacc: 0 | "-1" | "1" | "2" | "3" | "4";
  alasanTacc: string | null;
  anamnesa: string;
  alergiMakan: string;
  alergiUdara: string;
  alergiObat: string;
  kdPrognosa: string;
  terapiObat: string;
  terapiNonObat: string;
  bmhp: string;
  suhu: string;
}

interface RujukLanjut {
  tglEstRujuk: string;
  kdppk: string;
  subSpesialis?: SubSpesialis;
  khusus?: Khusus;
}

interface Khusus {
  kdKhusus: string;
  kdSubSpesialis: any;
  catatan: string;
}

interface SubSpesialis {
  kdSubSpesialis1: string;
  kdSarana: any;
}

export interface KunjunganType {
  field: string;
  message: string;
}
