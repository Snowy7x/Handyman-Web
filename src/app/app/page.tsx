// App download page
import AndroidDownload from "@/components/app/AndroidDownload";
import styles from "@/styles/App.module.css";
import Phone from "@/assets/images/Phone.png";

export default function Page() {
    return (
        <div className="page">
            <div className={styles.container} style={
                // https://images5.alphacoders.com/131/1318408.png
                // https://images2.alphacoders.com/131/1318225.png
                // url('https://images4.alphacoders.com/131/1314707.jpg')
                {}}>
                {/*<div className={styles.overlay}></div>*/}
                <div className={styles.imageContent}>
                    <img src={Phone.src} alt="SnAnime" className={styles.image}/>
                </div>
                <div className={styles.textContent}>
                    <a className={styles.title}>SnAnime</a>
                    <a className={styles.subtitle}>تطبيق عربي لمشاهدة أفلام ومسلسلات الأنمي المترجمة</a>
                    <a className={styles.subtitle}>مجاناً وبدون إعلانات متوفر على أندرويد والويب</a>
                    <a className={styles.note}>غير متوفر على اجهزة الأيفون حاليا (يمكنك استخدام نسخة المتصفح)</a>
                    <AndroidDownload url=""/>
                </div>
            </div>
        </div>
    )
}