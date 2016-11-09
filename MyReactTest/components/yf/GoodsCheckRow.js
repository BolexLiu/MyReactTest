import React, {Component} from 'react';
import {GoodsImg} from "./GoodsImg";
import styles from "../../css/GoodsCheckRow.css";
export class GoodsCheckRow extends Component{
    handlerCheck(event) {
        this.props.onRowChecked();
    }
    componentDidMount () {
    this.refs.goodsLabel.style.backgroundColor = this.props.labelcolor;
    }
    render(){
        let props = this.props;
        let goodsItem = props.goodsItem;
                return (
                    <div className={styles.divParent }>
                        <GoodsImg imgUrlHead={props.imgUrlHead} bordered={props.imgBordered} goodsCode={goodsItem.goodsCode}/>
                        <div className={styles.goodsLeft}>
                            <div className={styles.titleDiv}>
                                <a className={styles.label} ref="goodsLabel">{props.label}</a>
                                <a className={styles.title}>{goodsItem.goodsTitle}</a>
                            </div>
                            <a>剩余:3件</a>
                            <div className={styles.PriceAmount}>
                                <a key={goodsItem.goodsCode}
                                   className={styles.Price}>￥{goodsItem.goodsprice}</a>
                                <input className={styles.goodsCheckbox} onClick={this.handlerCheck.bind(this)} checked={props.goodsChecked}
                                       type="checkbox"/>
                            </div>
                        </div>
                    </div>
                )
        }
}
GoodsCheckRow.defaultProps={
    imgUrlHead: 'http://yf-base.oss-cn-shenzhen.aliyuncs.com/product/',  //默认图片地址
    labelcolor: "#3597FA",        //标签背景色
    label: "A",                   //标签
    goodsChecked: false,   //是否默认选中
 };
