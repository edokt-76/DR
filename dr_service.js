// const dr_web_element = ()=>;
// const dr_utils = ()=>window.document.getElementById("contentFrame")?window.document.getElementById("contentFrame").contentWindow.DRUtils:null;

// export default {dr_web_element, dr_utils };
import Translation from "Translation";

export default class ReportResources {
    install(Vue) {
        Vue.prototype.$reportServices = this;
    }
    constructor() {
        this.Report = window.document.getElementById("contentFrame") && window.document.getElementById("contentFrame").contentWindow;
        this.UsersList = window.usersList;
        this.translation = Translation;
        
    }
    tr(key) {
        return this.translation[key] ? this.translation[key] : key;
    }
    getWebElements() {
        return this.Report.DRWebElement;
    }
    getSerializedState() {
        return this.Report.DRCSReport.SerializedState;
    }
    getSerializedStateWel() {
        return this.Report.DRCSReport.SerializedStateWel;
    }
    getMaxMessages() {
        return window.maxMessages;
    }
    getGenId() {
        return this.Report.DRCSReport.ReportGenId;
    }
    getReportName() {
        return this.Report.DRCSReport.ReportName;
    }
    getReportFileName(){
        return window.currentReportFile;
    }
    getToasterTimeout() {
        return window.toasterTimeout*1000;
    }
    getTimeFormat() {
        return window.timeFormat;
    }
    getDateFormat() {
        return window.dateFormat;
    }
    isUM() {
        return window.isUM;
    }
    format(timestamp) {
        let date = new Date(timestamp);
        if (Math.floor(+date / 86400000) == Math.floor(Date.now() / 86400000))
            return date.format(this.getTimeFormat());
        else return date.format(this.getDateFormat());
    }
}