import React, {Component} from 'react';
import {Link} from 'react-router';
/*import {DocNav, DocContent, DocTitleLevel1,
DocTitleLevel2, DocP, DocTextLevel1, DocImg, DocTop} from './common/DocComponents';*/
import DocNav from './common/DocNav'
import DocContent from './common/DocContent'
import DocTitleLevel1 from './common/DocTitleLevel1'
import DocTitleLevel2 from './common/DocTitleLevel2'
import DocTitleLevel3 from './common/DocTitleLevel3'
import DocP from './common/DocP'
import DocTextLevel1 from './common/DocTextLevel1'
import DocImg from './common/DocImg'
import DocTop from './common/DocTop'
import DocCode from './common/DocCode'
import DocLink from './common/DocLink'
import DocTextHeavy from './common/DocTextHeavy'

const $ = require('jquery');

let nav = [
    {id: '#performance', name: '提高css性能'},
    {id: '#maintain', name: '可维护、可复用css代码'},
    {id: '#bem', name: 'BEM'}
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
                                <DocP>
                                    快的页面渲染速度依赖于好的css代码。本质上，浏览器解析引擎解析css代码的规则越小，那么解析速度越快。特别重要的一点是，现代浏览器匹配css选择器的时候都是从右边开始匹配，然后持续往左移，直到找到匹配的。比如我们有一个选择器<DocTextLevel1>#menu li</DocTextLevel1>，我们想要做的是查找在id为menu的dom元素下的所有li元素。按照我们正常的思维来说，浏览器应该是先在页面中找到id为#menu的dom元素，然后再找这个dom元素下的所有li元素。但是事实刚好相反，记住<DocTextLevel1>从右的原则</DocTextLevel1>。实际上，浏览器会先找到所有的li元素，然后再看哪些li元素是#menu的子元素。
                                </DocP>
                                <DocP>而正是因为浏览器这样的解析规则，会带来潜藏的性能问题。</DocP>
                                <DocP>比如我们想干一件这样的事，找到导航菜单里面的所有字菜单的dom元素，代码结构如下</DocP>
                                <DocCode>
                                    {`<ul id="menu">
    <li>Home</li>
    <li>Contact</li>
    <li>Page</li>
    <li>Product</li>
    <li>Test</li>
</ul>
`}
                                </DocCode>
                                <DocP>
                                    此时我们会想到用这样一个选择器#menu li就可以达到我们的目的。但是根据浏览器对css的解析规则来看，浏览器会先找到页面中所有的li元素，然后再看哪些li元素是#menu的子元素。当页面中li元素比较少的时候，这样做并不会引起太大的性能问题，但是如果这个页面的li数量成百上千，甚至更多，那么这个选择器会带来很大的性能问题。因为子菜单li的数量只有5个，但是浏览器是先从右边解析的，所以浏览器不得不把所有li元素找出来，然后再找祖先元素是否含有id为#menu的元素，而这将带来极大的性能浪费。同时，这样将会带来另一个问题，css代码的复用和可维护性的问题，这个问题将在后面说到。
                                </DocP>
                                <DocP>
                                    那么对于这样的问题我们要如何解决呢？我们只需要在li上单独添加一个类名就可以了，比如：
                                </DocP>
                                <DocCode>
                                    {`<ul id="menu">
    <li class="menu-child">Home</li>
    <li class="menu-child">Contact</li>
    <li class="menu-child">Page</li>
    <li class="menu-child">Product</li>
    <li class="menu-child">Test</li>
</ul>
`}
                                </DocCode>
                                <DocP>
                                    这个时候我们要拿到子菜单就相当简单了，我们只需要#menu .menu-child就可以了，干脆#menu都可以不要了，直接.menu-child。这样浏览器就只用查找所有类名为.menu-child的li元素，而不用把所有li找出来，然后再看那些li元素是在#menu下面的子元素。
                                </DocP>
                                <DocP>
                                    那么为什么浏览器的解析规则是从右向左的呢，这点在 <DocLink to="https://stackoverflow.com/questions/5797014/why-do-browsers-match-CSS-selectors-from-right-to-left">stackoverflow</DocLink>上有相关的讨论，有兴趣的小伙伴可以去看看。
                                </DocP>
                                <DocP>
                                    综上所述，css的解析速度很大程度上取决于<DocTextLevel1>关键选择器</DocTextLevel1>，所谓的关键选择器就是：<DocTextHeavy>浏览器解析选择器为从右向左的顺序，最右端的元素是样式生效的元素，是为关键选择器。</DocTextHeavy>此外，不同的选择器的渲染速度也是不同的。其中最快的选择器是id选择器，其次是class选择器，再然后就是标签选择器。
                                </DocP>
                                <DocP>
                                    既然id选择器的渲染速度越快，我们写样式的时候是不是尽可能的多些用id呢？疯都疯了，一个稍微大点的页面都有上百个dom元素，那我不得给每个元素都起个id名啊。根据<DocTextLevel1>Steve Sounders</DocTextLevel1>在<DocTextLevel1>Even faster</DocTextLevel1>中介绍的，其实id选择器的渲染速度和class是相差不大，达到了几乎可以忽略的地步。所以，在页面中尽可能用class选择器，而id选择器通常来说是留给js使用的。
                                </DocP>
                            </DocContent>

                            <DocContent docId="maintain">
                                <DocTitleLevel1 title="2.可维护、可复用css代码" />
                                <DocTitleLevel2 title="常见的css问题" />
                                <DocP>
                                    在比较大的项目中，我们通常会遇到如下的一些问题：<br/><br/>
                                    <DocTextHeavy>
                                        1. css代码层级多，嵌套严重 <br/>
                                        2. 样式复用困难 <br/>
                                        3. 修改现有的css代码困难 <br/>
                                        4. css命名冲突 <br/>
                                        5. 无法通过类名看出html结构......
                                    </DocTextHeavy>
                                </DocP>
                                <DocP>
                                    接下来我们从下面的一些例子来看这些问题。
                                </DocP>
                                <DocP>
                                    现在我们有下面这样一个下拉菜单。
                                </DocP>
                                <DocCode>
                                    {`<ul class="menu-drop">
    <li class="menu-child">Home</li>
    <li class="menu-child">Contact</li>
    <li class="menu-child">Page</li>
    <li class="menu-child">Product</li>
    <li class="menu-child">Test</li>
</ul>
`}
                                </DocCode>
                                <DocP>
                                    好了，产品经理认为Home这个tab页很重要，需要在它前面单独添加一个icon。聪明的小伙伴们肯定很快就会想到下面的方法。
                                </DocP>
                                <DocCode>
                                    {`html
<ul class="menu-drop">
    <li class="menu-child"><span></span>Home</li>
    <li class="menu-child">Contact</li>
    <li class="menu-child">Page</li>
    <li class="menu-child">Product</li>
    <li class="menu-child">Test</li>
</ul>

css
.menu-drop .menu-child span {background:url(image/home-icon.jpg)......}
`}
                                </DocCode>
                                <DocP>
                                    我们直接在它前面加一个span标签，给它一个icon背景，成功完成目标，<DocTextLevel1>美滋滋</DocTextLevel1>。
                                </DocP>
                                <DocP>
                                    过了一会儿，产品经理又过来对着你嗷嗷叫了，说我们的下拉菜单不仅要有英文，还要有中文，而且英文要红色的，中文要黄色的。程序员：“好的，没问题”。没过多久我们就有下面修改过后的代码了。
                                </DocP>
                                <DocCode>
                                    {`html
<ul class="menu-drop">
    <li class="menu-child">
        <span></span>
        <span class="menu-red">Home</span>
        <span class="menu-yellow">首页</span>
    </li>
    <li class="menu-child">
        <span class="menu-red">Contact</span>
        <span class="menu-yellow">联系</span>
    </li>
    ......
</ul>

css
.menu-drop .menu-child span {background:url(image/home-icon.jpg)......}
.menu-drop .menu-child .menu-red {color: red}
.menu-drop .menu-child .menu-yellow {color: yellow}
`}
                                </DocCode>
                                <DocP>
                                    好了，完成。当我们信心满满打开浏览器查看时，傻眼了，每个span标签上都有一个icon的背景，而这个背景真是通过<DocTextLevel1>.menu-drop .menu-child span</DocTextLevel1>选择器加上去的。这就是说在<DocTextLevel1>.menu-drop .menu-child</DocTextLevel1>下的所有span标签都会加上一个icon的背景，如果我们还想继续在<DocTextLevel1>.menu-drop .menu-child</DocTextLevel1>下的其它地方使用span标签的话，我们必须要把这个icon的背景去掉。这将迫使我们把原本打算用的span标签换成其它的标签，<DocTextHeavy>极大程度上限制了我们对span标签的使用。</DocTextHeavy>
                                </DocP>
                                <DocP>
                                    既然问题出来了，我们要怎么解决呢？简单，直接给背景从新加个类名嘛，代码如下
                                </DocP>
                                <DocCode>
                                    {`html
<ul class="menu-drop">
    <li class="menu-child">
        <span class="menu-icon"></span>//修改的
        <span class="menu-red">Home</span>
        <span class="menu-yellow">首页</span>
    </li>
    <li class="menu-child">
        <span class="menu-red">Contact</span>
        <span class="menu-yellow">联系</span>
    </li>
    ......
</ul>

css
.menu-drop .menu-child .menu-icon {background:url(image/home-icon.jpg)......} //修改的
.menu-drop .menu-child .menu-red {color: red}
.menu-drop .menu-child .menu-yellow {color: yellow}
`}
                                </DocCode>
                                <DocP>
                                    问题完美解决。但是过了几天后，被猪儿供的嗷嗷叫的产品又来找你说，某个地方要加个和home一样的图标icon。聪明的你一定会想到，我直接把原来写的类名放过去不久完了。但是这个时候你会发现，如果要使用<DocTextLevel1>.menu-icon</DocTextLevel1>这个类名，我还必须把<DocTextLevel1>.menu-drop .menu-child</DocTextLevel1>这两个类名带上，最后的代码可能是这样的。
                                </DocP>
                                <DocCode>
                                    {`html
<div class="menu-drop">
    <div class="menu-child">
        <span class="menu-icon"></span>
        ......
    </div>
</div>
`}
                                </DocCode>
                                <DocP>
                                    这样看起来真的丑，而且还多了两个无用的div标签。一不做二不休，从新写个类名好了，于是又有了如下的代码。
                                </DocP>
                                <DocCode>
                                    {`css
.menu-icon-new {background:url(image/home-icon.jpg)......} //修改的
`}
                                </DocCode>
                                <DocP>
                                    但是这样又有一个问题，<DocTextLevel1>.menu-icon-new</DocTextLevel1>和<DocTextLevel1>.menu-icon</DocTextLevel1>的内容是一样的，这样代码不就冗余了吗。所以我们最好的办法就是把<DocTextLevel1>.menu-icon</DocTextLevel1>提出来，不要嵌套在<DocTextLevel1>.menu-drop .menu-child</DocTextLevel1>里面。
                                </DocP>
                                <DocP>
                                    假如，现在我们还有需求说，当下拉菜单的tab页被选中的时候，字体颜色全都变成白色，而我们正好有一个类名<DocTextLevel1>.white</DocTextLevel1>，稍微修改下代码
                                </DocP>
                                <DocCode>
                                    {`html
<ul class="menu-drop">
    <li class="menu-child">
        <span class="menu-icon"></span>
        <span class="menu-red">Home</span>
        <span class="menu-yellow">首页</span>
    </li>
    <li class="menu-child active">
        <span class="menu-red white">Contact</span>
        <span class="menu-yellow white">联系</span>
    </li>
    ......
</ul>

css
.menu-drop .menu-child .menu-icon {background:url(image/home-icon.jpg)......}
.menu-drop .menu-child .menu-red {color: red}
.menu-drop .menu-child .menu-yellow {color: yellow}
`}
                                </DocCode>
                                <DocP>
                                    这时你会发现<DocTextLevel1>.white</DocTextLevel1>这个类名没有起到作用，找了半天你才发现它的优先级没有<DocTextLevel1>.menu-drop .menu-child .menu-red</DocTextLevel1>高。为了使<DocTextLevel1>.white</DocTextLevel1>获得更高的优先级，我们不得不给它加上<DocTextLevel1>!important</DocTextLevel1>.
                                </DocP>
                                <DocTitleLevel3 title="无标签、无层级" />
                                <DocP>
                                    通过上面的例子可以发现，引发这一系列的问题基本上都是层级嵌套过多导致的。<DocTextHeavy>层级嵌套过多，大量使用标签选择器，都会导致css代码难以维护、难以复用，同时还会降低css的解析速度。</DocTextHeavy>
                                </DocP>
                                <DocP>
                                    所以，对于css的命名，层级越大，标签越多，渲染的开销也就越大，特别是当项目非常大的时候，效果非常明显。这也就是我为什么一直强调要<DocTextLevel1>无标签、无层级。</DocTextLevel1>
                                </DocP>
                                <DocTitleLevel3 title="无ID" />
                                <DocP>
                                    其实id跟性能和css代码维护性没有太多关系，只是id选择器大多跟js代码挂钩，为了怕在牵连到css，于是就禁止在css中使用id。
                                </DocP>
                                <DocTitleLevel3 title="命名冲突" />
                                <DocP>
                                    在上面我们说到要<DocTextLevel1>无标签、无层级、无ID</DocTextLevel1>，但是这样做会带来一个潜在的问题——命名冲突。对于大的项目来如说，更应该注意这个问题。功能类似的模块越多，起的类名越多，就越容易造成命名冲突。而<DocTextLevel1>BEM</DocTextLevel1>正是解决这个问题很好的一个css规范。
                                </DocP>
                            </DocContent>

                            <DocContent docId="bem">
                                <DocTitleLevel1 title="3.BEM" />
                                <DocTitleLevel2 title="什么是BEM" />
                                <DocP>
                                    BEM是一家俄罗斯的著名互联网企业的开发团队提出的前端开发理论。<DocTextHeavy>BEM代表块（Block），元素（Element），修饰符（Modifier）。</DocTextHeavy>
                                </DocP>
                                <DocP>
                                    <DocTextHeavy>Block</DocTextHeavy>是页面中独立存在的区块，可以在不同场合下被重用。每个页面都可以看做是多个Block组成。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bem/block.jpg" />
                                <DocP>
                                    <DocTextHeavy>Element</DocTextHeavy>是构成Block的元素，只有在对应Block内部才具有意义，是依赖于Block的存在。
                                </DocP>
                                <DocImg imgUrl="http://ovegl1dz1.bkt.clouddn.com/monday/bem/element.jpg" />
                                <DocP>
                                    <DocTextHeavy>Modifier</DocTextHeavy>是描述Block或Element的属性或状态。同一Block或Element可以有多个Modifier。
                                </DocP>
                                <DocP>
                                    BEM详细的介绍请点击这里<DocLink to="http://www.w3cplus.com/css/bem-definitions.html">这里</DocLink>
                                </DocP>
                                <DocTitleLevel2 title="BEM要解决的问题" />
                                <DocTitleLevel3 title="解决样式冲突问题" />
                                <DocP>
                                    BEM解决这个问题的思路在于，在整个项目开发过程中，每个模块（block）或者说每个组件都是独一无二的，所以其名字也是独一无二的。模块里面的元素（element）名字都是以模块名字开头的，并用元素名字作为选择器，通过模板的唯一性来保证选择器的唯一性，从而解决样式的冲突问题。
                                </DocP>
                                <DocP>
                                    <DocTextHeavy>BEM的命名规则：</DocTextHeavy>模块名 + 元素名 + 修饰器名。至于名字之间用什么来连接，请随意。<br/>
                                    我个人比较喜欢下面的连接方式。 <br/>
                                    <DocTextLevel1>__ </DocTextLevel1>双下划线用于连接模块名和元素名
                                    <br/>
                                    <DocTextLevel1>_ </DocTextLevel1>单下划线用于连接元素名和修饰器名。<br/>
                                    于是就有了这样的类名<DocTextLevel1>.page__list_active</DocTextLevel1>
                                </DocP>
                                <DocTitleLevel3 title="解决见名知其意的问题" />
                                <DocP>
                                    我们在写css代码的时候，通常会写明注释这个是干嘛用的，方便别人看。比如我就单独写了一个类名叫<DocTextLevel1>.list</DocTextLevel1>的，然后啥子注释也没写，鬼才知道你这个类名干毛线用的啊。如果我们用BEM来命名的话，就会得到这样一个类名<DocTextLevel1>.page__list</DocTextLevel1>，那我就知道这个类名是用来修饰模块page下面的列表的。如果我再个这个类名加一个状态的话<DocTextLevel1>.page__list_active</DocTextLevel1>，那我就知道这是用来修饰模块page下面被激活的列表状态的。
                                </DocP>
                                <DocTitleLevel2 title="BEM要注意的问题" />
                                <DocTitleLevel3 title="只能有一个元素名" />
                                <DocP>
                                    对于不熟悉BEM的小伙伴，刚刚开始可能会写出如下的代码：
                                </DocP>
                                <DocCode>
                                    {`<ul class="page">
    <li class="page__list">
        <a href="..." class="page__list__link">
            <span class="page__list__link__icon"></span>
        </a>
    </li>
</ul>
`}
                                </DocCode>
                                <DocP>
                                    而这其中<DocTextLevel1>page__list__link</DocTextLevel1>和<DocTextLevel1>page__list__link__icon</DocTextLevel1>都是不正确的。BEM的命名只包含三个部分，模块、元素和修饰器，其中元素只能有一个，不能出现诸如B__E__E__E......这种多个的情况。
                                </DocP>
                                <DocP>
                                    其次，有悖BEM思想，BEM是不考虑结构的，比如上面的分页按钮，即使它是在ul列表里面，它的命名也不应该考虑其父级元素。当我们遵循了这个规定，无论父元素名发生改变，或是模块构造发生的改变，还是元素之间层级关系互相变动，这些都不会影响元素的名字。
                                </DocP>
                                <DocP>
                                    所以即使需求变动了，分页组件该有按钮还是要有按钮的，DOM构造发生变动，至多也就不同元素的增删减，模块内名称也随之增删减，而不会出现修改名字的情况，也就不会因为名字变动，牵涉到JS文件的修改，或样式文件的修改。
                                </DocP>
                                <DocTitleLevel3 title="禁止有子选择器" />
                                <DocP>
                                    BEM要求禁止子选择器，也就是上面我们所讲的<DocTextLevel1>无层级</DocTextLevel1>。
                                </DocP>
                                <DocP>
                                    子选择器会造成层级过大，逻辑不清晰，想当十分不利于维护，同时还会造成选择器权重过大的问题。如果我们后来要修改它的样式的话，只能不断增加额外的类名来增加权重。<DocTextHeavy>可想而知，此后这个样式文件的维护难度就像雪球一样，越滚越大。</DocTextHeavy>
                                </DocP>

                                <DocTitleLevel2 title="BEM命名过长的问题" />
                                <DocP>
                                    从BEM的命名规则我们可以看出来，BEM是有B,E,M三者的名字组合而成，所以不可避免的造成类名很长，如果放在html页面中的话就是这样的效果：
                                </DocP>
                                <DocCode>
                                    {`<ul class="product-page">
    <li class="product-page__food-list  product-page__food-list_active"></li>
    <li class="product-page__food-list"></li>
</ul>
`}
                                </DocCode>
                                <DocP>
                                    这样就会使得html代码看起来十分的<DocTextHeavy>臃肿，同时又增加的文件体积，增加了写选择器的麻烦</DocTextHeavy>。从这几个方面来看，BEM有它自身的不足。但是BEM带给我们的代码的可维护性、可复用性来说，这些缺点都不是问题，特别是对于大项目来说，代码的可维护性和可复用性显得格外的重要。再加上现象压缩技术，BEM所带来的文件体积增加完全可以忽略不计。
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