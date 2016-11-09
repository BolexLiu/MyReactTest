import React, {Component} from 'react';
import style from "../../css/GoodsImg.css"
/**
 * 益丰图片
 */
  const GoodsImg=(props)=>{
    let imgUrlHead = props.imgUrlHead;
    let goodsCode = props.goodsCode;
    let  bordered = props.bordered;
    let imgurl =`${imgUrlHead}${goodsCode}/${goodsCode}a1.jpg`;
    return <img className={`${style.goodsImg} ${bordered?style.goodsImgborder:""}`} src={imgurl}/>;
}
export default GoodsImg
GoodsImg.defaultProps={ imgUrlHead: 'http://yf-base.img-cn-shenzhen.aliyuncs.com/product/'}
