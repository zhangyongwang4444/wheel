
// 写成 Tabs接口 
// function Tabs(selector) {
//     this.elements = $(selector)
//     this.init()
//     this.bindEvents()
// }

// Tabs.prototype.init = function () {
//     this.elements.each(function (index, element) {
//         console.log(element)
//         $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
//         $(element).children('.tabs-content').children('li').eq(0).addClass('active')
//     })
// }

// Tabs.prototype.bindEvents = function () {
//     this.elements.on('click', '.tabs-bar > li', function (e) {
//         var $li = $(e.currentTarget)
//         $li.addClass('active').siblings().removeClass('active')
//         var index = $li.index()
//         var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
//         $content.addClass('active').siblings().removeClass('active')
//     })
// }

class Tabs {
    constructor(selector) {
        this.elements = $(selector)
        this.init()
        this.bindEvents()
    }
    init() {
        this.elements.each(function (index, element) {
            console.log(element)
            $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
            $(element).children('.tabs-content').children('li').eq(0).addClass('active')
        })
    }
    bindEvents() {
        this.elements.on('click', '.tabs-bar > li', function (e) {
            var $li = $(e.currentTarget)
            $li.addClass('active').siblings().removeClass('active')
            var index = $li.index()
            var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
            $content.addClass('active').siblings().removeClass('active')
        })
    }
}

var tabs = new Tabs('.tabs')