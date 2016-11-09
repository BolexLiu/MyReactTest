/**
 * 商品列表
 */
var GoodsRowListView = React.createClass({
    propTypes: {
        RowType: React.PropTypes.number.isRequired,
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
        var RowType = this.props.RowType;
        var imgUrlHead = this.props.imgUrlHead;
        console.log(this.state.goodsList)
        return <ul className="listViewStyle">{
            this.state.goodsList.map((goodsItem)=> {
                return <GoodsRowView onChangeCallBack={this.changeHandle} RowType={RowType}
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
var GoodsRowView = React.createClass({
        goodsDetails: function (event) {
            this.props.onChangeCallBack(this.props.goodsItem.goodsCode)
        },
        render: function () {
            var RowType = this.props.RowType;

            var inView = [];
            /**
             * 判断加载的类型
             */
            if (RowType !== 0) {
                if (RowType === 3) {
                    inView.push(< ApplyTimeView key={this.props.goodsItem.goodsCode + RowType}
                                                time={this.props.goodsItem.time}/>);
                } else {
                    inView.push(< PriceAmountView key={this.props.goodsItem.goodsCode + RowType}
                                                  goodsItem={this.props.goodsItem } RowType={RowType}/>);
                }
            }
            return (
                <div className="divParent" onClick={this.goodsDetails}>
                    <YFimg  imgUrlHead={this.props.imgUrlHead} goodsCode={this.props.goodsItem.goodsCode}/>
                    <div className="goodsLeft">
                        <a className="title">{this.props.goodsItem.goodsTitle}</a>
                        <ShopInformationView RowType={RowType} goodsItem={this.props.goodsItem}>
                            {inView}
                        </ShopInformationView>
                    </div>
                </div>
            )
        }
    }
);


/**
 * 益丰图片
 */
var YFimg = React.createClass({
    getDefaultProps: function () {
        return {
            imgUrlHead: 'http://yf-base.oss-cn-shenzhen.aliyuncs.com/product/'
        };
    },
    render: function () {
        let imgurl = this.props.imgUrlHead + this.props.goodsCode + "/" + this.props.goodsCode + ".JPG";
        return <img className="goodsImg" src={imgurl}/>
    }
});


/**
 *
 * 价格+数量/申请时间父容器组件
 */
var ShopInformationView = React.createClass({
    render: function () {
        return (  <div >{
            React.Children.map(this.props.children, function (child) {
                return <div>{child}</div>;
            })
        }
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
    var RowType = props.RowType;
    var Price = [];
    Price.push(<a key={props.goodsItem.goodsCode + 0}
                  className="Price">￥{props.goodsItem.goodsprice}</a>);
    if (RowType === 1) {
        Price.push(<a key={props.goodsItem.goodsCode + 1}
                      className="Amount">数量:{props.goodsItem.amount}</a>);
    } else if (RowType === 2) {
        Price.push(<a key={props.goodsItem.goodsCode + 2}
                      className="Amount">X{props.goodsItem.amount}</a>);
    }
    return <div className="PriceAmount">
        {Price}
    </div>;
};


var imgUrlHead = 'http://yf-base.oss-cn-shenzhen.aliyuncs.com/product/';
var myProps = {
    RowType: 2,
    imgUrlHead: imgUrlHead,
}

ReactDOM.render(
    <div>
        <GoodsRowListView {...myProps} />

    </div>
    , document.getElementById("container"));