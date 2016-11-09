import React, {Component} from 'react';
import styles from "../../css/GoodsPriceAmountVertical.css";
/**
 * 价格和数量
 */
 export const GoodsPriceAmountVertical = (props)=> {
    let { goodsCode,goodsprice,amount}  = props.goodsItem;
    return <div className={styles.PriceAmountVertical}>
        <a key={goodsCode + 0}
           className={styles.Price}>￥{goodsprice}</a>
        <a key={goodsCode + 1}
           className={styles.Amount}>数量:{amount}</a>
    </div>;
};