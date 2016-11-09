import React, {Component} from "react";
import {GoodsRow} from "./GoodsRow";
import {GoodsPriceAmountVertical}  from "./GoodsPriceAmountVertical";
import style from "../../css/GoodsUsage.css";
export default class GoodsUsage extends Component {
    render() {
        let props = this.props;
        let goodsItem = props.goodsItem;
        let usage = props.usage;
        let usages = [];
        if (typeof usage == "string") {
            usages.push(<li><span>{usage}</span></li>);
        } else if (typeof usage == "object") {
            for (var prop in usage) {
                if (usage.hasOwnProperty(prop)) {
                     usages.push(<li>{prop}:<span>{usage[prop]}</span></li>);
                }
            }
        }
        return <div>
            <GoodsRow{...props} >
                <GoodsPriceAmountVertical goodsItem={goodsItem}/>
            </GoodsRow>
            <ul>
                {usages}
            </ul>
            <div className={style.buttonParent}>
                {props.children}
            </div>
        </div>

    }
}