import DonkiResponse from './../src/js/donkiResponse.js'

describe('DonkiResponse', () => {
  let testDonki;

  beforeEach(() =>{
    testDonki = new DonkiResponse();
  });

  test('show correctly return the message type of DonkiResponse', () => {
    expect(testDonki.messageType).toEqual("Report");
  });
  test('show correctly return the message id of DonkiResponse', () => {
    expect(testDonki.messageID).toEqual("20200318-7D-001");
  });
  test('show correctly return the message id of DonkiResponse', () => {
    expect(testDonki.messageURL).toEqual("https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/Alert/15393/1");
  });
});