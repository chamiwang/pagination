/**
 * Created by chamiwang on 2017/5/12.
 */
var showPager = (function(){
    var pager = function(){
        this.box = document.getElementById('pager');
    };

    pager.prototype.render = function(page_number, current_page, show_number, callback){
        var current_url = window.location.href;
        if(current_url.indexOf('page') > 0) {
            var base_url  = current_url.substring(0, current_url.indexOf('page')-1);
        } else {
            var base_url  = current_url;
        }

        current_page = current_page?current_page:1;
        var half = Math.floor(show_number/2);
        var b_show_number = show_number;
        if(page_number<=show_number) {
            show_number = page_number;
        }
        var start_number = current_page-half;
        this.box.innerHTML='';

        if(current_page > 1) {
            var left = document.createElement('a');
            left.innerHTML = '<';

            if(base_url.indexOf("?") >= 0 ){
                page_url = base_url+'&page='+(current_page-1);
            } else {
                page_url = base_url+'?page='+(current_page-1);
            }

            left.setAttribute('href', page_url);
            left.setAttribute('class', 'list-group-item');
            this.box.append(left)
        }

        for(var i=1;i<=show_number;i++) {
            var page_add = (start_number)>0?(start_number-1+i):i;

            if(page_add>page_number) {
                break;
            }
            var template = document.createElement('a');
            template.innerHTML = page_add;

            if(base_url.indexOf("?") >= 0 ){
                page_url = base_url+'&page='+page_add;
            } else {
                page_url = base_url+'?page='+page_add;
            }

            template.setAttribute('href', page_url);
            if(page_add == current_page) {
                template.setAttribute('class', 'active list-group-item');
            }else{
                template.setAttribute('class', 'list-group-item');
            }




            this.box.append(template);

        }


        if(current_page < page_number)
        {
            var right = document.createElement('a');

            right.innerHTML = '>';

            if(base_url.indexOf("?") >= 0 ){
                page_url = base_url+'&page='+(current_page+1);
            } else {
                page_url = base_url+'?page='+(current_page+1);
            }

            right.setAttribute('href', page_url);
            right.setAttribute('class', 'list-group-item');
            this.box.append(right);
        }
    };
    var P = new pager();
    return function(page_number, current_page, show_number, callback){

        P.render(page_number, current_page, show_number, callback);
        callback(current_page);
    }
})();
