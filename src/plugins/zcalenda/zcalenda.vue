<template>
    <div class="zcalenda">
        <div class="pick">
            <i class="iconfont icon-doubleleft" @click="handleYear(-1)"></i>
            <i class="iconfont icon-prev" @click="handleMonth(-1)"></i>
            {{year}}年{{MonthList[month-1]}}月
            <i class="iconfont icon-next" @click="handleMonth(1)"></i>
            <i class="iconfont icon-doubleright" @click="handleYear(1)"></i>
            <!-- {{getFirstdayWeek()}} -->
        </div>
        <div class="head">
            <div class="week" v-for="(item, i) in weekList" :key="i" :style="{...weekStyle}">{{item}}</div>
        </div>
        <div class="body">
            <div class="day" 
            v-for="(item, j) in dayList" :key="j" 
            >
                <div class="item" 
                :style="{
                    color: otherMonth(item)&&otherColor||(selectDay(item)||range&&startOrEnd(item))&&chooseTextColor||range&&between(item)&&item.month==month&&'#aaaaaa'||color,
                    background: range&&startOrEnd(item)&&chooseColor||range&&between(item)&&item.month==month&&'#eeeeee'||selectDay(item)&&chooseColor||'',
                    ...dayStyle,
                     }"
                @click="handleDay(item)"
                @mouseenter="getRange(item, j)"
                >{{item.day}}</div>
            </div>
        </div>
    </div>
</template>

<script> 
import {dateUtil, toDate} from '../../utils'
export default {
    name: 'zcalendar',
    data() {
        return {
            weekList: [ '日' , '一','二','三','四','五','六'],
            year: null,
            month: null,
            day: null, 
            select: {year: null, month: null, day: null},
            MonthList: [
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10',
                        '11',
                        '12'
                        ],
            timeRange: {start: '', end: ''},
            rangeChoose: false
        }
    },
    props: {
        date: null,
        range: {
            default: false
        },
        weekStyle: {},
        dayStyle: {},
        color: {
            default: '#2a303e',
        },
        otherColor: {
            default: '#8897aa',
        },
        chooseColor: {
            default: '#409eff',
        },
        chooseTextColor: {
            default: '#ffffff'
        }
    },
    watch: {
        today(val) {
            this.year = val.year
            this.month = val.month
            this.day = val.day
        }
    },
    created() {
        if(this.range) {
            this.year = dateUtil().year
            this.month = dateUtil().month
        }else if(!this.date) {
            this.year = dateUtil().year
            this.month = dateUtil().month
            this.day = dateUtil().day
            this.select = dateUtil(new Date())
        }else {
            let date
            if((this.date instanceof Object)&&(!(this.date instanceof Array))) {
                date = this.date
            }else {
                date = dateUtil(new Date())    
            }
            this.year = date.year
            this.month = date.month
            this.day = date.day
            this.select = date
        }
    },
    computed: {
        dayList() {
            let day = []
            let forday = []
            let afterday = []
            let fordaynum = this.getFirstdayWeek()
            let before = this.getbefore(this.year, this.month)
            let after = this.getafter(this.year, this.month)
            if(fordaynum>0) {
                let lastday = new Date(this.year, this.month-1, 0).getDate()
                let firstday = lastday-fordaynum+1
                for(let j=firstday; j<=lastday; j++) {
                    forday.push(Object.assign({}, before, {day: j}))
                }
            }
            for(let i=1; i<=this.getLastDay(); i++) {
                day.push({year: this.year, month: this.month, day: i})
            }
            let endday = this.getLastDay()
            for(let k=1;k<=42-day.length-forday.length;k++) {
                afterday.push(Object.assign({}, after, {day: k}))
            }
            return forday.concat(day).concat(afterday)
        },
    },
    methods: {
        getFirstdayWeek() {
            return new Date(this.year, this.month-1, 1).getDay()
        },
        getLastdayWeek() {
            return new Date(this.year, this.month, 0).getDay()
        },
        getLastDay() {
            return new Date(this.year, this.month, 0).getDate()
        },
        getbefore(year, month) {
            month = month -1
            if(month<1) {
                month = 12
                year = year - 1
            }
            return {year, month}
        },
        getafter(year, month) {
            month = month +1
            if(month>12) {
                month = 1
                year = year + 1
            }
            return {year, month}
        },
        handleMonth(val) {
            this.month = this.month+val
            if(this.month>12) {
                this.month = 1
                this.year++
            }else if(this.month<1) {
                this.month = 12
                this.year--
            }
        },
        handleDay(data) {
            this.month = data.month
            this.year = data.year
            if(this.range) {
                if(!this.rangeChoose) {
                    this.rangeChoose = true
                    this.timeRange.end = null
                    this.timeRange.start = data
                }else {
                    this.rangeChoose = false
                    this.timeRange.end = data
                    if(toDate(this.timeRange.end)<toDate(this.timeRange.start)) {
                        [this.timeRange.start, this.timeRange.end] = [this.timeRange.end, this.timeRange.start]
                    }
                    this.$emit('select', this.timeRange)

                }
            }else {
                this.select = dateUtil(`${data.year}, ${data.month}, ${data.day}`)
                this.$emit('select', this.select)
            }
        },
        handleYear(val) {
            this.year+=val
        },
        otherMonth(item) {
            return item.month!=this.month
        },
        selectDay(item) {
            return this.select.year==item.year&&this.select.month==item.month&&this.select.day==item.day
        },
        getRange(item, index) {
            if(this.rangeChoose) {
                this.timeRange.end = item
            }
        },
        startOrEnd(item) {
            if(this.equals(item, this.timeRange.start)||this.equals(item, this.timeRange.end)) {
                return true
            }else {
                return false
            }
        },
        between(item) {
            if(this.timeRange.start&&this.timeRange.end) {
                if(this.timeRange.start&&this.timeRange.end&&toDate(item)<toDate(this.timeRange.start)&&toDate(item)<toDate(this.timeRange.end)||toDate(item)>toDate(this.timeRange.start)&&toDate(item)>toDate(this.timeRange.end)) {
                    return false
                }else {
                    return true
                }
            }
        },
        equals(x, y) {
            var f1 = x instanceof Object;
            var f2 = y instanceof Object;
            if (!f1 || !f2) {
                return x === y
            }
            if (Object.keys(x).length !== Object.keys(y).length) {
                return false
            }
            var newX = Object.keys(x);
            for (var p in newX) {
                p = newX[p];
                var a = x[p] instanceof Object;
                var b = y[p] instanceof Object;
                if (a && b) {
                    equals(x[p], y[p])
                } else if (x[p] != y[p]) {
                    return false;
                }
            }
            return true;

        }
    }
}
</script>

<style lang="scss" scoped>
.zcalenda {
    width: 100%;
    padding: 20px 0;
    .iconfont {
        &:hover {
            cursor: pointer;
            color: #409eff;
        }
    }
    .pick {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    .head {
        margin-top: 10px;
        display: flex;
        .week {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .body {
        display: flex;
        flex-wrap: wrap;
        cursor: pointer;
        .day {
            width: 1/7*100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            font-size: 14px;
            .item {
                width: 25px;
                height: 25px;
                color: #2a303e;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 25px;
            }
            .otherMonth {
                color: #8897aa;
            }
            .select {
                background: #409eff;
                color: #ffffff;
                border-radius: 25px;
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: background .3s linear;
            }
        }
    }
}
</style>