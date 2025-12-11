export interface ScrinningRekapPayload {
  nama_penyakit: string;
  beresiko: number;
  tidak_beresiko: number;
}

export interface ScrinningPesertaPayload {
  nomor_peserta: string;
  nama: string;
  usia: number;
  no_hp: string;
  email: string;
  status_penyakit: StatusPenyakit;
}

interface StatusPenyakit {
  anemia: string;
  hepatitis_b: string;
  hepatitis_c: string;
  hipertensi_stroke_ischemic_heart_disease: string;
  kanker_paru: string;
  kanker_payudara: string;
  kanker_serviks: string;
  kolorektal: string;
  paru_obstruktif_kronis: string;
  penyakit_diabetes_mellitus: string;
  thalasemia: string;
  tuberkulosis: string;
}

export interface ScrinningDMPayload {
  nomor_peserta: string;
  nama: string;
  usia: number;
  jenis_kelamin: string;
  diagnosa_terakhir: string;
  status_prolanis: string;
}

export interface ScrinningHTPayload {
  nomor_peserta: string;
  nama: string;
  usia: number;
  jenis_kelamin: string;
  diagnosa_terakhir: string;
  status_prolanis: string;
}
