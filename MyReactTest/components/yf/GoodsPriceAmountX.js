import React, {Component} from 'react';
import styles from "../../css/GoodsPriceAmount.css";
/*
 * 价格和数量
 */
export const GoodsPriceAmountX = (props)=> {
    let { goodsCode,goodsprice,amount}  = props.goodsItem;
    return <div className={styles.PriceAmount}>
        <a key={ goodsCode + 0}
           className={styles.Price}>￥{goodsprice}</a>
        <a key={goodsCode + 1}
           className={styles.Amount}>X{amount}</a>
    </div>;
};