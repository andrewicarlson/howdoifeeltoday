export var deepPluck = function(info) {

    var nextSearch = info.haystack.reduce(function(accumulator, currentValue) {

        var next = [];

        if(typeof currentValue === 'string') {
            return accumulator;
        }

        if(currentValue.hasOwnProperty && currentValue.hasOwnProperty(info.needle)) {
            info.basket = info.basket.concat(currentValue[info.needle]);
        }

        Object.keys(currentValue).forEach(function(el) {
            if(Array.isArray(currentValue[el])) {
                next = next.concat(currentValue[el]);
            }
        });

        return accumulator.concat(next);
    }, []);

    if(!nextSearch.length) {

        return info;
    }

    return deepReduce({
        haystack: nextSearch,
        needle: info.needle,
        basket: info.basket
    });
};