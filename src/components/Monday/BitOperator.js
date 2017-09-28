import React, {Component} from 'react';
import {Link} from 'react-router';
import DocNav from './common/DocNav'
import DocContent from './common/DocContent'
import DocTitleLevel1 from './common/DocTitleLevel1'
import DocTitleLevel2 from './common/DocTitleLevel2'
import DocP from './common/DocP'
import DocTextLevel1 from './common/DocTextLevel1'
import DocImg from './common/DocImg'
import DocTop from './common/DocTop'

const $ = require('jquery');

let nav = [
    {id: '#id1', name: '& 按位与1'},
    {id: '#id2', name: '& 按位与2'},
    {id: '#id3', name: '& 按位与3'},
    {id: '#id4', name: '& 按位与4'}
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
                        js位运算符妙用☺
                    </div>
                    <DocNav nav={nav} />
                </div>
                <div className="doc__r">
                    <div className="doc__content">
                        <div className="doc__content-main">
                            <DocContent docId="id1">
                                <DocTitleLevel1 title="1.这就是一个测试" />
                                <DocTitleLevel2 title="这就是一个测试" />
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，<DocTextLevel1>如果没有</DocTextLevel1>则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test1.png" />
                                <DocP>
                                    上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到100毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象，所以输出的是42。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test2.png" />
                                <DocP>
                                    箭头函数有几个使用注意点。
                                </DocP>
                                <DocP>
                                    （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                                <DocP>
                                    （2）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                            </DocContent>

                            <DocContent docId="id2">
                                <DocTitleLevel1 title="2.这就是一个测试" />
                                <DocTitleLevel2 title="这就是一个测试" />
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，<DocTextLevel1>如果没有</DocTextLevel1>则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test1.png" />
                                <DocP>
                                    上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到100毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象，所以输出的是42。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test2.png" />
                                <DocP>
                                    箭头函数有几个使用注意点。
                                </DocP>
                                <DocP>
                                    （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                                <DocP>
                                    （2）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                            </DocContent>

                            <DocContent docId="id3">
                                <DocTitleLevel1 title="3.这就是一个测试" />
                                <DocTitleLevel2 title="这就是一个测试" />
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，<DocTextLevel1>如果没有</DocTextLevel1>则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test1.png" />
                                <DocP>
                                    上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到100毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象，所以输出的是42。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test2.png" />
                                <DocP>
                                    箭头函数有几个使用注意点。
                                </DocP>
                                <DocP>
                                    （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                                <DocP>
                                    （2）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                            </DocContent>

                            <DocContent docId="id4">
                                <DocTitleLevel1 title="4.这就是一个测试" />
                                <DocTitleLevel2 title="这就是一个测试" />
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，<DocTextLevel1>如果没有</DocTextLevel1>则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocP>
                                    上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test1.png" />
                                <DocP>
                                    上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到100毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象，所以输出的是42。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bitOperator/test2.png" />
                                <DocP>
                                    箭头函数有几个使用注意点。
                                </DocP>
                                <DocP>
                                    （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                                <DocP>
                                    （2）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
                                </DocP>
                            </DocContent>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BitOperator;