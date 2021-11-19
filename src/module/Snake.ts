//定义蛇类
class Snake {
    //表示蛇头的元素
    head: HTMLElement;
    //蛇身（包括蛇头）
    body:HTMLCollection;//实时更新
    //获取蛇的容器
    element:HTMLElement;

    constructor(){
        this.head = document.querySelector("#snake>div")!
        this.body = document.getElementById('snake')!.getElementsByTagName('div')
        this.element = document.getElementById('snake')!
    }
    //获取蛇头坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    set X(val:number){
        if(this.X === val){
            return
        };
        if(val < 0 || val > 290){
            //撞墙
            throw new Error()
        };
        //禁止蛇掉头
        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === val){
            //水平方向发生掉头,蛇向返方向继续移动
            if(val > this.X){
                //蛇向右走，发生掉头，蛇继续向左走
                val = this.X - 10;
            }else{
                val = this.X + 10;
            }
        }
        //移动身体
        this.move();
        this.head.style.left = val + 'px'
        //检查是否撞击
        this.checkCrash();

    }
    set Y(val:number){
        if(this.Y === val){
            return
        };
        if(val < 0 || val > 320){
            throw new Error()
        };
        //禁止蛇掉头
        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === val){
            if(val > this.Y){
                val = this.Y - 10;
            }else{
                val = this.Y + 10;
            }
        }
        this.move();
        this.head.style.top = val + 'px'
        //检查撞击
        this.checkCrash();
    }
    //蛇身增长方法
    addBody(){
        //添加div
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
    //蛇身体移动方法
    move(){
        //后边身体设置为前边身体位置 从后往前改
        //遍历获取所有身体
        for(let i = this.body.length-1;i>0;i--){
            //前边身体
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;

            //将该值设置到当前身体
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';

        }//去除蛇头 i = 0 其位置由set X（）管
    }
    //身体相撞
    checkCrash(){
        //获取所有身体，判断是否与蛇头坐标重叠
        for(let i = 1 ;i<this.body.length;i++){
            let bd = this.body[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //撞击
                throw new Error()
            }
        }
    }
}

export default Snake