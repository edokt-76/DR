import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NotifierHub from './svc/notifier-hub'
import $ from 'jquery'
import ReportResources from "./svc/dr_service.js";
import * as VueShowdown from 'vue-showdown'
import Toasted from 'vue-toasted';


Vue.use(VueShowdown, {
    options: {
        emoji: true
    }
});

Vue.use(VueAxios, axios)
Vue.use(NotifierHub)
Vue.use(new ReportResources())
Vue.use(Toasted, {
    theme: "toasted-primary",
    position: "top-center"
});


Vue.config.productionTip = false


const mountEl = document.querySelector('#app');

VueShowdown.showdown.setOption('simpleLineBreaks', true);



const vue = new Vue({
    render: h => mountEl ? h(App, {
        props: { ...mountEl.dataset },
    }) : h(App),
}).$mount(mountEl);



$('li.dropdown.mega>a').on('click', function () {
    $(this).parent().find(".dropdown-menu").toggleClass('show');
    //$(this).parent().dropdown('toggle') 
    vue.$forceUpdate();
});
var onClickFoo = function (e) {
 //   if (e);
    if (!$('li.dropdown.mega').is(e.target)
        && $('li.dropdown.mega').has(e.target).length === 0
        && $('.show').has(e.target).length === 0
    ) {
        $('li.dropdown.mega').parent().find(".dropdown-menu").removeClass('show');
        //$('li.dropdown.mega').dropdown('hide') 

    }
}
$('body').on('click', onClickFoo);
//$(document.getElementById("contentFrame").contentWindow.document).find('body').on('click', onClickFoo);
