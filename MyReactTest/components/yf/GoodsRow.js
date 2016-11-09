import React,{Component} from 'react';
import styles from "../../css/GoodsRow.css";
import GoodsImg from "./GoodsImg";
export class GoodsRow extends Component{

    render(){
        let props = this.props;
        let {goodsItem,tag} = props;
        return (
            <div className={styles.divParent}>
                <GoodsImg  imgUrlHead={props.imgUrlHead} bordered={props.imgBordered} goodsCode={goodsItem.goodsCode}/>
                <div className={styles.goodsLeft}>
                    {tag?tag():null}<a className={styles.title}>{goodsItem.goodsTitle}</a>
                    {props.children}
                </div>
            </div>
        )
    }

}


