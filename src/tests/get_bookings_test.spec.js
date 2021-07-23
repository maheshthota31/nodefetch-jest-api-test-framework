const helper = require("../helper/booking_api_helper")
const config = require("../config/testdata_config")

let response;
let requestBody;

describe("GET Bookings test", () => {

    it("get bookings by providing firstname and lastname", async () => {

        let url = config.url+"?";
        requestBody = {
            firstname: config.first_name,
            lastname: config.last_name
        }
        response = await helper.getBookings(url, requestBody);
        expect(response.status).toEqual(200);
    })

})