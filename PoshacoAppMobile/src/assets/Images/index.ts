export const images = {
    // logo: require('./sources/logo-icon-base.png'),
    logo: require('./logo.png'),
    delivery: require('./delivery.png'),
    producing: require('./producing.png'),
    // order status
    orderCanceled: require('./orderCanceled.png'),
    orderPending: require('./orderPending.png'),
    orderDelivered: require('./orderDelivered.png'),
    orderTransporting: require('./orderTransporting.png'),
    orderConfirmed: require('./orderConfirmed.png'),
    placeholder: require('./placeholder.png'),
    tabCreate: require('./tabCreate.png'),
    check: require('./check.png'),
    unCheck: require('./unCheck.png'),
    progressing: require('./progressing.png'),
    disCheck: require('./disCheck.png'),
    disUnCheck: require('./disUnCheck.png'),
    radioCheck: require('./radioCheck.png'),
    radioUnCheck: require('./radioUnCheck.png'),
    disRadioCheck: require('./disRadioCheck.png'),
    disRadioUnCheck: require('./disRadioUnCheck.png'),
    bgUser: require('./bgUser.png'),
    detailInfo: require('./detailInfo.png'),
    agencyInfo: require('./agencyInfo.png'),
    infoCircle: require('./infoCircle.png'),
    help: require('./help.png'),
    logOut: require('./logOut.png'),
    header: require('./header.png'),
    agency: require('./agency.png'),
    rating: require('./rating.png'),
    woodBold: require('./woodBold.png'),
    woodNormal: require('./woodNormal.png'),
    imgLogin: require('./image-login.png'),
};

export type ImageTypes = keyof typeof images;
