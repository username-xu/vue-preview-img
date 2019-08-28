<template>
    <div class="img-preview" ref="imgPreview">
        <div class="preview-box">
            <div class="img-box" :style="{width:width + 'px', height: height + 'px'}">
                <img 
                    :src="src"
                    :style="{ 
                        height: imgHeight +'%', cursor: isDown ? 'grabbing': 'grab',
                        marginLeft: newLeft ? newLeft +'px' : 'auto',
                        marginTop: newTop ? newTop +'px' : 30 +'px',
                        transform: 'rotate('+ rotate * 90 +'deg)'
                    }"
                    ref="imgEl"
                    @mousedown="imgMousedown"
                    @mousemove="imgMousemove"
                    @mouseup="imgMouseup">
            </div>
        </div>
        <div class="btn-box">
            <div class="btns">
                <button @click="imgInversion"><i class="icon xiangzuoxuanzhuan"></i></button>
                <button @click="imgForward"><i class="icon xiangyouxuanzhuan"></i></button>
                <button @click="imgAmplification"><i class="icon fangda1"></i></button>
                <button @click="imgShrink"><i class="icon suoxiao1"></i></button>
            </div>
        </div>
        <div class="viewer-button" @click="closePreview"><i class="icon guanbi"></i></div>
    </div>
</template>
<script>
export default {
    name: 'img-preview',
    data(){
        return{
            src: '',
            rotate: 0,
            height: 0,
            width: 0,
            imgHeight: 60,
            x: 0,
            y: 0,
            left: 0,
            top: 0,
            newLeft: 0,
            newTop: 0,
            isDown: false
        }
    },
    created(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    },
    methods: {
        // 正转
        imgForward(){
            this.rotate = this.rotate + 1;
        },
        // 反转
        imgInversion(){
            this.rotate = this.rotate - 1;
        },
        // 放大
        imgAmplification(){
            if(this.imgHeight >= 150){
                return;
            }
            this.imgHeight += 20;
        },
        // 缩小
        imgShrink(){
            if(this.imgHeight <= 20){
                return;
            }
            this.imgHeight -= 20;
        },
        // 拖拽
        imgMousedown(e){
            // 鼠标按下
            // 获取x坐标和y坐标
            this.x = e.clientX;
            this.y = e.clientY;

            // 获取左部和顶部的偏移量
            this.left = this.$refs.imgEl.offsetLeft;
            this.top = this.$refs.imgEl.offsetTop;
            // 开启
            this.isDown = true;
        },
        imgMousemove(e){
            // 移动
            if (this.isDown == false) {
                return;
            }
            // 获取x和y
            var newX = e.clientX;
            var newY = e.clientY;
            // 计算移动后的左偏移量和顶部的偏移量
            this.newLeft = newX - (this.x - this.left);
            this.newTop = newY - (this.y - this.top);

            // 阻止图片默认的拖拽事件
            e.preventDefault();
        },
        imgMouseup(e){
            // 鼠标按下
            // 关闭
            this.isDown = false;
        },
        // 关闭
        closePreview(){
            this.rotate = 0;
            this.x = 0;
            this.y = 0;
            this.left = 0;
            this.top = 0;
            this.newLeft = 0;
            this.newTop = 0;
            this.imgHeight = 60;

            this.$refs.imgPreview.remove()
        }
    }
}
</script>
<style lang="scss" scoped>
@import url("./font/iconfont.css");
.img-preview{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2100;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.9);
}
.preview-box{
    width: 100%;
    height: 100%;
    overflow: auto;
}
.img-box{
    width: 1359px;
    height: 779px;
    text-align: center;
    overflow: hidden;
    img{
        max-width: 100%;
        display: block;
        margin: 30px auto 0;
        transform-origin: center;
    }
}

.btn-box{
    position: absolute;
    bottom: 18px;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.2);
    .btns{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        button{
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.8);
            margin-right: 15px;
        }
        i{
            font-weight: 700;
        }
    }
}
.viewer-button {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(255,255,255,.4);
    i{
        position: absolute;
        bottom: 18px;
        left: 18px;
        font-size: 24px;
        color: #fff;
    }
}
</style>