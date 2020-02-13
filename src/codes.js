
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
                    `function foo(insert_num,text){
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
                        result.text='';
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
    },
    {
        label:'最佳实践',
        children:[
            {
                label:'串行异步调用',
                code:{
                    text:
                    `function foo(loop=1){
                        function p(){
                            return new Promise(function(resolve, reject){
                                setTimeout(resolve, 1000);
                            });
                        }
                        for (let i = 0; i < loop; i++) {
                            await p();
                            //输出每次任务完成
                        }
                    }
                    `,
                    params:
                    [
                        {key:'loop',value:1},
                    ],
                    func:async (result,{loop=1})=>{
                        result.text='';
                        function p(){
                            return new Promise(function(resolve, reject){
                                setTimeout(resolve, 1000);
                            });
                        }
                        for (let i = 0; i < loop; i++) {
                            await p();
                            result.text+=`任务${i+1}完成\n`;
                        }
                        
                    }
                },
            },            
            {
                label:'string padding',
                code:{
                    text:
                    `function foo(len=1,char='')=>{
                        let str='测试文字';
                        str=str.padStart(len,char);
                        //输出结果
                    }
                    `,
                    params:
                    [
                        {key:'len',value:1},
                        {key:'char',value:''},
                    ],
                    func:(result,{len=1,char=''})=>{
                        result.text='';
                        let str='测试文字';
                        str=str.padStart(len,char);
                        result.text=str;

                        '123'.padStart(8,0);
                    }
                },
            },    
            {
                label:'数组去重',
                code:{
                    text:
                    `function foo()=>{
                        let arr=[1,2,3,3,3,3,4,4,4,5,6];
                        let arr1=[1,2,{a:1},{a:1},{a:2}];
                        let o1={a:1};
                        let o2={a:2};
                        let arr2=[1,2,o1,o1,o2];

                        arr=Array.from(new Set(arr));
                        arr1=Array.from(new Set(arr1));
                        arr2=Array.from(new Set(arr2));
                        //输出结果
                    }
                    `,
                    params:
                    [
                    ],
                    func:(result,{})=>{
                        result.text='';
                        let arr=[1,2,3,3,3,3,4,4,4,5,6];
                        let arr1=[1,2,{a:1},{a:1},{a:2}];
                        let o1={a:1};
                        let o2={a:2};
                        let arr2=[1,2,o1,o1,o2];

                        arr=Array.from(new Set(arr));
                        arr1=Array.from(new Set(arr1));
                        arr2=Array.from(new Set(arr2));

                        result.text=`arr:${JSON.stringify(arr)}
                        arr1:${JSON.stringify(arr1)}
                        arr2:${JSON.stringify(arr2)}
                        `;
                    }
                },
            },        
        ],
    }
]