
export default [
    {
        label:'ES6',
        children:[
            {
                label:'参数默认值',
                code:{
                    text:
                    `function foo(height=50, color='red'){
                        //执行后显示参数值
                    }
                    `,
                    params:
                    [
                        {key:'color',value:'red'},
                        {key:'height',value:''},
                    ],
                    func:(result,{color='red',height=50})=>{
                        
                        result.text=`height:${height},color:${color}`;
                    }
                },
            },
        ]
    },
    {
        label:'ES7',
        children:[
        ]
    },
    {
        label:'ES8',
        children:[
        ]
    },
    {
        label:'ES9',
        children:[
        ]
    },
    {
        label:'特异用法',
        children:[
            {
                label:'不使用if-eles按条件创建不同的数组',
                code:{
                    text:
                    `function foo(insert_num){
                        let a=[];
                        a.length=insert_num;
                        a.fill(text);
                        
                        let arr=[
                            'a',
                            ...a,
                            'b',
                        ]
                        //执行后显示arr值
                    }
                    `,
                    params:
                    [
                        {key:'insert_num',value:0},
                        {key:'text',value:''},
                    ],
                    func:(result,{insert_num=0,text=''})=>{
                        let a=[];
                        a.length=insert_num;
                        a.fill(text);
                        
                        let arr=[
                            'a',
                            ...a,
                            'b',
                        ]
                        
                        result.text=arr;
                    }
                },
            },
        ],
    }
]