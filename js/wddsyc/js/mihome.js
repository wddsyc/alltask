(function(){
let $qian = document.querySelector(`#radio-front`);
let $hou = document.querySelector(`#radio-back`);
let $zuo = document.querySelector(`#radio-left`);
let $you = document.querySelector(`#radio-right`);
let $shang = document.querySelector(`#radio-top`);
let $xia = document.querySelector(`#radio-bottom`);
let $cub = document.querySelector(`.cube`);
let $mesage = document.querySelector(`.mesage`)

$qian.addEventListener(`click`,()=>{
    $cub.classList.remove(`hou`,`zuo`,`you`,`shang`,`xia`);
    $cub.classList.add(`qian`);
    mesage($qian);
})
$hou.addEventListener(`click`,()=>{
    $cub.classList.remove(`zuo`,`qian`,`you`,`shang`,`xia`);
    $cub.classList.add(`hou`);
    mesage($hou)
})
$zuo.addEventListener(`click`,()=>{
    $cub.classList.remove(`hou`,`qian`,`you`,`shang`,`xia`);
    $cub.classList.add(`zuo`);
    mesage($zuo)
})
$you.addEventListener(`click`,()=>{
    $cub.classList.remove(`hou`,`qian`,`zuo`,`shang`,`xia`);
    $cub.classList.add(`you`);
    mesage($you)
})
$shang.addEventListener(`click`,()=>{
    $cub.classList.remove(`hou`,`qian`,`you`,`zuo`,`xia`);
    $cub.classList.add(`shang`);
    mesage($shang)
})
$xia.addEventListener(`click`,()=>{
    $cub.classList.remove(`hou`,`qian`,`you`,`shang`,`zuo`);
    $cub.classList.add(`xia`);
    mesage($xia)
})
function mesage(home){
    let clean = `
    <img src="img/mihome/clean1.jpg" class="clean1">
    <h1>又简单 又美好</h1>
    <h1>10分钟，房间空气焕然一新①</h1>
    <p>高效的净化能力，安静舒适的工作表现，小巧自然的融入家居风格中。</p>
    <p>我们重新设计了小米空气净化器 2 ，研发出新的空气增压系统，CADR 值高达 310m3/h②。如此高性能的净化能力，体积却比第一代减小 40%。</p>
    <p>它可以根据你每一个房间的面积，调整至高效的净化效率。例如一个 21 平米的客厅，只需 10 分钟，空气就可大循环一次。</p>
    <p>分分秒秒，洁净的空气充满整个房间，家不仅仅是房子，更是一种你舒适、健康的生活方式。</p>
    <img src="img/mihome/clean2.jpg" alt="">
    <h1>全新空气增压系统</h1>
    <h1>让洁净的空气 吹遍房间的每个角落</h1>
    <p>高性能的净化效果，源于房间内的空气以大循环方式持续流动。</p>
    <p>工程师在研发中从飞机引擎中得到了灵感，在小体积内创造出强大吸力与风力的空气增压系统。</p>
    <p>当你按下“开始”键，通过高效净化滤芯的洁净空气，就开始在整个房间流动。从上方冲至天花板，再沿着墙壁、地面四散至整个房间，形成屋内大循环。</p>
    <p>当你回家前，还可以用手机远程调至超强模式，极速清洁空气③。</p>
    <img src="img/mihome/clean3.png" alt="">
    <h1>高效净化滤芯，360°进风 3层净化</h1>
    <p>洁净的空气不仅需要大循环动力系统，净化的核心来自于高效净化滤芯。摒弃只能从一个方向进气的低效传统过滤器，</p>
    <p>我们选用了与美国前三大空气净化器相同的滤芯供应商，生产的一体式 360°桶形滤芯，三层净化。初效滤网拦截例如毛发、灰尘等大颗粒悬浮物。</p>
    <p>第二层日本东丽 H11 级高效过滤器，可去除小至微米级的微小颗粒，还可阻挡致病细菌④。高品质活性炭，</p>
    <p>可高效吸附甲醛等有害物质，有效去除空气中的异味。滤芯用尽时，将自动提醒，手机一键下单，即可购买到正品滤芯。</p>
    `
    let feiji =`
    <img src="img/mihome/feiji1.jpg" alt=""class="feiji1">
    <h1>可以轻松驾驭的无穷乐趣</h1>
    <p>为了让毫无经验的新手也能轻松驾驭，我们让诸多复杂的飞行操控变得更加简单容易。小米无人机可以通过 APP 或遥控器</p>
    <p>实现一键自动起飞、降落、返航及自动航线飞行。即使是绕点飞行这样的专业动作，也可以借助 APP 轻松完成。你尽可以</p>
    <p>专注于构图，拍摄无与伦比的美丽风景。</p>
    <img src="img/mihome/feiji2.jpg" alt=""class="feiji2">
    <h1>一体化云台相机</h1>
    <h1>稳定画面的每一颗像素</h1>
    <p>云台内置的芯片可以根据飞行姿态实时计算运动补偿，并驱</p>
    <p>动三轴无刷电机转动以保持相机平稳拍摄，控制精度可达</p>
    <p>± 0.02° 。</p>
    <img src="img/mihome/feiji3.png" alt="">
    <h1>美不胜收更要续航持久</h1>
    <p>LG / GREPOW 电芯，5100mAh 高能量密度大容量电池，让飞行时间长达 26 分钟之久；抽屉式电池仓设计，更换简单容易；</p>
    <p>8 重电池智能保护技术令电池使用更安全，寿命更长。</p>
    <h1>光流辅助定位，室内也能更好的悬停</h1>
    <p>CORTEX-A7 四核处理器，辅以先进的光流和视觉算法，对各种地面纹理有更好的适应性。</p>
    <p>即使在室内无卫星信号的情况下也能实现定点悬停。</p>
    <p>异构双 IMU，双指南针冗余配置 </p>
    <h1>保障飞行安全稳定</h1>
    <p>小米无人机 4k 版本采用两套独立的异构 IMU 和指南针传感器，飞行控制器实时监控两</p>
    <p>路传感器的融合数据并进行比对，保证飞行数据的准确性。一旦出现故障还能立即执行</p>
    <p>切换，提高飞行安全性与稳定性。</p>
    `
    let saodi = `
    <div class="homeflex">
    <div class="saodione">
        <h1>够聪明</h1>
        <p>LDS 等众多传感器</p>
        <p>地图生成，路径规划</p>
        <p>自动回充</p>
        <p>断点续扫</p>
    </div>
    <div class="saoditwo">
        <h1>够强壮</h1>
        <p>大吸力风机</p>
        <p>浮动主刷</p>
        <p>动态调速边刷</p>
        <p>10mm 沿墙清扫</p>
    </div>
    <div class="saodithree">
        <h1>够省心</h1>
        <p>极简设计</p>
        <p>5200mAh 大电池</p>
        <p>远程智能控制</p>
        <p>实时清扫地图查看</p>
    </div>
</div>
<img src="img/mihome/saodi1.jpg" class="saodi" alt="">
<h1>行之有据，我会规划家里的清扫路径</h1>

<p>我拥有数量众多的传感器，将获取的数据信息实时同步给我的三颗 “大脑” ——处理器，他们会模拟人类大脑的思考方</p>
<p>式，并互相协作，将所采集的数据交给 SLAM 算法，构建房间地图，并实时定位。根据地图划分区域和规划清扫路径，最</p>
<p>终形成先沿边后 Z 字形的清扫路径，逐一完成分区清扫任务。</p>
<h1>聪明过人，三颗大脑让我独立思考</h1>

<p>三颗独立的处理器就是我聪明的 “大脑”，它会模拟人类大脑的思考方式，并互相协作，同步采集并处理传</p>
<p>感器信息，通过定位和计算，实时构建地图并规划最终的清扫路径，让扫地的效率更高。</p>
<h1>全面感官，我能时刻察觉复杂环境</h1>

<p>不同的家有着不同的空间环境，如何才能满足各种家庭环境？我身上涵盖了 12 类主流机器人所具备的传感器，不</p>
<p>论在任何家庭环境下，9.6cm 机身高度能轻松进入家的各个角落，看得见与看不见的地方都能优雅的完成清扫。</p>
<img src="img/mihome/saodi2.jpg" alt="">
    `
    let sofa = `
    <img src="img/mihome/sofa1.jpg" alt="">
    <img src="img/mihome/sofa2.jpg" alt="">
    <img src="img/mihome/sofa3.jpg" alt="">
    <img src="img/mihome/sofa4.jpg" alt="">
    <img src="img/mihome/sofa5.jpg" alt="">
    <img src="img/mihome/sofa6.jpg" alt="">
    `
    let tv = `
    <img src="img/mihome/tv1.png" class="tv" alt="">
    <h1>全新的影音体验</h1>
    <p>细节多了，噪点少了</p>
    <p>还有杜比音效和 2 项画质黑科技</p>
    <h1>内容持续增长</h1>
    <p>大人老人小孩</p>
    <p>全家人都能找到喜欢的内容</p>
    <p><h1>64 位处理器+超大存储</h1></p>
    <p>装得下你爱的应用</p>
    <p>更能满足你对速度的追求</p>
    <h1>是大容量的电视 </h1>
    <h1>也是有速度的游戏机</h1>
    <p>超大的存储空间，高性能的 CPU 和 GPU 既能装下更多</p>
    <p>你喜欢的应用，也可以让你的游戏更有速度。</p>
    <img src="img/mihome/tv2.png" class="tv" alt="">
    <h1>小米电视会员权益</h1>
    <h1>一个会员，双重特权</h1>
    <p>成为小米电视会员之后，就能享受“小米电视会员年卡（原价498元）+爱奇艺VIP会员年卡（原价198元）”</p>
    <p>双卡的全部权益价值 696 元，随电视加价购，超值特惠仅需 199 元。</p>
    `
    let watch = `
    <img src="img/mihome/watch1.png"class="watch" alt="">
    <h1>小米运动 2.0 全新升级，实用更好玩</h1>
    <p>全新的小米运动 2.0 搭载四大功能模块：状态、发现、智玩、我的，深度优化的 UI 界面，同时优化升级步数、睡眠、心率、体重等模块数据并</p>
    <p>分段展现，加入“统计”按钮可以查看活动记录“日视图、周视图、月视图”，让操作更为简便，交互体验更胜之前。</p>
    <h1>严苛的环境测试</h1>
    <img src="img/mihome/watch2.png"class="watch" alt="">
    <div class="homeflex">
    <div class="w1">
    <div class="yuan one"><p>高温</p><p>70℃</p></div>
        <h1>高温环境</h1>
        <p>70℃ 下放置 128 小时</p>
        
    </div>
    <div class="w2">
    <div class="yuan two"><p>低温</p><p>80℃</p></div>
        <h1>低温环境</h1>
        <p>零下 20℃ 下放置 128 小时</p>
        
    </div>
    <div class="w3">
    <div class="yuan three"><p>抗撞击</p><p>1.2米</p></div>
        <h1>跌落测试</h1>
        <p>1.2 米高自由下落</p>
        <p>撞击大理石面 12 次</p>
        
    </div>
    <div class="w4">
    <div class="yuan four"><p>耐腐蚀</p><p></p></div>
        <h1>耐化妆品测试</h1>
        <p>凡士林涂抹 24 小时</p>
        
    </div>
</div>
    `
    if(home===$qian){$mesage.innerHTML = clean;}
    if(home===$hou){$mesage.innerHTML = feiji;}
    if(home===$zuo){$mesage.innerHTML = saodi;}
    if(home===$you){$mesage.innerHTML = sofa;}
    if(home===$shang){$mesage.innerHTML = tv;}
    if(home===$xia){$mesage.innerHTML = watch;}
}mesage($qian)


})()