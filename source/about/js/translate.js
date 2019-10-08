function GET(url, callback) {
    let xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback((JSON.parse(xmlhttp.responseText)));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function translate(word, dict) {
    if (word in dict)
        return dict[word];
    return word;
}

function translate_all(data, dict) {
    if (typeof data !== 'object') return translate(data, dict);
    let del_list = {};//删除列表
    let add_list = {};//新增列表
    for (let key in data) {
        let tk = translate(key, dict);
        if (tk !== key) {
            del_list[key] = tk;//如果tk能被翻译则之后要删除
            add_list[tk] = translate_all(data[key], dict);//如果tk能被翻译则之后要新增
        } else data[key] = translate_all(data[key], dict);//否则直接翻译就好了
    }
    let tdata = {};
    for (let key in data) {
        if (key in del_list) {
            let tk = del_list[key];
            tdata[tk] = add_list[tk];
        } else tdata[key] = data[key];
    }
    return tdata;
}