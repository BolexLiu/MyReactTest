/**
 * 商品列表
 */
var GoodsColumnListView = React.createClass({

    getInitialState: function () {
        return {
            goodsList: [
                {
                    goodsCode: "6013464",
                    goodsTitle: "三九感冒",
                    goodsprice: "8.00",
                    amount: 2,
                },
                {
                    goodsCode: "200275",
                    goodsTitle: "三鹿奶粉",
                    goodsprice: "10.00",
                    amount: 6,
                },

                {
                    goodsCode: "003",
                    goodsTitle: "三聚氰胺",
                    goodsprice: "1.01",
                    amount: 8,

                },
                {
                    goodsCode: "004",
                    goodsTitle: "双氧水",
                    goodsprice: "12.10",
                    amount: 1,

                }],
        }
    },
    componentWillMount(){
        console.log("componentWillMount");

    },
    changeHandle: function (i) {
        this.setState({
            goodsList: this.state.goodsList.map( (item)=> {
                if (item.goodsCode === i) {
                    ++item.amount
                    return item
                }
                return item
            })
        })
    },
    render: function () {
        var listViewStyle = {
            padding: "0px",
        };
        var colunmType = this.props.colunmType;
        var imgUrlHead = this.props.imgUrlHead;
        console.log(this.state.goodsList)
        return <ul style={listViewStyle}>{
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
            var titleStyle = {
                color: "#444",
                fontSize: "20px",
                verticalAlign: "middle",
                lineHeight: "100px",
                justifyContent: "center ",
            };
            var goodsImgStyle = {
                padding: "10px",
                height: "100px",
                width: "100px",
            };
            var parentHStyle = {
                display: "flex",
                flexDirection: "row",

            }
            var parentVStyle = {
                display: "flex",
                flexDirection: "column",

            }
            var divParentStyle = {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start ",
                borderBottomStyle: "solid",
                borderBottomColor: "#1333",
                borderWidth: "1px",
            }
            var divCenterStyle = {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start ",
            }
            return (
                <div style={Object.assign({}, parentHStyle, divParentStyle)} onClick={this.goodsDetails}>
                    <img style={goodsImgStyle} src={imgurl}/>
                    <div style={Object.assign({}, parentVStyle, divCenterStyle)}>
                        <a style={titleStyle}>{this.props.goodsItem.goodsTitle}</a>
                        <PriceAmountView colunmType={colunmType} goodsItem={this.props.goodsItem}/>
                    </div>
                </div>
            )
        }
    }
);
/**
 *
 * 价格和数量组件
 */
var PriceAmountView = React.createClass({
    render: function () {
        var Price = [];
        var colunmType = this.props.colunmType;
        var parentHStyle = {
            display: "flex",
            flexDirection: "row",
        }
        if (colunmType !== 0) {
            Price.push(<a key={this.props.goodsItem.goodsprice + 1}
                          style={{color: "red", fontSize: "24px",}}>￥{this.props.goodsItem.goodsprice}</a>);
            if (colunmType === 1) {
                Price.push(<a key={this.props.goodsItem.goodsprice + 2} style={{
                    color: "#888",
                    fontSize: "18px",
                    paddingLeft: "100px"
                }}>数量:{this.props.goodsItem.amount}</a>);
            } else if (colunmType === 2) {
                Price.push(<a key={this.props.goodsItem.goodsprice + 2} style={{
                    color: "#888",
                    fontSize: "18px",
                    paddingLeft: "100px"
                }}>X{this.props.goodsItem.amount}</a>);
            }
        }
        return (  <div style={Object.assign({alignItems: "center", justifyContent: "flex-start ",}, parentHStyle)}>
            {Price}
        </div>  )

    }

})


var imgUrlHead = 'http://yf-base.oss-cn-shenzhen.aliyuncs.com/product/';


ReactDOM.render(
    <div>
        <GoodsColumnListView colunmType={1} imgUrlHead={imgUrlHead}/>
    </div>
    , document.getElementById("container"));