# pagination 分页器 
make pagination eazy 傻子也能用的分页器

## how to use

### 1、u should  download the pager.js use it just like 把js搞下来再配个标签就行
```html
<script src="pager.js"></script>
<body>
    <ul class="pagination" id="pager"></ul>
</body>
<script>
  showPager(10 ,3, 5, 985);
</script>
```
### 2、u may like boostrap css 最好再搞个bootstrap css，省的自己配样式
```html
<link rel="stylesheet" href="bootstrap.min.css">
```

### 3、 parameters 这些是参数
#### showPager(page_number ,current_page, show_number, callback)
---
| field        | type           | description  |
| ------------- |:-------------:| :-----|
|page_number|int|how many pages u have|
|current_page|int|which page now|
|show_number|int|items'number for each page|
|all_num|int|length of the list|
|callback|int|callback|
---
### 4、enjoy it 就这样
