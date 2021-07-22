const baseHelper = require("./base_api_helper")

exports.getBookings = async (url, requestBody) => {
    return await baseHelper.getApi(url, requestBody);
}

exports.postBooking = async (url, requestBody) => {
    return await baseHelper.postApi(url, requestBody);
}
