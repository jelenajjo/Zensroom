/*

Fragments on the Bookings collection

http://docs.vulcanjs.org/fragments.html

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment BookingsItemFragment on Booking {

    __typename
    _id
    createdAt
    endAt
    paidAt
    startAtFormatted
    endAtFormatted
    paidAtFormatted
    startAtFormattedShort
    endAtFormattedShort
    paidAtFormattedShort
    numberOfGuests
    status
    amount

    user {
      _id
      displayName
      emailHash
      slug
      pageUrl
    }

    room {
      _id
      pricePerNight
      name
      photos
      pageUrl
    }

  }  
`);
