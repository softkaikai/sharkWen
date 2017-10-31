import React, {Component} from 'react';
import {Link} from 'react-router';
/*import {DocNav, DocContent, DocTitleLevel1,
DocTitleLevel2, DocP, DocTextLevel1, DocImg, DocTop} from './common/DocComponents';*/
import DocNav from './common/DocNav'
import DocContent from './common/DocContent'
import DocTitleLevel1 from './common/DocTitleLevel1'
import DocTitleLevel2 from './common/DocTitleLevel2'
import DocP from './common/DocP'
import DocTextLevel1 from './common/DocTextLevel1'
import DocImg from './common/DocImg'
import DocTop from './common/DocTop'
import DocCode from './common/DocCode'

const $ = require('jquery');

let nav = [
    {id: '#performance', name: '提高css性能'},
    {id: '#id2', name: 'css22222'},
    {id: '#id3', name: 'css33333'},
    {id: '#id4', name: 'css44444'}
];
class BitOperator extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            $('.doc__content').scroll(function() {
                for(let [index, val] of nav.entries()) {
                    let obj = $(val.id);
                    if(obj.offset().top < 150) {
                        let Objs = $('.doc__nav-a');
                        Objs.removeClass('doc__nav-a_active');
                        Objs.eq(index).addClass('doc__nav-a_active');
                    }
                }
            });
        }, 1000);
    }
    render() {
        return (
            <div className="doc">
                {/*置顶*/}
                <DocTop />
                <div className="doc__l">
                    <Link to="/">
                        <div className="doc__backToIndex">

                        </div>
                    </Link>
                    <div className="doc__name">
                        css优化☺
                    </div>
                    <DocNav nav={nav} />
                </div>
                <div className="doc__r">
                    <div className="doc__content">
                        <div className="doc__content-main">
                            <DocContent docId="performance">
                                <DocTitleLevel1 title="1.提高css性能" />
                                <DocTitleLevel2 title="如何提高css性能" />
                                <DocP>
                                    一般来说，提高css性能可以从以下两个方面着手处理。一方面，我们可以通过webpack,gulp等工具，对css代码进行去除空格，注释，压缩来减少css文件体积，合并css文件，利用缓存等方法来提高css的加载速度；另一方面，提高浏览器对css代码的解析速度。在这里，对于如何提高css加载速度，我就不做过多的阐述，以下主要说说自己对如何提高css代码的解析速度的理解。
                                </DocP>
                                <DocTitleLevel2 title="css选择器" />
                                <DocP>
                                    常用的css选择器有如下这些：<br/>
                                    <br/>
                                    1. Id选择器 比如#nav <br/>
                                    2. class类选择器 比如.router <br/>
                                    3. 元素选择器 比如 div <br/>
                                    4. 兄弟选择器 比如 div + p <br/>
                                    5. 子选择器 比如 div > p <br/>
                                    6. 后代选择器 比如 div p <br/>
                                    7. 属性选择器 比如 input[type="text"] <br/>
                                    8. 伪类/伪元素选择器 a:hover <br/>
                                </DocP>
                                <DocP>
                                    那么问题来了，这么多选择器，我们应该选择哪种才能得到高效解析速度的css代码呢。
                                </DocP>
                                <DocCode>
                                    {`.nav{color:#fff};
.nav{color:#fff};
.nav{color:#fff};
.nav{color:#fff};
.htmlKaikai{.....};
let name = 'jiejie';
let age = 22;
console.log(name, age) // jiejie 22
`}
                                </DocCode>
                                <DocP>
                                    <DocTextLevel1>Steve Sounders</DocTextLevel1>在
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/bit2.png" />
                                <DocP>
                                    奇数的二进制码的最后一位数肯定是1，而1只有最后一位为1，按位&操作之后，结果肯定只有最后一位数为1。而偶数的二进制表示的最后一位数是0，和1进行按位&操作，结果所有位数都为0。
                                </DocP>
                            </DocContent>

                            <DocContent docId="id2">
                                <DocTitleLevel1 title="2.| 按位或" />
                                <DocTitleLevel2 title="对浮点数向下求整" />
                                <DocP>
                                    说到向下取整，我们一般想到的是用Math.floor()，在这里给大家介绍另外一种方法——通过按位或来向下取整。
                                </DocP>
                                <DocP>
                                    当对正数向下取整的时候，两种方法得出的结果是一致的。但是当对负数取整的时候，得出的结果就不太一样了。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/bit3.png" />
                                <DocP>
                                    总的来说，Math.floor()向下取整是向更小的数靠近，而通过按位或取整则是向0靠近。
                                </DocP>
                            </DocContent>

                            <DocContent docId="id3">
                                <DocTitleLevel1 title="3.^ 按位异或" />
                                <DocTitleLevel2 title="按位异或" />
                                <DocP>
                                    如果我们需要调换两个变量的值，通常是这样做的。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/bit4.png" />
                                <DocP>
                                    如果你想装装逼的话，我们也可以这样。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/bit5.png" />
                                <DocP>
                                    但是我觉得这样的话，这个逼还是装的不够稳的。其实我们还可以像下面这样子，嘻嘻。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/bit6.png" />
                            </DocContent>

                            <DocContent docId="id4">
                                <DocTitleLevel1 title="4.~ 按位取反" />
                                <DocTitleLevel2 title="按位取反" />
                                <DocP>
                                    按位取反有一个经典的妙用，用来判断一个字符串是否包含另一个字符串。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/bit7.png" />
                            </DocContent>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BitOperator;