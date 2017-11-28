/**
 * Created by chamiwang on 2017/5/12.
 */
var showPager = (function(){
    var pager = function(){
        this.box = document.getElementById('pager');
    };

    pager.prototype.render = function(page_number, current_page, show_number, callback){
        var base_url  = window.location.href.substring(0, window.location.href.indexOf('page')-1);
        current_page = current_page?current_page:1;
        var half = Math.floor(show_number/2);
        var b_show_number = show_number;
        if(page_number<=show_number) {
            show_number = page_number;
        }
        var start_number = current_page-half;
        this.box.innerHTML='';

        if(current_page > 1) {
            var left = document.createElement('li');
            var l_a = document.createElement('a');
            l_a.innerHTML = '<';
            left.append(l_a);

            if(base_url.indexOf("?") >= 0 ){
                page_url = base_url+'&page='+(current_page-1);
            } else {
                page_url = base_url+'?page='+(current_page-1);
            }

            l_a.setAttribute('href', page_url);
            left.setAttribute('onclick', 'showPager('+page_number+','+(current_page-1)+','+b_show_number+','+callback+')');
            this.box.append(left)
        }

        for(var i=1;i<=show_number;i++) {
            var page_add = (start_number)>0?(start_number-1+i):i;

            if(page_add>page_number) {
                break;
            }
            var template = document.createElement('li');
            var a = document.createElement('a');
            a.innerHTML = page_add;

            if(base_url.indexOf("?") >= 0 ){
                page_url = base_url+'&page='+page_add;
            } else {
                page_url = base_url+'?page='+page_add;
            }

            a.setAttribute('href', page_url);
            template.append(a);
            if(page_add == current_page) {
                template.setAttribute('class', 'active');
            }
            template.setAttribute('onclick', 'showPager('+page_number+','+page_add+','+b_show_number+','+callback+')');



            this.box.append(template);

        }


        if(current_page < page_number)
        {
            var right = document.createElement('li');
            var r_a = document.createElement('a');
            r_a.innerHTML = '>';
            right.append(r_a);

            if(base_url.indexOf("?") >= 0 ){
                page_url = base_url+'&page='+(current_page+1);
            } else {
                page_url = base_url+'?page='+(current_page+1);
            }

            r_a.setAttribute('href', page_url);
            right.setAttribute('onclick', 'showPager('+page_number+','+(current_page+1)+','+b_show_number+','+callback+')');
            this.box.append(right);
        }
    };
    var P = new pager();
    return function(page_number, current_page, show_number, callback){

        P.render(page_number, current_page, show_number, callback);
        callback(current_page);
    }
})();
