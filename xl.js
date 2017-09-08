var faceDemo = {
    // this指向问题 
    showThisd: function() {
        var name = 'xiaolong'
        var famousPerson = {
            name: 'sulihua',
            otherName: {
                name: 'bill',
                showName: function() {
                    alert(this.name)
                }
            }
        }
        var show = famousPerson.otherName.showName
        show(); // xiaolong
        famousPerson.otherName.showName() //bill
        alert(famousPerson.name) //sulihua
    },
    //数组去重
    arrUnique: function(arr) {
        var b = []
        var obj = {}
        for (var i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                b.push(arr[i])
                obj[arr[i]] = 1
            }
        }
        return b
    },
    //数组排序
    sortArr: function(arr) {
        arr.sort(function(a, b) {
            return a - b;
        })
    },
    //浅复制（贝了基本类型的数据，而引用类型数据，复制后也是会发生引用）
    shallCopy: function() {
        var json1 = { "a": "李鹏", "arr1": [1, 2, 3] }
        var obj2 = {}
        for (var i in json1) {
            // console.log(json1[i])
            obj2[i] = json1[i]
        }
        obj2.arr1.push(5);
        console.log(obj2.arr1); //[1,2,3,5]
        console.log(json1.arr1); //[1,2,3,5]
    },
    //深层复制
    copy: function(obj1, obj2) {
        var obj2 = obj2 || {}
        for (var name in obj1) {
            if (typeof obj1[name] === 'object') { //判断是否为对象
                obj2[name] = (obj1[name].constructor === Array) ? [] : {}
                    // console.log(obj1[name].constructor === Array)
                faceDemo.copy(obj1[name], obj2[name])
            } else {
                obj2[name] = obj1[name]
                console.log(1)
            }
        }
        return obj2

        /*
        var json1 = {
        	"name": "鹏哥",
        	"age": 18,
        	"arr1": [1, 2, 3, 4, 5],
        	"string": 'afasfsafa',
        	"arr2": [1, 2, 3, 4, 5],
        	"arr3": [{ "name1": "李鹏" }, { "job": "前端开发求职" }]
        };
        var json2 = {};
        json2 = faceDemo.copy(json1, json2);
        json1.arr1.push(8)
        console.log(json2.arr1);
        console.log(json1.arr1);
        */

    },
    //闭包累加
    closure: function() {
        var a = 0
        return function() {
                a++
                console.log(a)
            }
            /*
            	var f = faceDemo.closure()
            	f(); //1
            	f(); //2
            	f(); //3
            */

    },
    // 获取cookie
     getCookie: function(name) {
        var  strCookie = document.cookie;
        var  arrCookie = strCookie.split("; ");
        for (var  i = 0; i < arrCookie.length; i++) {
            var  arr = arrCookie[i].split("=");
            if (arr[0] == name) {
                return unescape(arr[1]);
            } else {
                return "";
            }
        }
    },
    //字符串出现最多的是哪一个，出现多少次
    charAtcout: function(str) {
        //console.log(str)
        var b = {}
        for (var i in str) {
            if (!b[str.charAt(i)]) {
                b[str.charAt(i)] = 1;
            } else {
                b[str.charAt(i)]++
            }
            // console.log(str.charAt(i))
        }
        var str2 = ''
        var count = 0
        for (var i in b) {
            console.log(b)
                // console.log(b[i])
            if (b[i] > count) {
                str2 = i;
                count = b[i]
            }
        }
        console.log(str2) //出现最多的字符
        console.log(count) //出现最多的次数
    }
}