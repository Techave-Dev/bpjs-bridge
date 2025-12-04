import { PcareService } from "../services/pcare/pcare.service";
import { PcareConfig } from "./config";

// Setup PcareService
const pcareService = new PcareService(PcareConfig);

describe("PcareService", () => {
  // Test untuk `getDiagnosa`
  it("should fetch diagnosa data", async () => {
    const response = await pcareService.getDiagnosa("r51", 0, 10);
    const mockResponse = {
      response: {
        count: 1,
        list: [
          {
            kdDiag: "R51",
            nmDiag: "Headache",
            nonSpesialis: true,
          },
        ],
      },
    };
    expect(response).toEqual(mockResponse.response);
  });
  it("should fetch diagnosa getAlergiJenis 01", async () => {
    const response = await pcareService.getAlergiJenis("01");
    const mockResponse = {
      response: {
        list: [
          {
            kdAlergi: "00",
            nmAlergi: "Tidak Ada",
          },
          {
            kdAlergi: "01",
            nmAlergi: "Seafood",
          },
          {
            kdAlergi: "02",
            nmAlergi: "Gandum",
          },
          {
            kdAlergi: "03",
            nmAlergi: "Susu Sapi",
          },
          {
            kdAlergi: "04",
            nmAlergi: "Kacang-Kacangan",
          },
          {
            kdAlergi: "05",
            nmAlergi: "Makanan Lain",
          },
        ],
      },
    };
    expect(response).toEqual(mockResponse.response);
  });
});
