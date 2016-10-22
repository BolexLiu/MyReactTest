var TestClickComponent = React.createClass({
    handleClick: function (event) {
        var tipE = React.findDOMNode(this.refs.tip);
        if (tipE.style.display === "none") {
            tipE.style.display = "inline";
        } else {
            tipE.style.display = "none"
        }
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handleClick}>显示隐藏</button>
                <span ref="tip">(o.o)</span>
            </div>


        )
    }
});

var TestInputComponent = React.createClass({
        getInitialState: function () {
            return {
                inputContent: ""
            }
        },
        ChangeHandle: function (event) {
            this.setState({
                inputContent: event.target.value

            })
        },
        render: function () {

            return (
                <div>
                    <input onChange={this.ChangeHandle} type="password"/>
                    <a >{this.state.inputContent}</a>
                </div>
            )
        }
    }
)
/**
 *商品列组件
 */
var GoodsColumnView = React.createClass({
        goodsDetails: function (event) {
            alert("跳转到详情页")
        },
        render: function () {
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
                    <img style={goodsImgStyle} src={this.props.imgsrc}/>
                    <div style={Object.assign({}, parentVStyle, divCenterStyle)}>
                        <a style={titleStyle}>{this.props.goodsTitle}</a>
                        <div style={Object.assign({alignItems: "center", justifyContent: "flex-start ",}, parentHStyle)}>
                            <a style={{color: "red", fontSize: "24px",}}>￥80.00</a>
                            <a style={{color: "#888", fontSize: "18px", paddingLeft: "100px"}}>数量:2</a>
                        </div>
                    </div>
                </div>
            )
        }
    }
);
/**
 * 商品列表
 */
var GoodsColumnListView = React.createClass({
    render: function () {
        var listViewStyle = {
            padding: "0px",
        };
        return <ul style={listViewStyle}>{
            this.props.goodsList.map(function (goodsItem) {
                return <GoodsColumnView goodsTitle={goodsItem.title} key={goodsItem.id} imgsrc={goodsItem.img}/>
            })
        }
        </ul>
    }
})

var GroceryList = React.createClass({
    handleClick: function (i) {
        console.log('You clicked: ' + this.props.items[i]);
    },

    render: function () {
        return (
            <div>
                {this.props.items.map(function (item, i) {
                    return (
                        <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
                    );
                }, this)}
            </div>
        );
    }
});

class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({liked: !this.state.liked});
    }
    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
        );
    }
}
var goodsList=[
    {
        id:"001",
        title: "三九感冒",
        img: "http://img.10000yao.com/upload/2012/1/19/912e20da-6039-46a6-9ec1-8e4043854214_600X600.jpg"
    },
    {   id:"002",title: "九芝堂", img: "http://s8.sinaimg.cn/middle/6cad6260gad06d155cca7&690"},
    {   id:"003",title: "黃連", img: "http://img.360kxr.com/product/20101118/B01007233_800x600.jpg"},
    {   id:"004",title: "解毒丸", img: "http://images02.818.com/11/94/11007194/500x500/A2.jpg"}];

ReactDOM.render(
    <div>
        <TestClickComponent />
        <br/>
        <TestInputComponent/>
        <GoodsColumnListView goodsList={goodsList}/>
        <GroceryList items={['Apple', 'Banana', 'Cranberry']}/>
        <LikeButton />
    </div>
    , document.getElementById("container"));