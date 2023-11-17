import React from "react";
import photo1 from "../photo/amozeh1.png.webp";
import photo2 from "../photo/amozeh2.png.webp";
import Slider from "react-slick";
import photo3 from "../photo/amozeh3.png.webp";
import photo4 from "../photo/amozeh4.png.webp";
import photo5 from "../photo/amozeh5.png.webp";
import Footer from "../Header&Footer/Footer";
function Amozesh (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
return (
<div>
  <div className="amozehall"> 
 
 
   <div className="amozeh3">
    <Slider {...settings}>
          <div>
            <img src={photo3} alt=""/>
          </div>
          <div>
            <img src={photo4} alt=""/>
          </div>
          <div>
             <img src={photo5} alt=""/>
          </div>
          
     </Slider>
   </div>


   <div className="amozeh1v2">
       <div className="amozeh1">
          <img src={photo1} alt=""/>
       </div>

       <div className="amozeh2">
          <img src={photo2} alt=""/>
       </div>
     </div>



  </div>

<div  className="amozehabzar">
<div> ^</div>
<h2> 
انتخاب مته مناسب
</h2>
    <div>
    از فاکتورهای مهمی که قبل از راه اندازی دریل باید مورد توجه قرار گیرد، انتخاب مته مناسب است. بنابراین لازم است قبل از شروع به کار جنس سطوح و فعالیتی که می خواهید انجام دهید را مدنظر قرار داده و مته ای متناسب با آن انتخاب نمایید. اگر در مورد نوع مته انتخابی دچار شک و تردید شدید بهتر است از دیگران سوال کرده و یا راهنمای نوشته شده بر روی جعبه مته را مورد مطالعه قرار دهید. چرا که برخی مته ها مناسب چوب، برخی مناسب فلزات و تعدادی دیگر مناسب مصالح ساختمانی هستند و در صورت استفاده نامناسب باعث شکستن و ایجاد آسیب به قطعه کار خواهند شد.
     </div>



     <h2> 
     تنظیم سرعت
</h2>
    <div>
    باتوجه به این که هر دریل از سرعت های مختلفی برخوردار است، می بایست با توجه به کاری که قصد انجام آن را دارید، سرعت را در مقدار کم یا زیاد تنظیم کنید. لازم به ذکر است که در ابتدا باید دریل کاری را با سرعت کم شروع کنید. در اکثر مواقع از سرعت زیاد برای انجام عملیات سوراخ کاری و از سرعت کم برای پیچ کاری استفاده می شود.
     </div>


     <h2> 
     تنظیم صحیح کلاچ
</h2>
    <div>
    جهت افزایش کنترل دریل بر روی مقدار گشتاور مورد نیاز پیچ لازم است تا کلاچ این ابزار به درستی تنظیم شود. دریل ها حالت های متفاوت کلاچ را دارند و مقدار آن متغیر است. برای تنظیم کلاچ تنها کافیست تا فلشی که برای چرخش روی هرکدام وجود دارد را روی عدد مورد نظر قرار دهید.
     </div>


     <h2> 
     تنظیم گیره سه نظام و قرارگیری مته
</h2>
    <div>
    گیره سه نظام بخشی است که باعث اتصال مته به دریل می شود. برای اینکه مته را در داخل سه نظام قرار دهید، لازم است تا سه نظام را در خلاف عقربه های ساعت بچرخانید . با این کار دندانه های محفظه نگهدارنده مته باز می شود و امکان قرارگیری مته در داخل آن فراهم خواهد شد. سپس با چرخش ساعتگرد مته به صورت محکم در سه نظام جای می گیرد.
     </div>
     <div> ^</div>
</div>
<Footer/> 
</div>
)
}

export default Amozesh ;