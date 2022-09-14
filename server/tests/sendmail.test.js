const sendmail = require("../utils/sendmail.js");

const username = "Test User";
const testArr = [
  { name: "product1", quantity: 5 },
  { name: "product2", quantity: 10 },
  { name: "product3", quantity: 15 },
];

describe("sendemail", () => {
  it("email test", async () => {
    expect(
      await sendmail(
        `tonypoku@gmail.com`,
        "Test Email from MerncaveHQ",
        `<p>
        <h2>Hello ${username}</h2>
        <br>Thank you for shopping with us. We'll send a confirmation when your items have shipped
        <br><H2>Details:</H2>
        <hr>
        <ul>
          ${testArr.map((product) => "<li>" + product.name + "</li>")}
        </ul>
        </p>`
      )
    ).toBe("success");
  });
});
