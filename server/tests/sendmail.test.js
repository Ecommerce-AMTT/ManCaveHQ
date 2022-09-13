const sendmail = require("../utils/sendmail.js");

describe("sendemail", () => {
  it("email test", async () => {
    expect(
      await sendmail(
        "tonypoku@gmail.com",
        "Test Email from MerncaveHQ",
        "jest testing..."
      )
    ).toBe("success");
  });
});
