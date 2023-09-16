import {Pie} from '@ant-design/plots'
export default function MyChart(){
    const data = [
        {
            type:"Football",
            value:25
        },
        {
            type:"Basketball",
            value:10
        },
        {
            type:"Badminton",
            value:15
        },
        {
            type:"Cricket",
            value:20
        },
        {
            type:"Hockey",
            value:30
        }

    ];
    const config = {
        appendPadding:10,
        data,
        angleField:'value',
        colorField:'type',
        radius:0.9,
        label:{
            type:'inner',
            offset:'-30%',
            content:({percent})=> `${(percent*100).toFixed(0)}%`,
            style:{
                fontSize:14,
                textAline:"center",
                
            }
        },
        
        interactions:[
            {
                type:'element-active',
            },
            {
                type:'element-selected',
            },
        ]
    }
    return(
        <Pie {...config}/>
    )
}