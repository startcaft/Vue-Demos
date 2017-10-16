<template>
    <div class="pos">
        <!--点餐面板-->
        <el-tabs type="border-card">
            <el-tab-pane label="点餐">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="goodsName" label="名称" min-width="100"></el-table-column>
                    <el-table-column label="数量" align="center">
                        <template scope="scope">
                            <el-input-number size="small" v-model="scope.row.count" @change="changeCount" :min="0"></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="单价" align="center"></el-table-column>
                </el-table>
                <div class="pos-order-total">
                    <el-tag type="danger">
                        总金额：￥{{ totalMoney }}元
                    </el-tag>
                </div>
                <div class="pos-order-btns">
                    <el-button type="primary">
                        <i class="el-icon-warning"></i>
                        挂起
                    </el-button>
                    <el-button type="primary">
                        <i class="el-icon-delete2"></i>
                        删除
                    </el-button>
                    <el-button type="primary">
                        <i class="el-icon-check"></i>
                        结账
                    </el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
                挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
                外卖
            </el-tab-pane>
        </el-tabs>
        <!--常用商品-->
        <div class="hot-items">
            <my-load :show="isShow"></my-load>
            <div class="h-title">常用商品</div>
            <ul>
                <li v-for="item in hotList">
                    <a :id="item.goodsId" @click="addOrderList(item)">
                        <el-tag type="primary">
                            {{ item.goodsName }}
                            &nbsp;&nbsp;
                            ￥{{ item.price }} 元
                        </el-tag>
                    </a>
                </li>
            </ul>
        </div>
        <!--商品分类-->
        <el-tabs type="border-card">
            <el-tab-pane label="汉堡">
                <ul class="cookList">
                    <li v-for="cook in type0Goods">
                        <img :src="cook.goodsImg" @click="addOrderList(cook)"/>
                        <div class="foodText">
                            <span class="foodName">{{ cook.goodsName }}</span>
                            <span class="foodPrice">￥{{ cook.price }}元</span>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
                <ul class="cookList">
                    <li v-for="cook in type1Goods" @click="addOrderList(cook)">
                        <img :src="cook.goodsImg"/>
                        <div class="foodText">
                            <span class="foodName">{{ cook.goodsName }}</span>
                            <span class="foodPrice">￥{{ cook.price }}元</span>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
                <ul class="cookList">
                    <li v-for="cook in type2Goods" @click="addOrderList(cook)">
                        <img :src="cook.goodsImg"/>
                        <div class="foodText">
                            <span class="foodName">{{ cook.goodsName }}</span>
                            <span class="foodPrice">￥{{ cook.price }}元</span>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
                <ul class="cookList">
                    <li v-for="cook in type3Goods" @click="addOrderList(cook)">
                        <img :src="cook.goodsImg"/>
                        <div class="foodText">
                            <span class="foodName">{{ cook.goodsName }}</span>
                            <span class="foodPrice">￥{{ cook.price }}元</span>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import Loading from '../commons/loading.vue'
    import axios from 'axios'

    export default {
        data(){
            return {
                isShow : false,
                hotList : [],
                tableData : [],
                type0Goods : [],
                type1Goods : [],
                type2Goods : [],
                type3Goods : [],
                totalMoney : 0
            }
        },
        components : {
            'my-load' : Loading
        },
        methods : {
            addOrderList(item){
                //console.log(item);
                //判断当前点击的商品是否在订单 tableData 数组中
                let isHave = false;
                for(let i=0;i<this.tableData.length;i++){
                    if(this.tableData[i].goodsId === item.goodsId){
                        isHave = true;
                        break;
                    }
                }

                if(isHave){
                    //订单列表存在的商品数量+1
                    let arr = this.tableData.filter(o => o.goodsId === item.goodsId);//如果订单列表存在，返回的数组只会有一条数据
                    arr[0].count++;
                }
                else {
                    //订单列表新增商品
                    let addGoods = {goodsId:item.goodsId,goodsName:item.goodsName,price:item.price,count:1};
                    this.tableData.push(addGoods);
                }

                //计算价格
                this.getAllMoney(false);
            },
            getAllMoney(needDel){
                console.log(needDel);
                //需要删除数量为0的商品
                if(needDel){
                    for(let i=0;i<this.tableData.length;i++){
                        // if(this.tableData[i].count === 0){
                        //     console.log(this.tableData[i]);
                        //     break;
                        // }
                        console.log(this.tableData[i]);
                        console.log(this.tableData[i].count);
                    }
                }

                this.totalMoney=0;
                //先判是否有商品数量 <=0 如果有，直接删除该条记录
                //然后在计算价格
                if(this.tableData){
                    
                    this.tableData.forEach((element) => {
                        this.totalMoney=this.totalMoney+(element.price*element.count);   
                    });
                }
            },
            changeCount(newCount){
                let needDel = false;
                if(newCount === 0 ){
                    needDel = true;
                    //console.log(newCount);
                }
                this.getAllMoney(needDel);
            }
        },
        created(){
            this.isShow = true;
            //请求热门数据
            axios.get('http://jspang.com/DemoApi/oftenGoods.php')
                .then(response => {
                    this.hotList = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            //请求分类数据
            axios.get('http://jspang.com/DemoApi/typeGoods.php')
                .then(response=>{
                    this.type0Goods = response.data[0];
                    this.type1Goods = response.data[1];
                    this.type2Goods = response.data[2];
                    this.type3Goods = response.data[3];
                })
                .catch(error=>{
                    console.log(error);
                });
            this.isShow = false;
        }
    }
</script>


<style lang="less">
    .pos {
        display: flex;
        flex-direction: column;
        //点餐面板
        .el-tabs {
            flex: 1;
            .pos-order-btns {
                margin-top: 10px;
                text-align: center;
            }
            .pos-order-total{
                margin-top: 10px;
                text-align: center;
            }
        }
        //常用商品
        .hot-items {
            flex: 1;
            display: flex;
            flex-direction: column;
            //标题
            .h-title {
                height: 40px;
                border-bottom: 1px solid #D3dce6;
                background-color: #F9FAFC;
                line-height: 40px;
                text-align: center;
                font-size: 14px;
            }
            //标签
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin: 10px;
                li {
                    flex: none;
                    padding: 2px;
                    margin: 2px;
                    text-align: center;
                    a {
                        display: block;
                        .el-tag {
                            text-overflow:ellipsis;
                            overflow:hidden;
                            white-space:nowrap;
                            width:150px;
                        }
                    }
                }
            }
        }
        .el-tabs {
            .cookList {
                display: flex;
                flex-wrap: wrap;
                li {
                    border: 1px solid #E5E9F2;
                    display: flex;
                    flex: none;
                    height: 60px;
                    margin: 5px 5px;
                    img {
                        height: 60px;
                        width: 60px;
                    }
                    .foodText {
                        display: flex;
                        flex-direction: column;
                        width: 80px;
                        text-align: center;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        white-space:nowrap;
                        .foodName {
                            padding: 2px 2px;
                            color: red;
                        }
                        .foodPrice {
                            padding: 2px 2px;
                        }
                    }
                }
            }
        }
    }
</style>

