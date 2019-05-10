const defaultProps = {
    shopcarList: [{
        "name": "iPhoneXs Max",
        "price": 9288,
        "tit": "Apple 苹果 iPhone Xs 移动联通电信4G手机 深空灰 256GB",
        "img": "//img10.360buyimg.com/mobilecms/s117x117_jfs/t1/2666/14/3473/630382/5b9973afEa0a36a2b/31b203a2b7faf6aa.png.webp",
        "count": 0,
        "isCheck": false
    }],
    total: 0,
    summary: 0
}

const ShopcarReducers = (state = defaultProps, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE":
            return { ...state, shopcarList: payload }
        case "PLUS":
            return { ...state, shopcarList: [...payload] }
        case "MINUS":
            return { ...state, shopcarList: [...payload] }
        case "TOTAL":
            return { ...state, total: payload }
        case "SUMMARY":
            return { ...state, summary: payload }
        case "CHECKED":
            return { ...state, shopcarList: [...payload] }
        default: {
            return state
        }
    }
}

export default ShopcarReducers