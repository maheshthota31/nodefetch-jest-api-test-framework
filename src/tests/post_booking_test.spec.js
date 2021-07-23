const helper = require("../helper/booking_api_helper")
const config = require("../config/testdata_config")

let response;
let requestBody;

describe("POST Booking test", () => {

    it("post booking by creating booking", async () => {

        requestBody = {
            firstname: config.first_name,
            lastname: config.last_name,
            totalprice : config.total_price,
            depositpaid : config.deposit_paid,
            bookingdates : {
                checkin : config.booking_dates.checkin,
                checkout : config.booking_dates.checkout
            },
            additionalneeds : config.additional_needs
        }
        response = await helper.postBooking(config.url, requestBody);
        expect(response.status).toEqual(200);
    })

})