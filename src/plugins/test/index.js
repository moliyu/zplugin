export default {
    name: 'test',
    functional: true,
    props: {
        msg: null
    },
    data: {
        name: 'ming'
    },
    render(h, context) {
        console.log('***', context)
        return h(
            'div',
            {
                style: {
                    color: 'red'
                },
                class: 'uu',
                on: {
                    click() {
                        console.log('点击事件')
                    }
                },
                scopedSlots: {
                    default: props => createElement('span', props.text)
                  },
            },
            [
                h('div', {style: {color: 'blue'}}, context.props.msg),
                context.children,
                h('div',
                    context.data.msg1
                )
            ],
        )
    }
}
