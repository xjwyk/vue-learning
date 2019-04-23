## JS数组

------

### Array数组

##### 创建 Array 对象的语法：

```js
new Array();
new Array(size);
new Array(element0, element1, ..., elementn);
```

##### 参数

参数 *size* 是期望的数组元素个数。返回的数组，length 字段将被设为 *size* 的值。

参数 *element* ..., *elementn* 是参数列表。当使用这些参数来调用构造函数 Array() 时，新创建的数组的元素就会被初始化为这些值。它的 length 字段也会被设置为参数的个数。

##### 返回值

返回新创建并被初始化了的数组。

如果调用构造函数 Array() 时没有使用参数，那么返回的数组为空，length 字段为 0。

当调用构造函数时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为 undefined 的数组。

当其他参数调用 Array() 时，该构造函数将用参数指定的值初始化数组。

当把构造函数作为函数调用，不使用 new 运算符时，它的行为与使用 new 运算符调用它时的行为完全一样。

### Array 属性

| 属性                                                         | 描述                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [constructor](http://www.w3school.com.cn/jsref/jsref_constructor_array.asp) | 返回对创建此对象的数组函数的引用。 |
| [length](http://www.w3school.com.cn/jsref/jsref_length_array.asp) | 设置或返回数组中元素的数目。       |
| [prototype](http://www.w3school.com.cn/jsref/jsref_prototype_array.asp) | 使您有能力向对象添加属性和方法。   |

### Array方法
<table class="reference">
    <tbody>
        <tr>
            <th style="width:20%">方法</th>
            <th>描述</th>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-concat-array.html">concat()</a></td>
            <td>连接两个或更多的数组，并返回结果。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-copywithin.html">copyWithin()</a></td>
            <td>从数组的指定位置拷贝元素到数组的另一个指定位置中。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-entries.html">entries()</a></td>
            <td>返回数组的可迭代对象。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-every.html">every()</a></td>
            <td>检测数值元素的每个元素是否都符合条件。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-fill.html">fill()</a></td>
            <td>使用一个固定值来填充数组。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-filter.html">filter()</a></td>
            <td>检测数值元素，并返回符合条件所有元素的数组。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-find.html"> find()</a></td>
            <td>返回符合传入测试（函数）条件的数组元素。</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-findindex.html"> findIndex()</a></td>
            <td>返回符合传入测试（函数）条件的数组元素索引。</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-foreach.html"> forEach()</a></td>
            <td>数组每个元素都执行一次回调函数。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-from.html"> from()</a></td>
            <td>通过给定的对象中创建一个数组。</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-includes.html">includes()</a></td>
            <td>判断一个数组是否包含一个指定的值。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-indexof-array.html">indexOf()</a></td>
            <td>搜索数组中的元素，并返回它所在的位置。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-isarray.html">isArray()</a></td>
            <td>判断对象是否为数组。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-join.html">join()</a></td>
            <td>把数组的所有元素放入一个字符串。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-keys.html">keys()</a></td>
            <td>返回数组的可迭代对象，包含原始数组的键(key)。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-lastindexof-array.html">lastIndexOf()</a></td>
            <td>返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-map.html">map()</a></td>
            <td>通过指定函数处理数组的每个元素，并返回处理后的数组。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-pop.html">pop()</a></td>
            <td>删除数组的最后一个元素并返回删除的元素。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-push.html">push()</a></td>
            <td>向数组的末尾添加一个或更多元素，并返回新的长度。</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-reduce.html">reduce()</a></td>
            <td>将数组元素计算为一个值（从左到右）。</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-reduceright.html">reduceRight()</a></td>
            <td>将数组元素计算为一个值（从右到左）。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-reverse.html">reverse()</a></td>
            <td>反转数组的元素顺序。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-shift.html">shift()</a></td>
            <td>删除并返回数组的第一个元素。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-slice-array.html">slice()</a></td>
            <td>选取数组的的一部分，并返回一个新数组。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-some.html">some()</a></td>
            <td>检测数组元素中是否有元素符合指定条件。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-sort.html">sort()</a></td>
            <td>对数组的元素进行排序。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-splice.html">splice()</a></td>
            <td>从数组中添加或删除元素。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-tostring-array.html">toString()</a></td>
            <td>把数组转换为字符串，并返回结果。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-unshift.html">unshift()</a></td>
            <td>向数组的开头添加一个或更多元素，并返回新的长度。</td>
        </tr>
        <tr>
            <td><a href="www.runoob.com/jsref/jsref-valueof-array.html">valueOf()</a></td>
            <td>返回数组对象的原始值。</td>
        </tr>
    </tbody>
</table>