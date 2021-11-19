//引入各类
import Food from "./Food";
import Score from "./Score";
import Snake from "./Snake";

//游戏控制器，控制其他所有类

class GameControl{
    //定义三个属性
    snake: Snake;
    food: Food;
    score: Score;
    //存储按键值，蛇的移动方向
    direction:string = '';
    //判断游戏是否结束
    isLive = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.score = new Score();
        this.init()
    }

    //游戏初始化,调用开始游戏
    init(){
        //绑定键盘按键事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        //run()
        this.run();
    }//不用bind则this指向的是document而不是想要的GC实例对象

    //创建键盘响应函数
    keydownHandler(event:KeyboardEvent){
        //判断按键是否合法

        //修改direction属性
        this.direction = event.key
    }
    //创建蛇移动方法
    run(){
        //获取当前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向修改X,Y值
        switch(this.direction){
            case "ArrowUp":
                Y-=10;
                break;
            case "ArrowDown":
                Y+=10;
                break;
            case "ArrowLeft":
                X-=10;
                break;
            case "ArrowRight":
                X+=10;
                break;
        }
        //检查蛇是否吃到食物
        this.check(X,Y)
        //修改蛇的坐标
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e:any){
            alert(e.message+'Game Over')
            this.isLive = false
        }
        //延迟定时器
        this.isLive && setTimeout(this.run.bind(this),150 - (this.score.level-1) * 14)
    }

        //定义方法，监听是否被吃到食物
        check(X:number,Y:number){
            if( X === this.food.X && Y === this.food.Y){
                this.food.change();
                this.score.add();
                this.snake.addBody();
            }
        }
}



export default GameControl