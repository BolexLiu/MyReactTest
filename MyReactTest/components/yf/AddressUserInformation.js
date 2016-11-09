import React, {Component} from 'react';
import styles from "../../css/AddressUserInformation.css";
export default class AddressUserInformation extends Component {
    handlerCheck(event) {
        this.props.onRowChecked();
    }
    handlerDelete(event) {
        this.props.onClickDelete();
    }

    render() {
        let {name, phone, address, Checked} = this.props;
        console.log(name);
        return <div>
            <div className={styles.userInfor}>
                <li><a>{name} </a><a>{phone}</a></li>
                <li><a>收货地址: </a><a>{address}</a></li>
            </div>
            <div>
                <div className={styles.parentH}>
                    <p><input value="设为默认" onClick={this.handlerCheck.bind(this)} checked={Checked}
                              type="checkbox"/>设为默认</p>
                    <button className={`${styles.deleteB} ${Checked ? styles.hide : null}`} onClick={this.handlerDelete.bind(this)}>
                        {/*<img src=""> </img>*/}
                        <img src="../res/de.svg" className={styles.deleteI}></img>
                        <span>删除</span>
                    </button>
                </div>
            </div>
        </div>
    }

}
AddressUserInformation.defaultProps = {
    Checked: false,   //是否默认选中
};