import React, {Component} from 'react';
import {render} from 'react-dom';
import {GoodsCounter} from "../components/yf/GoodsCounter";
import {GoodsImg} from "../components/yf/GoodsImg";
import {GoodsCheckRow} from "../components/yf/GoodsCheckRow";
import {GoodsRow} from "../components/yf/GoodsRow";
import {ApplyTimeView}  from "../components/yf/GoodsApplyTime";
import {GoodsPriceAmount}  from "../components/yf/GoodsPriceAmount";
import {GoodsPriceAmountX}  from "../components/yf/GoodsPriceAmountX";
import {GoodsPriceAmountVertical}  from "../components/yf/GoodsPriceAmountVertical";
import {GoodsPriceUsageVertical}  from "../components/yf/GoodsPriceUsageVertical";
import GoodsUsage from "../components/yf/GoodsUsage";
import AddressUserInformation from "../components/yf/AddressUserInformation";
/**
 * 计数器用例
 */
class Parint extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1,}; //是否默认选中
    }

    sub() {
        this.setState({
            value: --this.state.value,
        });
    }

    add() {
        this.setState({
            value: ++this.state.value,
        });
    }

    render() {
        return <GoodsCounter value={this.state.value} onSub={this.sub.bind(this)} onAdd={this.add.bind(this)}/>
    }
}
let goodsItem = {
    time: "2016/10/18 17:14",
    goodsCode: "6013464",
    goodsTitle: "三九感冒",
    goodsprice: "8.00",
    amount: 2,
}
let goodsCheckRowProps = {
    goodsItem: goodsItem,
    imgUrlHead: "http://yf-base.img-cn-shenzhen.aliyuncs.com/product/",
    onRowChecked: ()=> {
        console.log("回掉了")
    },
    imgBordered: false,
}
let userInfor = {
    Checked: false,   //是否默认选中
    name: "米奇", phone: "12234213123", address: "住在黄土高坡",
    onRowChecked: ()=> {
        console.log("回掉了")
    },
    onClickDelete: ()=> {
        console.log("回掉了")
    }
}
render(
    <div>
        <Parint />
        {/*<GoodsImg goodsCode="6013464" bordered="true"/>*/}
        {/*<GoodsCheckRow  {...goodsCheckRowProps} key={goodsItem.goodsCode} label={"C"} labelcolor={"#fd65ea"}/>*/}
        <GoodsRow{...goodsCheckRowProps}
                 tag={()=><span>tagtag</span>}
                 key={goodsItem.goodsCode + 1}
        >
            <ApplyTimeView time={goodsItem.time}/>
        </GoodsRow>
        <GoodsRow{...goodsCheckRowProps} key={goodsItem.goodsCode + 2}>
            <GoodsPriceAmount goodsItem={goodsItem} key={goodsItem.goodsCode }/>
        </GoodsRow>
        <GoodsRow{...goodsCheckRowProps}>
            <GoodsPriceAmountVertical goodsItem={goodsItem} key={goodsItem.goodsCode}/>
        </GoodsRow>
        <GoodsRow{...goodsCheckRowProps} >
            <GoodsPriceUsageVertical goodsItem={goodsItem} key={goodsItem.goodsCode}/>
        </GoodsRow>
        <GoodsRow{...goodsCheckRowProps} key={goodsItem.goodsCode + 5}/>
        <GoodsUsage {...goodsCheckRowProps} key={goodsItem.goodsCode + 6} usage={{"用法": "吃", "用量": 20}}>
            <button>取消推荐</button>
            <button>修改用法用量</button>
        </GoodsUsage>
        <GoodsUsage {...goodsCheckRowProps} key={goodsItem.goodsCode + 7} usage={"吃掉他们吧"}>
        </GoodsUsage>
        <AddressUserInformation key={goodsItem.goodsCode + 8}  {...userInfor}/>
    </div>
    , document.getElementById('root'));