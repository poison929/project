//定义食物的类
class Food{
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food")!
    }

    //获取食物X坐标方法
    get X(){
        return this.element.offsetLeft;
    }
    //食物Y坐标
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物坐标位置,随机生成 0~290 0~320 整十跨度
    change(){
        let top = Math.round(Math.random() * 32)*10;
        let left = Math.round(Math.random() * 29)*10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}


export default Food;