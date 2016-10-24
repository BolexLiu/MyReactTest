/**
 * 商品列表
 */
var GoodsColumnListView = React.createClass({
    propTypes: {
        colunmType: React.PropTypes.number.isRequired,
        imgUrlHead: React.PropTypes.string.isRequired,
    },
    getInitialState: function () {
        return {
            goodsList: [
                {
                    time: "2016/10/18 17:14",
                    goodsCode: "6013464",
                    goodsTitle: "三九感冒",
                    goodsprice: "8.00",
                    amount: 2,
                },
                {
                    time: "2016/10/18 17:14",
                    goodsCode: "200275",
                    goodsTitle: "三鹿奶粉",
                    goodsprice: "10.00",
                    amount: 6,
                },

                {
                    time: "2016/10/18 17:14",
                    goodsCode: "003",
                    goodsTitle: "三聚氰胺",
                    goodsprice: "1.01",
                    amount: 8,

                },
                {
                    time: "2016/10/18 17:14",
                    goodsCode: "004",
                    goodsTitle: "双氧水",
                    goodsprice: "12.10",
                    amount: 1,

                }],
        }
    },
    changeHandle: function (i) {
        this.setState({
            goodsList: this.state.goodsList.map((item)=> {
                if (item.goodsCode === i) {
                    ++item.amount
                    return item
                }
                return item
            })
        })
    },
    render: function () {
        var colunmType = this.props.colunmType;
        var imgUrlHead = this.props.imgUrlHead;
        console.log(this.state.goodsList)
        return <ul className="listViewStyle">{
            this.state.goodsList.map((goodsItem)=> {
                return <GoodsColumnView onChangeCallBack={this.changeHandle} colunmType={colunmType}
                                        goodsItem={goodsItem} key={goodsItem.goodsCode}
                                        imgUrlHead={imgUrlHead}/>
            })
        }
        </ul>
    }
})
/**
 *商品列组件
 */
var GoodsColumnView = React.createClass({
        goodsDetails: function (event) {
            this.props.onChangeCallBack(this.props.goodsItem.goodsCode)
        },
        getDefaultProps: function () {
            return {
                imgUrlHead: 'http://yf-base.oss-cn-shenzhen.aliyuncs.com/product/'
            };
        },
        render: function () {
            var colunmType = this.props.colunmType;
            var imgurl = this.props.imgUrlHead + this.props.goodsItem.goodsCode + "/" + this.props.goodsItem.goodsCode + ".JPG";
            return (
                <div className="divParent" onClick={this.goodsDetails}>
                    <img className="goodsImg" src={imgurl}/>
                    <div className="goodsLeft">
                        <a className="title">{this.props.goodsItem.goodsTitle}</a>
                        <ShopInformationView colunmType={colunmType} goodsItem={this.props.goodsItem}/>
                    </div>
                </div>
            )
        }
    }
);
/**
 *
 * 价格+数量/申请时间父容器组件
 */
var ShopInformationView = React.createClass({
    render: function () {
        var inView = [];
        var colunmType = this.props.colunmType;
        if (colunmType !== 0) {
            if (colunmType === 3) {
                inView.push(< ApplyTimeView key={this.props.goodsItem.goodsCode + colunmType}
                                            time={this.props.goodsItem.time}/>);
            } else {
                inView.push(< PriceAmountView key={this.props.goodsItem.goodsCode + colunmType}
                                              goodsItem={this.props.goodsItem } colunmType={colunmType}/>);
            }
        }
        return (  <div >
            {inView}
        </div>  )
    }
})
/**
 * 申请时间
 */
function ApplyTimeView(props) {
    return <div>
        申请时间: {props.time}
    </div>;
}
/**
 * 价格和数量
 */
const PriceAmountView = (props)=> {
    var colunmType = props.colunmType;
    var Price = [];
    Price.push(<a key={props.goodsItem.goodsCode + 0}
                  className="Price">￥{props.goodsItem.goodsprice}</a>);
    if (colunmType === 1) {
        Price.push(<a key={props.goodsItem.goodsCode + 1}
                      className="Amount">数量:{props.goodsItem.amount}</a>);
    } else if (colunmType === 2) {
        Price.push(<a key={props.goodsItem.goodsCode + 2}
                      className="Amount">X{props.goodsItem.amount}</a>);
    }
    return <div className="PriceAmount">
        {Price}
    </div>;
};
var imgUrlHead = 'http://yf-base.oss-cn-shenzhen.aliyuncs.com/product/';
var myProps = {
    colunmType: 2,
    imgUrlHead: imgUrlHead,
}

ReactDOM.render(
    <div>
        <GoodsColumnListView {...myProps} />
    </div>
    , document.getElementById("container"));