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
// console.log(data);
console.log(data[1].children[0].children)
