import React, { Component } from 'react';
import ShopRight from './shopRight';
import axios from 'axios';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopLeft: [],
            id: 0
        }
        this.getShopId = this.getShopId.bind(this)
    }
    componentDidMount() {
        axios.get('/getProudctLeft').then(res => {
            this.setState({
                shopLeft: res.data
            })
        })
    }
    getShopId(id) {
        this.setState({
            id: id
        })
    }
    render() {
        const { shopLeft, id } = this.state
        return <div className='shop_wapper'>
            <div className='shopLeft'>
                {
                    shopLeft.length && shopLeft.map((item, index) => {
                        return <ul key={index}>
                            <li onClick={() => { this.getShopId(index) }}>{item.title}</li>
                        </ul>
                    })
                }
            </div>
            <div className='shopRight'>
                <ShopRight id={id} />
            </div>

        </div>
    }
}

export default List