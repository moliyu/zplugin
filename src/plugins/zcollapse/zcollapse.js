const eltransiton = 'height .3s linear, padding-top .3s linear, padding-bottom .3s linear'
const Transition = {
    'beforeEnter'(el) {
        // console.log('jjj', el.style.height)
        if(!el.dataset) el.dataset = {}
        el.dataset.paddingtop = el.style.paddingTop
        el.dataset.paddingbottom = el.style.paddingBottom
        el.dataset.overflow = el.style.overflow
        el.dataset.height = el.style.height

        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
        el.style.transition = eltransiton
    },
    'enter'(el) {
        // console.log('overflow', el.style.overflow, el.style.height)
        // el.style.height = el.clientHeight + parseFloat(el.dataset.paddingtop) + parseFloat(el.dataset.paddingbottom) + 'px'
        if(el.dataset.height&&el.scrollHeight!==0) {
            el.style.height = el.dataset.height
        }else {
            el.style.height = el.scrollHeight  + stringToNum(el.dataset.paddingtop) + stringToNum(el.dataset.paddingbottom) + 'px'
            console.log('***', stringToNum(el.dataset.paddingtop))
        }
        el.style.paddingTop = el.dataset.paddingtop
        el.style.paddingBottom = el.dataset.paddingbottom
        el.style.overflow = 'hidden'
    },
    'afterEnter'(el) {
        el.style.overflow = el.dataset.overflow
        el.style.transition = ''
        if(el.dataset.height) {
            el.style.height = el.dataset.height
        }else {
            el.style.height = ''
        }
    },
    'beforeLeave'(el) {
        if(!el.dataset) el.dataset = {}
        el.dataset.paddingtop = el.style.paddingTop
        el.dataset.paddingbottom = el.style.paddingBottom
        el.dataset.overflow = el.style.overflow
        // console.log('kkk', el.clientHeight,el.scrollHeight)
        el.style.height = el.scrollHeight+'px'
        el.style.overflow = 'hidden'
    },
    'leave'(el) {
        el.style.transition = eltransiton
        if(el.scrollHeight!==0) {
            el.style.height = 0
            el.style.paddingTop = 0
            el.style.paddingBottom = 0
        }
    },
    'afterLeave'(el) {
        el.style.overflow = el.dataset.overflow
        el.style.transition = ''
        // el.style.height = el.dataset.height
        el.style.height = ''
    }
}

function stringToNum(string) {
    if(Object.is(parseFloat(string), NaN)) {
        return 0
    }else {
        return parseFloat(string)
    }
}

export default {
    name: 'zcollapse',
    functional: true,
    render(h, {children}) {
        const data = {
            on: Transition
        }
        return h('transition', data, children)
    }
}