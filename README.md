## Focusability

Highlight the focusable elements on the page and show the order that they'll be focused in when tabbing.

This works by finding the focusable elements, whether it be an element w/ a tabindex, an a, img, or other element which satisfy this predicate:

```js
function focusable(element){
    var map, mapName, img,
        nodeName = element.nodeName.toLowerCase(),
        isTabIndexNotNaN = !isNaN($.attr(element, 'tabindex'));
    if('area' === nodeName){
        map = element.parentNode;
        mapName = map.name;
        if(!element.href || !mapName || map.nodeName.toLowerCase() !== 'map'){
            return false;
        }
        img = $('img[usemap=#' + mapName + ']')[0];
        return !!img && visible(img);
    }
    return ( /input|select|textarea|button|object/.test(nodeName) ?
        !element.disabled :
        'a' === nodeName ?
            element.href || isTabIndexNotNaN :
            isTabIndexNotNaN) &&
        // the element and all of its ancestors must be visible
        visible(element);

    function visible(element){
        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function(){
            return $.css(this, 'visibility') === 'hidden';
        }).length;
    }
}
```

---

![](http://f.cl.ly/items/0O301f040V0q26163b0m/Image%202015-03-17%20at%203.43.51%20PM.png)
