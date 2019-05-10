import React, { Component } from 'react';
import { getShopcarList } from 'api/shopcar';
import { connect } from 'react-redux';
import * as actions from 'store/actions/shopcar';
import { Link } from 'react-router-dom';
class Shopcar extends Component {
    componentDidMount() {
        this._getShopcarList()
    }
    _getShopcarList() {
        getShopcarList().then((res) => {
            const { update, shopcarList } = this.props;
            update(shopcarList)
        })
    }
    render() {
        const { shopcarList, minus, plus, total, summary,checked } = this.props;
        return <div className='shopcarWapper'>
            {
                shopcarList.length && shopcarList.map((item, index) => {
                    return <div key={index}>
                        <input type="checkbox" checked={item.isCheck} onChange={() => {
                            checked(index, shopcarList)
                        }} />
                        <dl>
                            <dt><img src={item.img} alt="" /></dt>
                            <dd>
                                <p>{item.tit}</p>
                                <p>{item.price}</p>
                                <p>
                                    <span onClick={() => {
                                        minus(index, shopcarList)
                                    }}>-</span>
                                    <span>{item.count}</span>
                                    <span onClick={() => {
                                        plus(index, shopcarList)
                                    }}>+</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                })
            }

            <div className='big'>
                <div className='total'>共有：{total}件</div>
                <div className='summary'>去结算：￥{summary}</div>
            </div>

            <div className='back'>
                <Link to='/list'>返回</Link>
            </div>
        </div>

    }
}
const mapStateToProps = (state) => {
    return state.ShopcarReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch(actions.update(payload))
        },
        plus(index, shopcarList) {
            shopcarList[index].count++;
            let tot = 0;
            let sum = 0;
            shopcarList.forEach((item, index) => {
                tot += item.count
                sum += item.count * item.price
            })
            dispatch(actions.total(tot))
            dispatch(actions.summary(sum))
            dispatch(actions.plus(shopcarList))
        },
        minus(index, shopcarList) {
            if (shopcarList[index].count < 1) return
            shopcarList[index].count--;
            let tot = 0;
            let sum = 0;
            shopcarList.forEach((item, index) => {
                tot += item.count
                sum += item.count * item.price
            })
            dispatch(actions.total(tot))
            dispatch(actions.summary(sum))
            dispatch(actions.plus(shopcarList))
        },
        checked(index,shopcarList){
            shopcarList[index].isCheck = !shopcarList[index].isCheck
            dispatch(actions.checked(shopcarList))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopcar)