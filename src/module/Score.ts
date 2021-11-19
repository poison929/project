//积分板的类
class score {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //设置变量限制等级
    maxLevel: number;
    //升级规则
    upScore: number;

    constructor(maxLevel:number = 10,upScore:number = 3){//构造函数
        this.scoreEle = document.getElementById('grade')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    //设置一个加分方法
    add(){
        //分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        //判断分数
        if(this.score % this.upScore === 0){//10分升一级
            this.levelUp();
        }
    }
    //等级提升
    levelUp(){
        //等级上限
        if(this.level < this.maxLevel){
        this.levelEle.innerHTML = ++this.level + '';
        }
    }
}


export default score