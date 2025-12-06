export interface KelompokClubProlanisType {
  clubId: number;
  jnsKelompok: JnsKelompok;
  tglMulai: string;
  tglAkhir: any;
  alamat: string;
  nama: string;
  ketua_noHP: string;
  ketua_nama: string;
}

export interface KelompokKegiatanType {
  eduId: string;
  clubProl: ClubProl;
  tglPelayanan: string;
  kegiatan: Kegiatan;
  kelompok: Kelompok;
  materi: string;
  pembicara: string;
  lokasi: string;
  keterangan: string;
  biaya: number;
}

interface ClubProl {
  clubId: number;
  jnsKelompok: JnsKelompok;
  tglMulai: string;
  tglAkhir: any;
  alamat: string;
  nama: string;
  ketua_noHP: string;
  ketua_nama: string;
}

interface JnsKelompok {
  kdProgram: string;
  nmProgram: string;
}

interface Kegiatan {
  nama: string;
  kode: string;
}

interface Kelompok {
  nama: string;
  kode: string;
}

export interface PesertaKegiatanKelompok {
  eduId: string;
  peserta: Peserta;
}

interface Peserta {
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
  noHP: any;
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

export interface KelompokKegiatanPayload {
  eduId: any;
  clubId: number;
  tglPelayanan: string;
  kdKegiatan: string;
  kdKelompok: string;
  materi: string;
  pembicara: string;
  lokasi: string;
  keterangan: string;
  biaya: number;
}

export interface KelompokKegiatanPesertaPayload {
  eduId: string;
  noKartu: string;
}
