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
            <div class="week" v-for="(item, i) in weekList" :key="i">{{item}}</div>
        </div>
        <div class="body">
            <div class="day" 
            v-for="(item, j) in dayList" :key="j" 
            >
                <div class="item" 
                :class="[select.year==item.year&&select.month==item.month&&select.day==item.day&&'select',item.month!=month&&'otherMonth']" 
                @click="handleDay(item)">{{item.day}}</div>
            </div>
        </div>
    </div>
</template>

<script> 
import {dateUtil} from '../../utils'
export default {
    data() {
        return {
            weekList: [ '日' , '一','二','三','四','五','六'],
            year: null,
            month: null,
            day: null, 
            select: dateUtil(new Date()),
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
                        ]
        }
    },
    props: {
        date: null,
        range: false
    },
    watch: {
        today(val) {
            this.year = val.year
            this.month = val.month
            this.day = val.day
        }
    },
    created() {
        if(!this.date) {
            this.year = dateUtil().year
            this.month = dateUtil().month
            this.day = dateUtil().day
        }else {
            this.year = this.date.year
            this.month = this.date.month
            this.day = this.date.day
        }
        // console.log('999', this.today)
        // console.log(new Date().getFullYear())
        // this.year = new Date().getFullYear()
        // this.month = new Date().getMonth() + 1
        // this.day = new Date().getDate()
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
        }
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
            this.select = dateUtil(`${data.year}, ${data.month}, ${data.day}`)
            this.month = data.month
            this.year = data.year
            this.$emit('select', this.select)
        },
        handleYear(val) {
            this.year+=val
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
                text-align: center;
                line-height: 25px;
                &:hover {
                    cursor: pointer;
                }
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