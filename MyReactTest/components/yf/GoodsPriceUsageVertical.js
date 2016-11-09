import React, {Component} from 'react';
import styles from "../../css/GoodsPriceAmountVertical.css";
/**
 * 价格和信息
 */
 export const GoodsPriceUsageVertical = (props)=> {
    let { goodsCode,goodsprice}  = props.goodsItem;
    return <div className={styles.PriceAmountVertical}>
        <a key={goodsCode + 0}
           className={styles.Price}>￥{goodsprice}</a>
        <a key={goodsCode + 1}
           className={styles.Amount}>请选择用法用量</a>
    </div>;
};