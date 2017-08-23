const data = [
    {
        "id": '1',
        "children": [
            {
                "id": '1-1',
                "children": [],
                "value": "a-1",
            },
            {
                "id": '1-2',
                "children": [],
                "value": "a-2",
            },
        ],
        "value": "a",
    },
    {
        "id": '2',
        "children": [
            {
                "id": '2-1',
                "children": [
                    {
                        "id": '2-1-1',
                        "children": [],
                        "value": "c-1",
                    },
                ],
                "value": "b-1",
            },
        ],
        "value": "b",
    },
    {
        "id": '3',
        "children": [
        ],
        "value": "c",
    },
];

function findChildId(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].children.length === 0) {
            return arr[i].id;
        } else {
            findChildId(arr[i].children);
        }
    }
}

function transformData(data) {
    data.forEach(item => {
        if (item.children.length !== 0) {
            item.relateId = findChildId(item.children);
        }
        transformData(item.children);
    });
}
transformData(data)
console.log(data);
// console.log(data[1].children[0])
// console.log(transformData(data));
/*请实现个方法 transformData, 递归处理数据，给所有的父节点（children 不为空的）添加一个字段 relateId, 值为当前第一个子节点（children 为空的) id 的值。
如上面的数据经过处理后的结果为：*/
/*[
    {
        "id": "1",
        "children": [
            {
                "id": "1-1",
                "children": [],
                "value": "a-1"
            },
            {
                "id": "1-2",
                "children": [],
                "value": "a-2"
            }
        ],
        "value": "a",
        "relateId": "1-1"
    },
    {
        "id": "2",
        "children": [
            {
                "id": "2-1",
                "children": [
                    {
                        "id": "2-1-1",
                        "children": [],
                        "value": "c-1"
                    }
                ],
                "value": "b-1",
                "relateId": "2-1-1"
            }
        ],
        "value": "b",
        "relateId": "2-1-1"
    },
    {
        "id": "3",
        "children": [],
        "value": "c"
    }
]*/

