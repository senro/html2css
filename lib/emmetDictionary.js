﻿/**
 * Created with JetBrains WebStorm.
 * User: qiuyun
 * Date: 13-12-27
 * Time: 下午3:52
 * To change this template use File | Settings | File Templates.
 */
var defaultConfig={
    indent:'    ',
    imgUrl:'../images/',
    unit:'px',
    template:
    '/*this css is exported by html2css(http://senro.cn/html2css)*/\r\n'+
    'body{\r\n'+
    '    background-color: #fff;\r\n'+
    '    font: 12px/1.5 "microsoft yahei", "宋体","simhei", tahoma, arial, sans-serif;\r\n'+
    '}\r\n'
};
var defaultKey={
    fl:'float: left',
    fr:'float: right',
    cl:'clear: both',
    bg:'background: url(../images/) no-repeat',
    ov:'overflow: hidden',
    m0a:'margin: 0 auto',
    va:'vertical-align: top',
    tj:'text-justify: auto',
    lis:'list-style: none',
    tc:'text-align: center'
};
var propKey={
    fl:{
        name:'float',
        keywords:{
            n:'none',
            l:'left',
            r:'right'
        }
    },
    cl:{
        name:'clear',
        keywords:{
            b:'both',
            l:'left',
            r:'right',
            n:'none'
        }
    },
    w:{
        name:'width',
        keywords:{
            a:'auto'
        }
    },
    mw:{
        name:'min-width',
        keywords:{
            a:'auto'
        }
    },
    h:{
        name:'height',
        keywords:{
            a:'auto'
        }
    },
    m:{
        name:'margin',
        keywords:{
            a:'auto'
        }
    },
    ml:{
        name:'margin-left',
        keywords:{
            a:'auto'
        }
    },
    mr:{
        name:'margin-right',
        keywords:{
            a:'auto'
        }
    },
    mt:{
        name:'margin-top',
        keywords:{
            a:'auto'
        }
    },
    mb:{
        name:'margin-bottom',
        keywords:{
            a:'auto'
        }
    },
    p:{
        name:'padding',
        keywords:{
            a:'auto'
        }
    },
    pl:{
        name:'padding-left',
        keywords:{
            a:'auto'
        }
    },
    pr:{
        name:'padding-right',
        keywords:{
            a:'auto'
        }
    },
    pt:{
        name:'padding-top',
        keywords:{
            a:'auto'
        }
    },
    pb:{
        name:'padding-bottom',
        keywords:{
            a:'auto'
        }
    },
    d:{
        name:'display',
        keywords:{
            n:'none',
            b:'block',
            i:'inline',
            ib:'inline-block',
            tb:'table'
        }
    },
    lh:{
        name:'line-height',
        keywords:{
            a:'auto'
        }
    },
    bg:{
        name:'background',
        keywords:{
            c:'center',
            t:'top',
            l:'left',
            r:'right',
            b:'bottom',
            norpt:'no-repeat',
            rpt:'repeat',
            rptx:'repeat-x',
            rpty:'repeat-y'
        }
    },
    bgc:{
        name:'background-color',
        keywords:{
            t:'transparent'
        }
    },
    bgi:{
        name:'background-image',
        keywords:{
            n:'none'
        }
    },
    bgp:{
        name:'background-position',
        keywords:{
            a:'auto',
            c:'center',
            l:'left',
            t:'top',
            r:'right',
            b:'bottom'
        }
    },
    fs:{
        name:'font-size',
        keywords:{

        }
    },
    f:{
        name:'font',
        keywords:{
            s:'serif',
            ss:'sans-serif',
            f:'fantasy',
            m:'monospace',
            a:'"microsoft yahei", "simhei", "宋体",Arial, "Helvetica Neue", Helvetica, sans-serif'
        }
    },
    ff:{
        name:'font-family',
        keywords:{
            s:'serif',
            ss:'sans-serif',
            f:'fantasy',
            m:'monospace',
            a:'"microsoft yahei", "simhei", "宋体",Arial, "Helvetica Neue", Helvetica, sans-serif'
        }
    },
    fw:{
        name:'font-weight',
        keywords:{
            b:'bold',
            n:'normal',
            br:'bolder',
            lr:'lighter'
        }
    },
    va:{
        name:'vertical-align',
        keywords:{
            s:'super',
            t:'top',
            tt:'text-top',
            m:'middle',
            bl:'baseline',
            b:'bottom',
            tb:'text-bottom',
            sub:'sub'
        }
    },
    ti:{
        name:'text-indent',
        keywords:{
            a:'auto'
        }
    },
    ta:{
        name:'text-align',
        keywords:{
            c:'center',
            l:'left',
            r:'right',
            j:'justify'
        }
    },
    td:{
        name:'text-decoration',
        keywords:{
            n:'none',
            u:'underline',
            o:'overline',
            l:'line-through'
        }
    },
    tj:{
        name:'text-justify',
        keywords:{
            a:'auto',
            iw:'inter-word',
            ii:'inter-ideograph',
            ic:'inter-cluster',
            d:'distribute',
            k:'kashida',
            t:'tibetan'
        }
    },
    c:{
        name:'color',
        keywords:{
            a:'auto'
        }
    },
    cur:{
        name:'cursor',
        keywords:{
            p:'pointer',
            a:'auto',
            d:'default',
            c:'crosshair',
            ha:'hand',
            he:'help',
            m:'move',
            t:'text'
        }
    },
    pos:{
        name:'position',
        keywords:{
            a:'absolute',
            r:'relative',
            f:'fixed'
        }
    },
    l:{
        name:'left',
        keywords:{
            a:'auto'
        }
    },
    r:{
        name:'right',
        keywords:{
            a:'auto'
        }
    },
    t:{
        name:'top',
        keywords:{
            a:'auto'
        }
    },
    b:{
        name:'bottom',
        keywords:{
            a:'auto'
        }
    },
    ol:{
        name:'outline',
        keywords:{
            n:'none'
        }
    },
    op:{
        name:'opacity',
        keywords:{

        }
    },
    ov:{
        name:'overflow',
        keywords:{
            v:'visible',
            h:'hidden',
            s:'scroll',
            a:'auto'
        }
    },
    v:{
        name:'visibility',
        keywords:{
            v:'visible',
            h:'hidden',
            c:'collapse'
        }
    },
    bd:{
        name:'border',
        keywords:{
            n:'none',
            a:'1px solid #000',
            s:'solid',
            ds:'dashed',
            h:'hidden',
            d:'dotted',
            db:'double',
            dtds:'dot-dash',
            dtdtds:'dot-dot-dash',
            w:'wave',
            g:'groove',
            r:'ridge',
            i:'inset',
            o:'outset'
        }
    },
    bds:{
        name:'border-style',
        keywords:{
            n:'none',
            s:'solid',
            ds:'dashed',
            h:'hidden',
            d:'dotted',
            db:'double',
            dtds:'dot-dash',
            dtdtds:'dot-dot-dash',
            w:'wave',
            g:'groove',
            r:'ridge',
            i:'inset',
            o:'outset'
        }
    },
    bdw:{
        name:'border-width',
        keywords:{

        }
    },
    bdt:{
        name:'border-top',
        keywords:{
            n:'none',
            a:'1px solid #000',
            s:'solid',
            ds:'dashed',
            h:'hidden',
            d:'dotted',
            db:'double',
            dtds:'dot-dash',
            dtdtds:'dot-dot-dash',
            w:'wave',
            g:'groove',
            r:'ridge',
            i:'inset',
            o:'outset'
        }
    },
    bdl:{
        name:'border-left',
        keywords:{
            n:'none',
            a:'1px solid #000',
            s:'solid',
            ds:'dashed',
            h:'hidden',
            d:'dotted',
            db:'double',
            dtds:'dot-dash',
            dtdtds:'dot-dot-dash',
            w:'wave',
            g:'groove',
            r:'ridge',
            i:'inset',
            o:'outset'
        }
    },
    bdr:{
        name:'border-right',
        keywords:{
            n:'none',
            a:'1px solid #000',
            s:'solid',
            ds:'dashed',
            h:'hidden',
            d:'dotted',
            db:'double',
            dtds:'dot-dash',
            dtdtds:'dot-dot-dash',
            w:'wave',
            g:'groove',
            r:'ridge',
            i:'inset',
            o:'outset'
        }
    },
    bdb:{
        name:'border-bottom',
        keywords:{
            n:'none',
            a:'1px solid #000',
            s:'solid',
            ds:'dashed',
            h:'hidden',
            d:'dotted',
            db:'double',
            dtds:'dot-dash',
            dtdtds:'dot-dot-dash',
            w:'wave',
            g:'groove',
            r:'ridge',
            i:'inset',
            o:'outset'
        }
    },
    lis:{
        name:'list-style',
        keywords:{
            n:'none'
        }
    },
    lisp:{
        name:'list-style-position',
        keywords:{
            i:'inside',
            o:'outside'
        }
    },
    list:{
        name:'list-style-type',
        keywords:{
            n:'none',
            d:'disc',
            c:'circle',
            s:'square',
            dc:'decimal',
            dclz:'decimal-leading-zero',
            lr:'lower-roman',
            ur:'upper-roman'
        }
    },
    lisi:{
        name:'list-style-image',
        keywords:{
            n:'none'
        }
    }
};
exports.defaultConfig = defaultConfig;
exports.defaultKey = defaultKey;
exports.propKey = propKey;