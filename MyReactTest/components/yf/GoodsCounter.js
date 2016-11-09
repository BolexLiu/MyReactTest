import React, {Component} from 'react';
import styles from "../../css/GoodsCounter.css";

/**
* Created by Bolex on 2016/10/25. 计数器控件
*/
export const GoodsCounter=(props)=>{
    return <div className={styles.counterParint}>
        <button className={styles.counterOperationLeft} onClick={props.onSub}>-</button>
        <input className={styles.counterInput} value={props.value} disabled="false" type="tel"/>
        <button className={styles.counterOperationRight} onClick={props.onAdd}>+</button>
    </div>
}
GoodsCounter.defaultProps={ value: 1};


/**
 * 另外的写法
 */
// export class GoodsCounter extends Component{
//     render(){
//         return <div className={styles.counterParint}>
//             <a className={styles.counterOperation} onClick={this.props.onSub}>-</a>
//             <input className={styles.counterInput} value={this.props.value} disabled="false" type="tel"/>
//             <a className={styles.counterOperation} onClick={this.props.onAdd}>+</a>
//         </div>
//     }
// }
// export function GoodsCounter(props) {
//     return <div className={styles.counterParint}>
//         <a className={styles.counterOperation} onClick={props.onSub}>-</a>
//         <input className={styles.counterInput} value={props.value} disabled="false" type="tel"/>
//         <a className={styles.counterOperation} onClick={props.onAdd}>+</a>
//     </div>
//
// }